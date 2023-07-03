import Header from './components/Header'
import Footer from './components/Footer'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
//import About from './components/About'
import { useState, useEffect} from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[])

// Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }


// Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}

// Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  const data = await res.json()
  setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = { id, ...task }
  // setTasks([...tasks, newTask])
}


// Delete Task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder: !taskToToggle.reminder }

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updTask)
  })

  const data = await res.json()

  setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder:
    data.reminder} : task
    )
  )
}

  return (
    <div className='container'>
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />) : ( 'No tasks to show')}
      {/* <Footer /> */}
    </div>
  )
}

export default App;

// Using Routers

// This functionality is broken or outdated. To see the tutorial for this
//project go to https://www.youtube.com/watch?v=w7ejDZ8SWv8
// YouTube video 'ReactJS Crash Course' by Traversy Media

// <Router>
//       <div className='container'>
//         <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
//         <Route path='/' exact render={(props) => (
//           <>
//             {showAddTask && <AddTask onAdd={addTask} />}
//             {tasks.length > 0 ? (<Tasks 
//             tasks={tasks} 
//             onDelete={deleteTask}
//             onToggle={toggleReminder}
//             />) : ( 'No tasks to show')}
//           </>
//         )}
//         />
//         <Route path='/about' component={About}/>
//         <Footer />
//       </div>
//     </Router>


//To run this project on a local host, open a local 
//(in this directory using code .) 
//terminal and use npm run start