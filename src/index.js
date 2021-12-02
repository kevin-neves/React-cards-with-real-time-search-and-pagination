import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import Home from './templates/Home';

ReactDOM.render(
  <StrictMode>
    <Home />
  </StrictMode>,
  document.getElementById('root')
);
