import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
//
// function fullName(name: string = '', surname: string = '') {
//     let fullName = name + ' ' + surname;
//     if (fullName) {
//         return <div>
//             <h1>hello,{fullName}</h1>
//         </div>
//     } else {
//         return <div>
//             <h1>hello,stranger</h1>
//         </div>
//     }
// }
//
// ReactDOM.render(fullName('alex', 'pupkin'), document.getElementById('root1'));
//
// function tick() {
//     let element = <h1>it`s {new Date().toLocaleTimeString()}</h1>
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// //setInterval(tick, 1000);

//ReactDOM.render(element1, document.getElementById('root1'));
// If you want to start measuring performance in your app, pass a function
reportWebVitals();
