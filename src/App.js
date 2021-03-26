import React, { useState } from "react"
import './App.css';
import Todo from "./Todo"
import { Button, InputLabel, Input, FormControl } from '@material-ui/core'
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
        <FormControl>

          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
        </FormControl>
        {/* <TextField id="outlined-basic" label="Write Todo" variant="outlined" value={input} onChange={(event) => setInput(event.target.value)} /> */}
        {/* <input value={input} onChange={(event) => setInput(event.target.value)} /> */}
        {/* <button onClick={() => setTodos(todos.concat(input))}>Add Todo</button> */}
        {/* <button onClick={addTodo}>Add todo</button> */}
        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo} >
          Add Todo
</Button>

      </form>
      <ul>
        {todos.map(todo => {
          return <Todo text={todo} />
        })}
      </ul>
    </div>
  );
}

export default App;
