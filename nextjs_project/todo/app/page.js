'use client';
import { useState } from 'react';
import React from 'react'



import Header from '../components/header/Header'
// import Body from '../components/body/Body'
import Footer from '../components/footer/Footer'
import Mytodo from '../components/header/todos'

export default function Home() {
  
  const [todo, setTodo] = useState({title: "", desc: ""})

  const addTodo = () =>{
    let todos = localStorage.getItem("todos");
    if(todos){
      let todosJson = JSON.parse(todos)
      if (todosJson.filter(value=>{ return value.title == todo.title}).length > 0){
        alert("todo title is already exists")
        setTodo({title: "", desc: ""})
      }
      else
      {todosJson.push(todo)
      localStorage.setItem("todos", JSON.stringify(todosJson))
      alert("todo has been added")
      setTodo({title: "", desc: ""})}
    }
    else{
      localStorage.setItem("todos", JSON.stringify([todo]))
    }
  } 
  const onChange = (e) =>{
    setTodo({...todo, [e.target.name]: e.target.value})
    console.log(todo);
  }
  return (
    
    <div className="container mx-auto min-h-Screen" >
    <Header/>
    <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Add a TODO</h2>
                        <div class="relative mb-4">
                            <label for="title" class="leading-7 text-sm text-gray-600">To do title</label>
                            <input onChange={onChange} value={todo.title} type="text" id="title" name="title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div class="relative mb-4">
                            <label for="desc" class="leading-7 text-sm text-gray-600">Todo list</label>
                            <input onChange={onChange} value={todo.desc} type="text" id="desc" name="desc" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button onClick ={addTodo} class="text-white bg-indigo-500 border-0 w-fit py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add todo</button>
                    </div>
                </div>
            </section>
    
    {/* <Body/> */}
    <Mytodo/>
    <Footer/>
    </div>

    
    
    
    
  )
}
