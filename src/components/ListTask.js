import React from 'react';
import LABELS from '../constants/text';

function ListTask({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span className={`${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)} className="delete-btn">{LABELS.DELETE_TASK}</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
