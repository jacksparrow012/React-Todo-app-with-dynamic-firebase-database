import React, { useState, useEffect } from "react"
import './App.css';
import Contact from "./Contact"
import Todo from "./Todo"

import { Button, InputLabel, Input, FormControl } from '@material-ui/core'
import db from "./Firebase"
import firebase from "firebase"
function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState("")
  //when the app loads , we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    db.collection("todos3").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo3: doc.data().todo3 })))
    })
  }, [])
  const addTodo = (e) => {
    e.preventDefault()
    // setTodos([...todos, input])
    db.collection("todos3").add({
      todo3: input,

      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className="App">
      <h2>Hello world</h2>
      <form>
        <FormControl>

          <InputLabel>Write a First Todo</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)} />
        </FormControl>
        <FormControl>
          <InputLabel>Write a Second Todo</InputLabel>
          <Input value={input2} onChange={(event) => setInput2(event.target.value)} />
        </FormControl>
        {/* <TextField id="outlined-basic" label="Write Todo" variant="outlined" value={input} onChange={(event) => setInput(event.target.value)} /> */}
        {/* <input value={input} onChange={(event) => setInput(event.target.value)} /> */}
        {/* <button onClick={() => setTodos(todos.concat(input))}>Add Todo</button> */}
        {/* <button onClick={addTodo}>Add todo</button> */}
        <Button disabled={!input && !input2} type="submit" variant="contained" color="primary" onClick={addTodo} >
          Add Todo
</Button>

      </form>
      <ul>
        {todos.map(todo3 => {
          return <Todo todo3={todo3} />
        })}

      </ul>
      <Contact />
    </div>
  );
}

export default App;
