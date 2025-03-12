import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Mainpage from './pages/Mainpage.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import TypeScriptPage from './pages/TypeScriptPage.jsx'; // Імпортуємо нову сторінку

import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Mainpage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/typescript" element={<TypeScriptPage />} /> {/* Додаємо маршрут */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
