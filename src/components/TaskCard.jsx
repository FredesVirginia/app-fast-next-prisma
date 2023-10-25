"use client"

import React from "react";
import {useRouter} from "next/navigation";

function TaskCard({task}){
    const router = useRouter();
    
   


     return (
        <div className="border-2 border-gray-300 p-2 my-2 "
            onClick={ ()=>{
                router.push("/tasks/edit/" + task.id)
            }}
        >
    <div className="flex flex-col justify-center ">
      <h3 className="font-bold text-center">{task.title}</h3>
      <p className="text-center" >{task.description}</p>
      <p> {new Date(task.createdAt).toLocaleDateString()}</p>
    </div>
  </div> 
     )
}

export default TaskCard;