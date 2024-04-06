import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

/*
  Basic React structure
  1. Hooks
  2. Helper functions
  3. return JSX
*/

export default function App() {
  // const [todos, setTodos] = useState([]) // [] is the default value
  const [todos, setTodos] = useState(() => {  // () is the default value. Do this for keeps todos in local storage
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    return JSON.parse(localValue)
  })
  console.log(todos)

  // useEffect Runs the function inside it, when todos change
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id == id) {
          // todo.completed = completed // Won't work bc its immutable
          return { ...todo, completed }
        }
        
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  return (
    <>
      {/* To addTodo, we need data from input. So we pass the function to NewTodoForm as props */}
      <NewTodoForm onSubmit={addTodo}/>

      <h1 className="header">Todo List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}