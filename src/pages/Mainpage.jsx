import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Імпорт Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Імпорт для аутентифікації
import './Mainpage.css';

function Mainpage() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null); // Додано для збереження користувача
    const auth = getAuth();

    // Завантаження задач для авторизованих користувачів
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Оновлюємо стан користувача
        });

        // Очищення слухача
        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        if (user) {
            const fetchTodos = async () => {
                try {
                    const q = query(collection(db, "todos"), where("uid", "==", user.uid)); // Фільтруємо за uid користувача
                    const querySnapshot = await getDocs(q);
                    const todoList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setTodos(todoList);
                } catch (error) {
                    console.error("Error fetching todos:", error);
                    setError("Error fetching todos. Try again.");
                }
            };
            fetchTodos();
        }
    }, [user]);

    // Додавання нового завдання
    const addTodo = async (text) => {
        if (!user) {
            setError("User is not authenticated.");
            return;
        }

        if (text.trim() === "") {
            setError("Task cannot be empty.");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "todos"), {
                text,
                completed: false,
                uid: user.uid, // Додаємо uid користувача до запису
            });
            setTodos(prevTodos => [...prevTodos, { id: docRef.id, text, completed: false }]);
            setNewTodo(""); // Очищаємо поле введення
            setError(""); // Очистити помилки
        } catch (error) {
            console.error("Error adding task:", error.message);
            setError("Error adding task. Please try again.");
        }
    };

    // Перемикання статусу завдання
    const toggleTodo = async (id, completed) => {
        try {
            const todoRef = doc(db, "todos", id);
            await updateDoc(todoRef, { completed: !completed });
            setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !completed } : todo));
        } catch (error) {
            console.error("Error updating task status:", error.message);
            setError("Error updating task status.");
        }
    };

    // Видалення завдання
    const deleteTodo = async (id) => {
        try {
            await deleteDoc(doc(db, "todos", id));
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error.message);
            setError("Error deleting task.");
        }
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            {!user ? (
                <p>Please log in to view and manage your to-do list.</p>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}

export default Mainpage;
