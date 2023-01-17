import Header from './components/Header';
import Task from './components/Task';
import { useState } from "react"



const App = () =>
{
  
   const [task, setTask] = useState(
      [  {
            id: 1, 
            text: 'Doctors Appointment',
            day: 'feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2, 
            text: 'Working from Home',
            day: 'feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 3, 
            text: 'food Shopping',
            day: 'feb 5th at 2:30pm',
            reminder: false,
        },
     ])
  
  //Delet Task 

  const deleteTask = (id) =>
  {
    setTask(task.filter((task) => task.id !== id))
  }

  //toggle Reminder 

  const toggleReminder = (id) =>
  {
    console.log('id')
  }

  
  return (
    <div className="container">

      <Header title='Task Tracker' />

      {task.length > 0 ? <Task task={task} onDelete=
        
      {deleteTask} onToggle={toggleReminder} /> : 'no Tasks to show'}
    </div>
  );
}

export default App;
