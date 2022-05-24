import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,//Lấy tất cả dữ liệu trong react sau nhét vào div có tên là root. ReactDOM là dùng thư viện gắn vào
  document.getElementById('root')
  //Đối với jquery nhúng dữ liệu bên trong 1 div bằng cách lấy id của nó
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
