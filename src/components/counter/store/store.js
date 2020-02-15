// store 就是一个仓库容器
import {createStore} from 'redux'

import reducers from './reducers'
let store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store