import React from 'react';
import TaskItem from './TaskItem';
import styles from './App.css';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className={styles.ul}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
