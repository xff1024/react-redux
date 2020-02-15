import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers.js'
// 创建仓库并且导出



// 1.0 没有集成redux调试集成工具的使用该方法
// thunk 是一个中间件
// let store = createStore(reducers,applyMiddleware(thunk))


// 2.0 浏览器安装了redux插件之后的使用方式
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_ || compose
let store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
))
export default store