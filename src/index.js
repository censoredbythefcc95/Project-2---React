import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Importing Router into index.js
import {BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <Route component={App} path="/" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

