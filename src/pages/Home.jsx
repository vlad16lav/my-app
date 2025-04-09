import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // Завантажуємо YouTube API лише один раз
        if (!document.getElementById('youtube-api-script')) {
            const script = document.createElement('script');
            script.src = "https://www.youtube.com/iframe_api";
            script.id = 'youtube-api-script';
            document.body.appendChild(script);
        }

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

        // Очистка після демонтажу компонента
        return () => {
            // Можна також звільнити ресурси, якщо потрібно
            const iframeElement = document.getElementById('youtube-video');
            if (iframeElement) {
                iframeElement.innerHTML = ''; // Видаляє iframe
            }
        };
    }, []);

    return (
        <div className="home-container">

            <div className="video-container">
                <div id="youtube-video"></div>
            </div>
        </div>
    );
};

export default Home;
