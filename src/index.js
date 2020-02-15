// 该文件为 入口文件，决定将组件渲染的位置

import React from 'react'
import ReactDOM from 'react-dom'

// 使用 react-readux 在 react中对redux中的store进行管理
import { Provider } from 'react-redux'

// 导入 shopCar-react-redux-thunk 中的仓库
import store from './components/shopCar3-react-redux-thunk/store/store'


// 导入根组件(根组件名称一定要大写)
import App from './App.jsx'
// 使用ReactDOM的render方法来渲染根组件
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('rooter')
) 