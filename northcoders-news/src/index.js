import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './fontawesome';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
