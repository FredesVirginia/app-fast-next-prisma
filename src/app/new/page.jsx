
import React from 'react'
import axios from "axios";
import { useRouter } from "next/navigation";
function NewPage() {
  const router = useRouter();
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
  
    try {
      const res = await axios.post("/api/tasks", { title, description }, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    router.push("/");
    }
  return (
    <div className="">
        <form  onSubmit={handleSubmit} className="block w-[400px] border-10 bg-white mx-auto flex flex-col justify-center rounded-lg my-10 py-10">
            <h1 className="text-center py-3 my-3  text-2xl font-bold"> Nueva Tarea</h1>
            <div className="block mx-auto flex flex-col justify-center items-center w-[350px] ">  
            <input id="title" type="text" placeholder="Escribe aquí" className="border-2 border-gray-200 p-2 my-2 rounded-lg text-gray-500 placeholder-gray-500 w-full" />
              <textarea id="description" className="border-2 border-gray-200 p-2 my-2 rounded-lg text-gray-500 placeholder-gray-500 w-full" placeholder="Descripcion "></textarea>
              <input type="submit" className=" btn my-4 bg-blue-600 p-4 text-white font-bold  hover:bg-gray-300 hover:text-black  rounded-lg w-full" placeholder="Crear"/>
              <p className="text-gray-500 text-1xl text-center my-4"> 😃 Oye ! 🌈 Para hacer realidad lo Sueños, Trasnformalos en una Lista de Tareas  🎉</p>
            </div>
           
        </form>


    </div>

  )
}

export default NewPage
