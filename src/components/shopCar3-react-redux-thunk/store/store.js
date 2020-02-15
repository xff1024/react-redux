import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from './reducers.js'
// 创建仓库并且导出
// 3.0 直接 安装 composeWithDevTools 包
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
  ));
  
export default store