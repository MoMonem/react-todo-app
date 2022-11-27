import PriorityItem from "./priorityOption";
import Button from "./button";
import { useState } from "react";

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState(""),
    [priority, setPriority] = useState(""),
    [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please add a title");
      return;
    }

    addTask({ title, priority, date });

    setTitle("");
    setPriority("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="task-title" className="form-label">
          Task Title
        </label>
        <input
          type="text"
          className="form-control"
          id="task-title"
          placeholder="Grocery Shopping"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value.toString())}
        />
      </div>
      <fieldset
        className="row mb-3"
        onChange={(e) => setPriority(e.target.value)}
      >
        <legend className="col-form-label col-sm-2 pt-0">Priority</legend>
        <div className="col-sm-10">
          <PriorityItem priorityLevel="High" />
          <PriorityItem priorityLevel="Medium" />
          <PriorityItem priorityLevel="Low" />
        </div>
      </fieldset>
      <div className="d-grid d-md-block">
        <Button text="Add Task" classes="btn btn-primary" />
      </div>
    </form>
  );
};

export default AddTaskForm;
