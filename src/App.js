import React, { useState, useEffect } from 'react';
import InputTask from './components/InputTask';
import ListTask from './components/ListTask';
import FilterButtons from './components/FilterButtons';
import LABELS from './constants/text';
import URLS from './constants/urls';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks) {
      setTasks(storedTasks);
    } else {
      const fetchTasks = async () => {
        try {
          const response = await fetch(URLS.TODOLIST);
          const data = await response.json();
          const placeHolderData = data.map(item => ({
            id: item.id,
            text: item.title,
            completed: item.completed,
          }));
          setTasks(placeHolderData);
        } catch (error) {
          console.error(LABELS.API_ERROR, error);
        }
      };

      fetchTasks();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText.trim() === '')
      return alert(LABELS.EMPTY_ALERT);

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed')
      return task.completed;
    if (filter === 'active')
      return !task.completed;

    return true;
  });

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container">
      <h1 className="app-title">{LABELS.APP_TITLE}</h1>
      <InputTask addTask={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <ListTask
        tasks={filteredTasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;