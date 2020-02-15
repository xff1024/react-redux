// 该文件为 根组件
import React from 'react'
const styleObj = {
    fontSize: 30 + 'px',
    color: 'pink'
}
// 导入样式
import './static/css/style.css'

// 导入组件
import NoStateCom from './components/NostateComponent'

// 导入有状态组件

import StateCom from './components/StateComponent'

import Borther1 from './components/brother1'
import Borther2 from './components/brother2'

import Counter from './components/counter'


import IF from './components/IF'
import For from './components/For'

// 以下是路由
import Router from './components/router/index'
// 嵌套路由
import Index from './components/nested/index'

// 以下是 受控组件的体验
import Forms from './components/Form'
import Refs from './components/Refs'

// 类型检查演示
import Prototype from './components/PropsTpe'

// redux 体验演示
// import MyRedux from './components/counter/index'

// 黑马买买购物车案例演示
import ShopCar from './components/shopCar/index'
// import ShopCar2 from './components/shopCa2/index'

// react-redux深度结合redux（redux和react无任何关系）的使用，方便在react中对store的管理 
// import Count2 from './components/counter2/index'

// react-redux深度结合 edux改造购物车案例
import ShopCar3 from './components/shopCar3-react-redux-thunk/index'
class App extends React.Component {
    render222() {
        // jsx 的语法体验
        return (
            <div style={styleObj}>
                {/* 这是注释 */}
                hello world <br />
                <p className="test"> 测试外部样式</p>
            </div>
        )
    }
    getVal(val) {
        console.log('--------getVal ------- val', val)
    }
    render333333() {
        return (
            <div>
                <NoStateCom name="小峰" age={22} /> <br /><br /><br />
                <StateCom name="小林" age={18} callback={this.getVal} />
            </div>
        )
    }


    getCount = val => {
        console.log(val)
    }
    render33333() {
        return (
            <div>
                <Borther1 />
                <Borther2 />

                <Counter initCount={10} callback={this.getCount} />
            </div>
        )
    }

    render() {
        return (
            <div>
                {/* <IF /> */}
                {/* <For /> */}
                {/* <Router /> */}
                {/* <Index /> */}
                {/* <Forms /> */}
                {/* <Refs /> */}
                {/* <Prototype age={22}/> */}
                {/* <MyRedux /> */}
                {/* <ShopCar /> */}
                {/* <ShopCar2 /> */}
                {/* <Count2 /> */}
                <ShopCar3 />
            </div>
        )
    }
}
export default App