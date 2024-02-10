import { useDrop } from "react-dnd";
import toast from "react-hot-toast";
import Header from "./Header";
import SingleTask from "./SingleTask";

const Section = ({status,tasks,setTasks,todos,inProgress,closed}) =>{
    
    const [{isOver}, drop] = useDrop(()=>({
        accept :"task",
        drop : (item)=> addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    let text = "Added";
    let bg = "bg-pink-700";
    let tasksToMaP = todos;

    if(status === "inProgress"){
        text = "Started";
        bg = " bg-amber-400 ";
        tasksToMaP = inProgress;
    }

    if(status === "closed"){
        text = "Completed";
        bg = " bg-green-500 ";
        tasksToMaP = closed;
    }
    
    const addItemToSection = (id) =>{
        setTasks(prev =>{
            
            const mTasks = prev.map(t=>{
                if(t.id == id){
                   return {...t,status : status}
                }
                return t;
            })

            localStorage.setItem("tasks",JSON.stringify(mTasks));
            toast("Task Status changed");
            return mTasks;
        })
    }

    return(
        <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-100":""}`}>
          <Header text={text} bg={bg} count={tasksToMaP.length}/>
          {tasksToMaP.length > 0 && tasksToMaP.map((task) =>(
           <SingleTask key={task.id} 
            task = {task} tasks= {tasks} setTasks={setTasks}/>
            ))}
        </div>
    );
}

export default Section;