import { useEffect } from "react";
import { useState } from "react";
import Section from "./Section";

const TaskList = ({tasks,setTasks}) =>{
    const [todos,setTodos] = useState([]);
    const [inProgress,setInProgress] = useState([]);
    const [closed,setClosed] = useState([]);

    useEffect(()=>{

        const ftodos = tasks.filter((task) =>task.status === "todo");
        const finProgress = tasks.filter((task) =>task.status === "inProgress");
        const fclosed = tasks.filter((task) =>task.status === "closed");

        setTodos(ftodos);
        setInProgress(finProgress);
        setClosed(fclosed);
    },[tasks])

    const statuses = ["todo","inProgress","closed"];
    return(
        <div className="flex gap-16">
            {statuses.map((status,index)=> 
                <Section 
                   key={index} 
                   status={status}
                   tasks={tasks} 
                   setTasks={setTasks} 
                   todos={todos} 
                   inProgress={inProgress} 
                   closed={closed}
                />) }
             
        </div> 
    );
};

export default TaskList;
