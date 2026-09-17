import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import TodoList from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';

// 03
// import Library from "./03/Library";
// import "./03/Book.css";
// import Library from "./03/enhanced_css/Library";
// import "./03/enhanced_css/Book.css";

// 04
// import Clock from "./04/Clock";
// import ConfirmDialog from "./04/ConfirmDialog";
// import ConfirmDialogList from "./04/ConfirmDialogList";

// 05
import UserInfoList from "./05/exam03/UserInfoList";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <React.StrictMode>
            <UserInfoList/>
        </React.StrictMode>
    );

// setInterval(() => {
//     root.render(
//         <React.StrictMode>
//             <UserInfoList/>
//         </React.StrictMode>
//     );
// }, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint.
reportWebVitals();