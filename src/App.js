import TaskCard from "./components/taskCard";
import AddTaskForm from "./components/addTaskForm";
import Tasks from "./components/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // fetch all tasks from the server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks"),
      data = await res.json();
    return data;
  };

  // get all tasks on page load
  useEffect(() => {
    fetchTasks().then((data) => setTasks(data));
  }, []);

  // add a task
  const addTask = async (task) => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => setTasks([...tasks, data]));
  };

  // delete a task
  const deleteTask = async (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h1>My Todo List</h1>
            <AddTaskForm addTask={addTask} />
          </div>
        </div>
        {tasks.length === 0 ? (
          "No tasks to show"
        ) : (
          <Tasks tasks={tasks} onDelete={deleteTask} />
        )}
      </div>
    </div>
  );
}

export default App;
