import { useState } from "react"
import Header from './componenets/Header'
import Tasks from './componenets/Tasks'
import AddTask from './componenets/AddTask'

const App = () => {
  // [nameOfState, functionToUpdateState]
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30PM',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = () => {

  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  return (
    <div className='container'>
      <Header></Header>
      <AddTask onAdd={addTask}></AddTask>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : ('No Tasks To Display')}
    </div>
  );
}

export default App;
