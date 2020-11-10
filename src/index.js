import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { HashRouter as Router } from 'react-router-dom'
import Model from './models';

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root')
);