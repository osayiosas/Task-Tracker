import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

const App = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Working from Home",
      day: "feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "food Shopping",
      day: "feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };

    setTask([...task, newTask]);
  };

  //Delet Task

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  //toggle Reminder

  const toggleReminder = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask onAdd={addTask} />
      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no Tasks to show"
      )}
    </div>
  );
};

export default App;
