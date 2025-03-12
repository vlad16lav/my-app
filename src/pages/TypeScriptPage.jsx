import React from 'react';

// Оголошуємо тип для props
type GreetingProps = {
    name: string;
};

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

const TypeScriptPage = () => {
    return (
        <div>
            <h2>This is a TypeScript page!</h2>
            {/* Використовуємо компонент Greeting з типами */}
            <Greeting name="John Doe" />
        </div>
    );
};

export default TypeScriptPage;