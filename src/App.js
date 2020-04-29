//根组件
import React, {Fragment} from 'react';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Route path='/' exact component = {Home}></Route>
        <Route path='/detail' exact component = {Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
