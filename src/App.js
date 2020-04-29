//根组件
import React, {Fragment} from 'react';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Route path='/' exact render={() => (<div>home</div>)}></Route>
        <Route path='/detail' exact render={() => (<div>detail</div>)}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
