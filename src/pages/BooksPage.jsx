import React, { useEffect, useState } from 'react';
import booksData from './books.json'; // Імпортуємо JSON
import './BooksPage.css';
const BooksPage = () => {
    const [books, setBooks] = useState([]);

    // Ітерація через масив за допомогою ітератора (map)
    useEffect(() => {
        setBooks(booksData);
    }, []);

    return (
        <div className="books-container">
            <h2>Books List</h2>
            <div className="books-grid">
                {books.map((book, index) => (
                    <div key={index} className="book-card">
                        <strong>{book.first_name} {book.last_name}</strong><br />
                        Title: {book.book_name}<br />
                        Genre: {book.genre}<br />
                        Language: {book.language}<br />
                        Publication Date: {book.publication_date}<br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksPage;
