import React, { useState, useEffect } from 'react';
import './Mainpage.css';

function Mainpage() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const [error, setError] = useState("");
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        // Динамічний імпорт бібліотеки
        import('bad-words').then((module) => {
            // Використовуємо екземпляр класу через імпорт
            const badWordsFilter = new module.Filter(); // Тут ми створюємо екземпляр
            setFilter(badWordsFilter);  // Ініціалізуємо стан фільтра
        });
    }, []);

    const addTodo = (text) => {
        if (text.trim() === "") return;

        if (filter && filter.isProfane(text)) {
            setError("This task contains inappropriate words. Please try again.");
            return;
        }

        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
        setNewTodo("");
        setError("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
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

            {error && <div className="error-message">{error}</div>} {/* Повідомлення про помилку */}

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                        <span onClick={() => toggleTodo(todo.id)} className="todo-text">
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
