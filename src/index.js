import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js';

import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconFont/>
    <App />
  </Fragment>,
  document.getElementById('root')
);