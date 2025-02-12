import React, { useState } from 'react';

function TodoForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
