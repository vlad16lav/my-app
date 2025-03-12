import React from 'react';
import PropTypes from 'prop-types';
import './PropTypes.css'; // Імпортуємо файл стилів

const PropTypesComponent = ({ title, description, count }) => {
    return (
        <div className="prop-types-container">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Count: {count}</p>
        </div>
    );
};

// Визначення типів для пропсів з допомогою PropTypes
PropTypesComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

// Список людей
const PeopleList = ({ people }) => {
    return (
        <div className="people-list-container">
            <h2>People List</h2>
            <ul className="people-list">
                {people.map((person, index) => (
                    <li key={index} className="person-item">
                        <strong>{person.name}</strong> ({person.age} years old) - Hobbies: {person.hobbies.join(', ')}
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Визначаємо PropTypes для перевірки структури об'єкта
PeopleList.propTypes = {
    people: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            age: PropTypes.number.isRequired,
            hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

// Дані людей
const peopleData = [
    { name: "Alice", age: 28, hobbies: ["reading", "cycling", "painting"] },
    { name: "Bob", age: 35, hobbies: ["coding", "hiking", "swimming"] },
    { name: "Charlie", age: 22, hobbies: ["photography", "gaming", "traveling"] },
];

// Основна компонента, що використовує PropTypesComponent і PeopleList
const PropTypesPage = () => {
    return (
        <div>
            <PropTypesComponent
                title="PropTypes Example"
                description="This page demonstrates PropTypes usage in React."
                count={3}
            />
            <PeopleList people={peopleData} />
        </div>
    );
};

export default PropTypesPage;
