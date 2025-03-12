"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
require("./Home.css");
var Home = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "home-container", children: [(0, jsx_runtime_1.jsx)("h1", { className: "flying-text", children: "Home" }), (0, jsx_runtime_1.jsx)("div", { className: "video-container", children: (0, jsx_runtime_1.jsx)("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) })] }));
};
exports.default = Home;
