import React, { useState } from 'react'
import TodoList from '../component/TodoList';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const handleEvent = (event) => {
        setInput(event.target.value);
    }

    const handleAddTodo = () => {
        if(input.trim() === '') return;
        setTodos([...todos, { id: Math.floor(Math.random() * 1000), text: input, checked: false, edit: false }]);
        setInput('');
    }

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id );
        setTodos(updatedTodos);
    }

    const handleCheckedTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, checked: !todo.checked}
            }

            return todo;
        });

        setTodos(updatedTodos)
    }

    const handleEditTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, edit: !todo.edit}
            }

            return todo;
        });

        setTodos(updatedTodos)
    }

    const setEditValue = (id, input) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo, edit: !todo.edit, text: input}
            }

            return todo;
        });

        setTodos(updatedTodos)
    }
    
    return (
        <div>
            <input type="text" value={input} onChange={handleEvent} />
            <button onClick={handleAddTodo}>Add To Do</button>
            <TodoList 
                todos={todos} handleDeleteTodo={handleDeleteTodo} 
                handleCheckedTodo={handleCheckedTodo} handleEditTodo={handleEditTodo} 
                setEditValue={setEditValue}
                />
        </div>
    )
}

export default TodoApp;