import React from 'react'
import { useState } from 'react'

const Body = () => {
    
    const [todo, setTodo] = useState({title: "", desc: ""})

    const addTodo = () =>{
      
    }
    return (
        <div>
            
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Add a TODO</h2>
                        <div class="relative mb-4">
                            <label for="full-name" class="leading-7 text-sm text-gray-600">To do title</label>
                            <input value={todo.title} type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Todo list</label>
                            <input value={todo.desc} type="text" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button onClick ={addTodo} class="text-white bg-indigo-500 border-0 w-fit py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </div>
            </section>
        </div>
        
    )
}

export default Body