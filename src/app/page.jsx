
import React from 'react'
import {prisma} from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";


async function loadTasks(){
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await  loadTasks();
  console.log(tasks)
  return (
    <div className="">
      <h1 className=" text-center text-3xl my-10" >Home Page</h1>
            <div className="grid grid-cols-3 gap-4 bg-white w-[900px] mx-auto p-6">
        {tasks.map((task) => (
         <TaskCard  task={task} key ={task.id}/>
          
        ))}
</div>

    </div>
  )
}

export default HomePage;
