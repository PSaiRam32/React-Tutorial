import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Menu from './component';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header /> */}
    {/* <Menu /> */}
  </React.StrictMode>
);

// let r=ReactDOM.createRoot(document.getElementById("root"));
// let name="SAIRAM"
// let menu=(
//   <ul>
//     <li className='test'>{name}</li>
//     <li id='about'>About</li>
//   </ul>
// )

// // r.render(
// //   // <ul>
// //   //   <li className='test'>{name}</li>
// //   //   <li id='about'>About</li>
// //   // </ul>
// // )
// // r.render(menu)

// function Menu(){
//   return (<div>
//     <h1>Hello</h1>
//     <p>para 1</p>
//     <p> para 2</p>
//     </div>)
// }
// r.render(<Menu></Menu>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
