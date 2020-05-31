---
title: Redux-Saga
date: 2020-4-24 13:02:14
categories: React
---

![Redux - Saga](https://upload-images.jianshu.io/upload_images/22396740-9ad03b5deb9145c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/500)

## 1. 添加和配置Saga到项目：
<https://github.com/redux-saga/redux-saga>

## 2. 使用Saga
### 1.创建sagas.js 
```javascript
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
    const res = yield axios.get('./list.json');
    const action = initListAction(res.data);
    yield put(action);
}

//generator函数
function* mySaga() {
    //捕获指定类型的action
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
```
在`sagas`中，可以指定捕获具有某个type的action，然后执行对应的操作，所以异步操作的代码写在了
`sagas`文件中。**需要注意的是，编写sagas中的函数需要用到generator函数相关的知识**。

### 2. 引入sagas
在store/index.js入口文件中，引入sagas：
```JavaScript
import TodoSagas from './sagas';
```