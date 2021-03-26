import React, { useState } from "react"
import './App.css';

function App() {
  const [todos, setTodos] = useState(["Take dogs fo a walk", "Take the rubbish out"])
  const [input, setInput] = useState('')
  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
      <h2>Hello world</h2>
      <form>
        <input value={input} onChange={(event) => setInput(event.target.value)} />
        {/* <button onClick={() => setTodos(todos.concat(input))}>Add Todo</button> */}
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => {
          return <li>{todo}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
