"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = __importDefault(require("./pages/Layout"));
var NoPage_1 = __importDefault(require("./pages/NoPage"));
var Mainpage_jsx_1 = __importDefault(require("./pages/Mainpage.jsx"));
var Home_jsx_1 = __importDefault(require("./pages/Home.jsx"));
var Profile_jsx_1 = __importDefault(require("./pages/Profile.jsx"));
var TypeScriptPage_jsx_1 = __importDefault(require("./pages/TypeScriptPage.jsx")); // Імпортуємо нову сторінку
require("./index.css");
(0, client_1.createRoot)(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Mainpage_jsx_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/home", element: (0, jsx_runtime_1.jsx)(Home_jsx_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/profile", element: (0, jsx_runtime_1.jsx)(Profile_jsx_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/typescript", element: (0, jsx_runtime_1.jsx)(TypeScriptPage_jsx_1.default, {}) }), " ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NoPage_1.default, {}) })] }) }) }) }));
