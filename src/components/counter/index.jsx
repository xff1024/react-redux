import React, { Component } from 'react'
import store from './store/store'
class MyRedux extends Component {
    constructor() {
        super()
        this.state = {
            counter: store.getState()
        }
    }
    increace = () => {
        // 增加 (// 如何修改store 数仓中的值呢)
        store.dispatch({ //  store数据改变会交予 reducers 去做
            type: 'INCREASE'
        })
    }
    reduces = () => {
        // 减少
        store.dispatch({
            type: 'DECREASE'
        })
    }
    test = () => {
        console.log('哈啊哈哈')
    }
    // 利用 store 中的 观察者订阅模式 ,订阅更新
    componentWillMount() { // 渲染之前获取数据
        store.subscribe(() => {
            this.setState({
                counter: store.getState()
            })
        })
    }

    render() {
        return (
            <div>
                <div>当前数量为： {this.state.counter}</div>
                <div><button onClick={this.increace}>++</button> &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={this.test}>--</button></div>
            </div>
        )
    }
}
export default MyRedux
