import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import NoPage from "./pages/NoPage.jsx";
import Mainpage from './pages/Mainpage.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import PropTypes from './pages/PropTypes.jsx'; // Імпортуємо нову сторінку

import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Mainpage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/prop-types" element={<PropTypes title="PropTypes" description="This page demonstrates PropTypes usage in React." />} /> {/* Новий маршрут */}
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
