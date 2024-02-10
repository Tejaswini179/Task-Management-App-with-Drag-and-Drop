import { useEffect, useState } from 'react'
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


function App() {
 const [tasks,setTasks] = useState([]);
 console.log(tasks);


 useEffect(()=>{
  setTasks(JSON.parse(localStorage.getItem("tasks")))
 },[])

  return (
    <>
     <DndProvider backend={HTML5Backend} >
        <Toaster/>
          <div className="bg-slate-100 w-screen min-h-fit flex flex-col items-center p-3 gap-16 pt-32">
          <h1 className="font-bold text-3xl text-teal-800	">Task Management Application</h1>
            <CreateTask tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
          </div>
      </DndProvider>
    </>
  )
}

export default App;