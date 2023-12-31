import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

import NewTask from "./components/NewTask";
import Task from "./components/Task";

import { getTasks } from './api/tasks';

function App() {

  const [tasks, setTasks] = useState(null);

  const onNewTask = (task) => {
    setTasks([...tasks, task]);
  }

  const onRemoveTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  const onFinishTask = (id) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.status = 'closed';
      }
      return task;
    });
    setTasks(newTasks);
  }

  useEffect(() => {
    getTasks((data) => {
      setTasks(data);
    });
  }, []);


  return (
    <>
      <NewTask onNewTask={onNewTask} />
      {
        tasks && tasks.map(task => <Task key={task.id} task={task} onRemoveTask={onRemoveTask} onFinishTask={onFinishTask}/>)
      }
    </>
  )

}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
