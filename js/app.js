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

  useEffect(() => {
    getTasks((data) => {
      console.log("data app: ", data);
      setTasks(data);
    });
  }, []);


  // () removeTask localy


  return (
    <>
      <NewTask onNewTask={onNewTask} />
      {
        tasks && tasks.map(task => <Task key={task.id} task={task} onRemoveTask={onRemoveTask}/>)
      }
    </>
  )

}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
