---
title: React 生命周期函数
date: 2020-4-12 16:09:04
categories: React
---
> React的生命周期函数：在某一时刻组件会自动调用执行的函数。
> 下面分阶段给出各个生命周期函数。

![React生命周期](https://upload-images.jianshu.io/upload_images/22396740-100d7437c66bbed9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600)


### 组件初始化（Initialization）阶段
`constructor(props)`

### 组件挂载（Mounting）阶段
`componentWillMount()`
在组件即将被挂载到页面时执行

`render() `
组件挂载时执行

`componentDidMount()`
组件被挂载到页面后自动执行

### 组件更新（Updation）阶段
>props、states发生变化时进入该阶段
>**如果：**
>一个组件要从父组件接收参数 && 该组件已经存在于父组件中，则在其
>执行shouldComponentUpdate()之前，执行：
`componentWillReceiveProps()`

`shouldComponentUpdate()`
组件需要更新吗？返回true，则组件更新，否则不更新；

`componentWillUpdate()`
组件被更新前执行，前提是shouldComponentUpdate()返回了true；

`render()`
重新渲染，更新组件；

`componentDidUpdate()`
组件更新完成后执行。


### 组件卸载（UnMounting）阶段
`componentWillUnmount()`
- 该组件即将被移除时执行

#### ***render() 函数必须定义，因为它在Component中并没有被实现。***


### 生命周期函数的应用场景：
#### 1. 用shouldComponentUpdate() 避免重复渲染

```javascript
//避免无谓渲染，提升性能
  shouldComponentUpdate(nextProps, nextState) {   
    if(nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
```


#### 2. componentDidMount()
>异步Ajax请求不适合被写在render()中，因为那样会导致多次请求，
>它更适合被放在`componentDidMount()`中。


### 积累React中性能优化的Tips：
- this绑定放在组件的constructor中（尚未详细讲解）；
- setState() 内置了优化的方式（异步）；
- 虚拟DOM内部优化了比对和重新渲染的效率；
- 生命周期函数的使用；
