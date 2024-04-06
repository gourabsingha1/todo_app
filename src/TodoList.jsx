import { TodoItem } from "./TodoItem"

export function TodoList ({todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
    {/* If no todos, print. This is called short circuiting */}
    {todos.length === 0 && "No Todos"}

    {/* To loop through all the todos */}
    {todos.map(todo => {
      return (
        <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      )
    })}

    {/* <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li> */}
    </ul>
  )
}