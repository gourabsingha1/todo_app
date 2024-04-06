import { useState } from "react"

export function NewTodoForm(props) { // props is an object
// export function NewTodoForm({ onSubmit }) { // This is called de-structuring
  const [newItem, setNewItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if(newItem === "") return

    // addTodo(newItem) // Won't work
    props.onSubmit(newItem)

    // These dont create multiple todos
    // setTodos([...todos,
    // { id: crypto.randomUUID(), title: newItem, completed: false }])
    // setTodos([...todos,
    // { id: crypto.randomUUID(), title: newItem, completed: false }])

    // These will create multiple todos
    // setTodos(currentTodos => {
    //   return [
    //     ...currentTodos,
    //     { id: crypto.randomUUID(), title: newItem, completed: false }
    //   ]
    // })
    // setTodos(currentTodos => {
    //   return [
    //     ...currentTodos,
    //     { id: crypto.randomUUID(), title: newItem, completed: false }
    //   ]
    // })

    setNewItem('') // Clear input after adding
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          className="text-input"
        />
      </div>
      <button className="button-56">Add</button>
    </form>
  )
}