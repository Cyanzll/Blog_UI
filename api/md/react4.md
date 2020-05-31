---
title: Redux-thunk
date: 2020-4-23 18:09:04
categories: React
---

# Redux thunk
> thunk 是一个 Redux 的中间件（Middleware）。
 
### 1. **添加和配置thunk到项目**：
> <https://github.com/reduxjs/redux-thunk>

### 2. **应用thunk**

```javascript
//store & thunk
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
    reducer,
    enhancer
);
```
上述代码同时引入了两个中间件：redux dev tools 和 redux thunk。

应用thunk后，action可以是一个函数，函数里面是实现异步操作（比如数据请求）的代码。当这样的action通过dispatch()传给了store时，store识别到action是一个函数，然后自动执行该函数；

需要注意的是，action中往往还需要在异步请求数据之后修改store中的数据（axios.get().then()），这就又需要调用store.dispatch()方法。好在action返回的函数中可以传入dispatch作为参数，因此可以直接在异步请求代码之后修改数据：

```javascript
//thunk，action是一个函数
export const getTodoList = () => {
  return (dispatch) => {                          //返回一个发送异步请求的函数
    axios.get('./list.json').then((res)=>{
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    })
  }
}
```

有了thunk，我们实现了在actionCreators.js中编写异步请求，不用把这些代码堆砌在组件中，避免组件代码过于臃肿。

2020/4/23 10:27

