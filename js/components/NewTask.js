import React from 'react';
import { addTask } from "../api/tasks";

// TODO
// props
// form => submit

export default function NewTask(props) {

  const handleSubmitNewTask = (event) => {
      event.preventDefault();
      const form = event.target;
      const title = form.title.value;
      const description = form.description.value;
      const task = {
        title,
        description,
        status: 'open'
      };
      console.log("task: ", task)
      addTask(task, props.onNewTask);
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h1 className="card-title">New task</h1>
        <form onSubmit={handleSubmitNewTask}>
          <div className="form-group">
            <input type="text"
              className="form-control"
              name="title"
              placeholder="Title" />
          </div>
          <div className="form-group">
            <input type="text"
              className="form-control"
              name="description"
              placeholder="Description" />
          </div>
          <button className="btn btn-info">
            Add task
            <i className="fas fa-plus-circle ml-1"></i>
          </button>
        </form>
      </div>
    </div>
  )

}
