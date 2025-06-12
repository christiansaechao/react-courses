import React, { useState } from "react";

const TodoList = ({
  todos,
  handleDeleteTodo,
  handleCheckedTodo,
  handleEditTodo,
  setEditValue,
}) => {
  const [editInput, setEditInput] = useState('');
  const handleEvent = (event) => {
    setEditInput(event.target.value);
  };
  return (
    <section>
      <h3>To do list element:</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.checkedid}>
            <p
              style={{ textDecoration: todo.checked ? "line-through" : "none" }}
            >
              {todo.text}{" "}
            </p>
            <input
              style={{ display: todo.edit ? "block" : "none" }}
              onChange={handleEvent}
              type="text"
            />
            <button onClick={() => handleDeleteTodo(todo.id)}>deleted</button>
            <button onClick={() => handleCheckedTodo(todo.id)}>
              {todo.checked ? "checked" : "not checked"}
            </button>
            <button onClick={() => handleEditTodo(todo.id)}>{todo.edit? 'close':'open'} edit</button>
            <button 
                onClick={()=> setEditValue(todo.id, editInput)}
                style={{ display: todo.edit ? "block" : "none" }}
                disabled={ editInput === ''}
                >
                    edit fr fr 
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
