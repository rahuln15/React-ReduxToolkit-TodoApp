import React from 'react'
import "./App.css"
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import TodoApp from './components/TodoApp'

const App = () => {
  return (
    <>

    <div>Todo App Using Redux Toolkit</div>
    {/* <AddTodo/>
    <Todos/> */}
    <TodoApp/>
    </>
  )
}

export default App