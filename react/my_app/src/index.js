import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import App1 from './App1';
import App3 from './App3'
import CRUD from './CRUD';
import App6 from './App6';
import AppInterview1 from './AppInterview1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <BrowserRouter>
    // <App />
    // </BrowserRouter>
    // <App1/>
    // <App3/>
    // <CRUD/>
   // <App6/>
   <AppInterview1/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
