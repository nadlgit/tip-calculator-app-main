import React from 'react';
import ReactDOM from 'react-dom';
import imgLogo from './logo.svg'
import Calculator from './Calculator'
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <header className='app-logo'><img src={imgLogo} alt="App logo" /></header>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
