---
layout: post
title: Redux 数据流
date: 2020-04-17 15:18:52
categories: React
---
### Redux是一个数据框架，下图为redux的工作流。


#### 1. 工作流的解释
组件通过store.dispatch()方法发送action对象给store，store自动将prevState和action发送给reducers，reducers
将newState返回给store，由此store中存放的state得到了更新，再由组件的subscribe()方法监听到store的变化，重新调用
store.getState()方法，组件中的state也就随之更新。

**Action对象的编写：**
1. action.type可以拆分在一个独立的js文件中，以常量的形式定义然后在组件中引用，这样可以防止字符串编写错误；
2. 用actionCreators来统一创建并返回创建的action对象。


#### 2. 设计和使用三原则
**1. store是唯一的！**
整个应用中（包含多个组件），只有一个store作为公共存储空间。
**2. 只有store能改变自己的内容！**
它在接收到reducer的新数据后更新store中的数据。
**3. reducer必须是纯函数！**
纯函数：给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。
（不纯的，比如有异步操作（Ajax）、Date对象相关的操作）
没有副作用：不对传入的参数进行任何修改。

> **为什么要给state设置默认值？**
>因为在对store中的state做第一次修改时（即第一次传入action），state并不存在，因此默认给state赋值为defaultState，让action在> >defaultState的基础上修改数据。

#### 3. 牢记4个方法：
- createStore()
- store.dispatch()
- store.getState()
- store.subscribe() （订阅store的变化）
