import React from 'react'
import { useEffect, useState } from 'react'

const index = () => {
  // const todos = [{ "title": "1", "desc": "2" }, { "title": "30", "desc": "39" }, { "title": "300", "desc": "390" }, { "title": "300", "desc": "390" }, { "title": "ou", "desc": "me" }];

  const [todos, setTodos] = useState([])

  useEffect(() => {
    let todos = localStorage.getItem("todos")
    setTodos(JSON.parse(todos))
  }, [])
  
  
  
  const deleteTodo = (title) =>{
    let newTodos = todos.filter(item =>{
      return item.title != title;
    })
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const editTodo =()=>{
  
    
  }
  const shareTodo =()=>{
    
  }
  
  return (

    <section class="text-gray-600 body-font flex justify-center">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 flex justify-center">My Todo</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base flex justify-center">Whatever you write will show up here</p>
        </div>
        <div class="flex flex-wrap -m-4">
          {todos.map(item => {
            return <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={`https://picsum.photos/600/900?a=${item.title}`} />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                  <p class="mb-4">{item.desc}</p>
                  <span class="inline-flex">
                    <a class="text-gray-500 cursor-pointer" onClick={()=>{deleteTodo(item.title)}} >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z" /></svg>
                    </a>
                    <a class="ml-2 text-gray-500 cursor-pointer" onClick={editTodo} >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z" /></svg>
                    </a>
                    <a class="ml-2 text-gray-500 cursor-pointer" onClick={shareTodo}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 18 2 A 3 3 0 0 0 15 5 A 3 3 0 0 0 15.054688 5.5605469 L 7.9394531 9.7109375 A 3 3 0 0 0 6 9 A 3 3 0 0 0 3 12 A 3 3 0 0 0 6 15 A 3 3 0 0 0 7.9355469 14.287109 L 15.054688 18.439453 A 3 3 0 0 0 15 19 A 3 3 0 0 0 18 22 A 3 3 0 0 0 21 19 A 3 3 0 0 0 18 16 A 3 3 0 0 0 16.0625 16.712891 L 8.9453125 12.560547 A 3 3 0 0 0 9 12 A 3 3 0 0 0 8.9453125 11.439453 L 16.060547 7.2890625 A 3 3 0 0 0 18 8 A 3 3 0 0 0 21 5 A 3 3 0 0 0 18 2 z" /></svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default index

