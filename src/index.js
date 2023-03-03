import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './component/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
  <AppProvider>
    <App/>
  </AppProvider>
  </BrowserRouter>
  
);
//ReactDOM.render(Index,document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
