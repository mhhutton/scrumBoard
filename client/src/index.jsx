import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx'
import '../dist/styles.css';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);
