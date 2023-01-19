import { useState, useEffect } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [task, setTask] = useState([]);

  useEffect(() =>
  {
    const getTasks = async () =>
    {
      const tasksFromSever = await fetchTasks()
      setTask(tasksFromSever)
    }
    getTasks()
  }, [])
  

  //fetch data

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/task");
    const data = await res.json();

    return data;
  };

  //add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };

    setTask([...task, newTask]);
  };

  //Delet Task

  const deleteTask = async (id) =>
  {
    await fetch(`http://localhost:5000/task/${id}`, {
      method:'DELETE'
    })

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
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker" />
      {showAddTask && <AddTask onAdd={addTask} />}
      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no Tasks to show"
      )}
    </div>
  );
};

export default App;
