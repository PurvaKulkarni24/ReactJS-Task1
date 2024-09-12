import React, { useState } from 'react';
import styles from './App.css';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Add Task</button>
    </form>
  );
};

export default TaskForm;
