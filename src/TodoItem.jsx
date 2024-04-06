export function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li key={todo.id}> {/* Each child in a list should have a unique "key" prop. */}
      <label>
        <input type="checkbox" checked={todo.completed}
        onChange={e => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="button-28">Delete</button>
    </li>
  )
}