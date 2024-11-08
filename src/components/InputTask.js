import React, { useState } from 'react';
import LABELS from '../constants/text';

function InputTask({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder={LABELS.PLACEHOLDER}
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>{LABELS.ADD_TASK}</button>
    </div>
  );
}

export default InputTask;
