import React from 'react'

function NewPage() {
  return (
    <div className=" h-48  w-70 bg-blue-600">
  <form>
    <div >
     
      <input id="input1" type="text" className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div >
    
      <input id="input2" type="text" className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Crear</button>
  </form>
</div>

  )
}

export default NewPage
