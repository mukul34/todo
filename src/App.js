import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import "./App.css";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  //when the app loads, we need to listen to database and ftech new todos
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  //change the input
  const changeInput = (e) => {
    setInput(e.target.value);
  };

  //add todo to the todos list
  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <form>
        <h1>Goku Todu</h1>

        <FormControl>
          <InputLabel>Add a Todu</InputLabel>
          <Input value={input} onChange={changeInput} />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          disabled={!input}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        <ul>
          {todos.map((todo, index) => (
            <Todo todo={todo} key={index} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
