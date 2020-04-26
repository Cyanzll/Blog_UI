import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconFont/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);