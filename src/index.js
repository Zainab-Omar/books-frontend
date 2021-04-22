import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'react-redux'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

