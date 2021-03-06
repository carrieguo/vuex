# 项目运行
```
yarn serve
```
# vuex
vuex的基本原理和基本使用以及vuex的组成, 配合案例讲解。
- vuex简介
- vuex的安装和组成介绍
- 实战案例讲解

vuex是专门为vue设计的状态管理库，相当于react的redux,都是用来处理状态管理模式的库。

## vuex简介

- Vuex 是一个专门为Vue.js应用程序开发的`状态管理模式`
> vuex是专门为vue框架设计的，只能在vue项目中使用，用于管理前端状态
- 它采用集中式存储管理应用的所有组件的状态
> vue是组件化的。其状态要么存在于本地对象中，要么存在与全局对象中。可以理解为这种集中式的管理应用存在与全局对象中。
- 并以相应的规则保证以一种可预测的方式发生变化
> vue所有的数据状态都是响应式的，vuex中所有数据也都是响应式的。
> 总结：vuex是一个类似于全局对象，存储所有组件里面的响应式的状态

## 应用场景
- 多个视图依赖于同一状态
> 我们不同的视图依赖于同一个数据状态，实现了多组件之间的数据共享
- 来自不同视图的行为需要改变同一个状态
> 在不同的组件中，它们需要一些操作来改变同一个数据状态。
> 总结：vuex最大的应用场景就是在与多组件之间的状态共享，包括读和改。适合中大型的前端页面应用。

## vuex安装和组成介绍
- State —— 数据仓库
> state本身就有数据的意思，在vuex中代表数据状态的来源。一般来说vuex所有的数据都存在state中，它就像一个很大的数据仓库，来存储vuex的所有状态数据，所以state是唯一的数据来源。本身是一个数据对象，json对象。
- getter —— 用来获取数据
> 它类似于vue的computed计算属性，从现有的state当中派生出一个新的state,方便了我们获取复杂数据、改变state中的状态，以及派生出一些新的状态。
- Mutation —— 用来修改数据
> 通过commit一个mutation来修改数据，其本质上是一个function。为何我们不直接实例化state直接修改state?而是通过commit一个mutation，再通过将state传入mutation，来修改state?因为我们每次提交mutation都会有记录，vuex这样做是为了更方便的记录下每个数据改变的历史和轨迹，方便监听和回滚。mutation里的操作是同步的。
- Action —— 用来提交 Mutation
> mutation 是用来同步直接修改数据，而我们的业务需求中有很多异步操作来修改vuex中的数据状态。action中可以进行异步操作，相当于把mutation包装了一层，可以进行任何的异步操作来提交mutation,再通过mutation来进行同步的修改state数据。
- Module -- 模块化
> 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
> 将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割

![vuex](./img/vuex.png)

### 安装Vuex
```js
//安装vuex包
npm install vuex
yarn add vuex
//创建vuex实例
new Vuex.store()
//main.js中将vuex实例挂载到vue对象上 
new Vue({store})
```

## vuex案例实操
### 业务目标
- 制作一个需要账号登录的课程学习项目
- 不同的课程需要不同的会员等级，实现购买会员功能，课程分享
### 功能
- 通过state.userInfo控制用户登录路由限制
- 多组件共享state.useStatus和state.vipLevel状态
- 多组件修改state.useStatus和vipLevel