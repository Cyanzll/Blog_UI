import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( reducer, composeEnhancers(
    applyMiddleware() //可扩展
));

export default store;