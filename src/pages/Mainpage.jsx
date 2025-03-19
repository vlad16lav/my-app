import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Імпорт Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import './Mainpage.css';

function Mainpage() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            const querySnapshot = await getDocs(collection(db, "todos"));
            const todoList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTodos(todoList);
        };
        fetchTodos();
    }, []);

    const addTodo = async (text) => {
        if (text.trim() === "") return;

        try {
            const docRef = await addDoc(collection(db, "todos"), {
                text,
                completed: false
            });
            setTodos([...todos, { id: docRef.id, text, completed: false }]);
            setNewTodo("");
        } catch (error) {
            setError("Error adding task. Try again.");
        }
    };

    const toggleTodo = async (id, completed) => {
        try {
            const todoRef = doc(db, "todos", id);
            await updateDoc(todoRef, { completed: !completed });
            setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo));
        } catch (error) {
            setError("Error updating task status.");
        }
    };

    const deleteTodo = async (id) => {
        try {
            await deleteDoc(doc(db, "todos", id));
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            setError("Error deleting task.");
        }
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <div className="add-todo">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={() => addTodo(newTodo)}>Add Todo</button>
            </div>
            {error && <div className="error-message">{error}</div>}
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                        <span onClick={() => toggleTodo(todo.id, todo.completed)} className="todo-text">
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Mainpage;
