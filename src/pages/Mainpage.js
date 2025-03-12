"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
require("./Mainpage.css");
function Mainpage() {
    var _a = (0, react_1.useState)([]), todos = _a[0], setTodos = _a[1];
    var _b = (0, react_1.useState)(""), newTodo = _b[0], setNewTodo = _b[1];
    var _c = (0, react_1.useState)(""), error = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(null), filter = _d[0], setFilter = _d[1];
    (0, react_1.useEffect)(function () {
        // Динамічний імпорт бібліотеки
        Promise.resolve().then(function () { return __importStar(require('bad-words')); }).then(function (module) {
            // Використовуємо екземпляр класу через імпорт
            var badWordsFilter = new module.Filter(); // Тут ми створюємо екземпляр
            setFilter(badWordsFilter); // Ініціалізуємо стан фільтра
        });
    }, []);
    var addTodo = function (text) {
        if (text.trim() === "")
            return;
        if (filter && filter.isProfane(text)) {
            setError("This task contains inappropriate words. Please try again.");
            return;
        }
        var newTodo = { id: Date.now(), text: text, completed: false };
        setTodos(__spreadArray(__spreadArray([], todos, true), [newTodo], false));
        setNewTodo("");
        setError("");
    };
    var toggleTodo = function (id) {
        setTodos(todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { completed: !todo.completed }) : todo;
        }));
    };
    var deleteTodo = function (id) {
        setTodos(todos.filter(function (todo) { return todo.id !== id; }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "todo-container", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Todo List" }), (0, jsx_runtime_1.jsxs)("div", { className: "add-todo", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", value: newTodo, onChange: function (e) { return setNewTodo(e.target.value); }, placeholder: "Add a new task" }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return addTodo(newTodo); }, children: "Add Todo" })] }), error && (0, jsx_runtime_1.jsx)("div", { className: "error-message", children: error }), " ", (0, jsx_runtime_1.jsx)("ul", { className: "todo-list", children: todos.map(function (todo) { return ((0, jsx_runtime_1.jsxs)("li", { className: "todo-item ".concat(todo.completed ? "completed" : ""), children: [(0, jsx_runtime_1.jsx)("span", { onClick: function () { return toggleTodo(todo.id); }, className: "todo-text", children: todo.text }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return deleteTodo(todo.id); }, className: "delete-btn", children: "Delete" })] }, todo.id)); }) })] }));
}
exports.default = Mainpage;
