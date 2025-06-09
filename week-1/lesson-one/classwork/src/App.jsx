import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [editingToDoId, setEditingToDoId] = useState(null);
  const [editTitleText, setEditTitleText] = useState("");
  const [editDescriptionText, setEditDescriptionText] = useState("");

  const handleSave = () => {
    const updatedTodos = [...todos, todo]
    setTodos(updatedTodos);

  };

  const handleEditSave = (editingToDoId) => {
      const updatedTodos = todos.map((todo, i) => {
        if (i === editingToDoId) {
          todo.title = editTitleText;
          todo.description = editDescriptionText;
        }

        return todo;
      })

      setTodos(updatedTodos);
      setEditTitleText("");
      setEditDescriptionText("");
      setEditingToDoId(null);
    }


  const handleEdit = (idx) => {
    setEditingToDoId(idx);
  };

  const handleDelete = (idx) => {
    setTodos(todos.filter((todos, i) => i !== idx));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      Title:{" "}
      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />{" "}
      <br />
      Description:{" "}
      <input
        type="text"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button onClick={() => handleSave()}>Add Todo</button>

      
      {todos.map((todo, idx) => (
        <div
          key={idx}
          style={{ border: "1px solid white", padding: "10px", margin: "10px" }}
        >
          {/* {todo.edit && <input type="text" />} */}
          {idx == editingToDoId ? (
            <>
              <input
                type="text"
                value={editTitleText}
                onChange={(e) => setEditTitleText(e.target.value)}
                placeholder="Title"
              />
              <input
                type="text"
                value={editDescriptionText}
                onChange={(e) => setEditDescriptionText(e.target.value)}
                placeholder="Description"
              />
              <button onClick={() => handleEditSave(idx)}>Save</button>
            </>
          ) : (
            <>
              <p>{todo.title}</p>
              <p>{todo.description}</p>
            </>
          )}

          <button onClick={() => handleDelete(idx)}>Delete</button>
          <button onClick={() => handleEdit(idx)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
