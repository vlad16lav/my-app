import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // Завантажуємо YouTube API
        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);

        // Створюємо функцію для ініціалізації відео
        window.onYouTubeIframeAPIReady = () => {
            new window.YT.Player('youtube-video', {
                videoId: 'dQw4w9WgXcQ', // ID відео
                events: {
                    onReady: (event) => {
                        // Налаштовуємо гучність на 25%
                        event.target.setVolume(25);
                        event.target.playVideo(); // Автоматичний запуск відео
                    },
                },
            });
        };
    }, []);

    return (
        <div className="home-container">
            <h1 className="flying-text">Home</h1>
            <div className="video-container">
                <div id="youtube-video"></div>
            </div>
        </div>
    );
};

export default Home;
