---
title: React 1 - 项目创建
date: 2020-04-10 15:13:00
categories: React
---
用create-react-app创建react工程

React工程文件目录

node_modules 外部包文件，第三方模块

public 

.gitignore 定义不想上传到git的文件

package-lock.json 项目依赖的安装包版本号

package.json 包文件，这说明项目是一个node包

README.MD 项目说明文件（可自行修改）

src 项目源代码，入口：index.js

index.js

registerServiceWorker:  用于实现PWA的一些功能

manifest.json：实现PWA的图标显示、快捷方式、主题颜色等
manifest.json provides metadata used when your web app is installed on a user's mobile device or desktop. 

>ES6预备知识：
import 引入
解构赋值
变量声明
数组拆分
箭头函数
generator函数
异步内容