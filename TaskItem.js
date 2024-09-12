import React from 'react';
import styles from './App.css';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className={styles.li}>
      <span className={task.completed ? styles.completed : ''}>
        {task.text}
      </span>
      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
