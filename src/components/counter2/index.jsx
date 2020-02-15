import React, { Component } from 'react'
// import store from './store/store'
import { connect } from 'react-redux'
class MyRedux extends Component {
    // increace = () => {
    //     // 增加 (// 如何修改store 数仓中的值呢)
    //     store.dispatch({ //  store数据改变会交予 reducers 去做
    //         type: 'INCREASE'
    //     })
    // }
    // reduces = () => {
    //     // 减少
    //     store.dispatch({
    //         type: 'DECREASE'
    //     })
    // }
    // // 利用 store 中的 观察者订阅模式 ,订阅更新
    // componentWillMount() { // 渲染之前获取数据
    //     store.subscribe(() => {
    //         this.setState({
    //             counter: store.getState()
    //         })
    //     })
    // }

    render() {
        return (
            <div>
                <div>当前数量为： {this.props.counter}</div>
                <div><button onClick={this.props.add}>++</button> &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={this.props.asyncReduces}>--</button></div>
            </div>
        )
    }
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        add() { // 同步的方式触发action
            dispatch({
                type:'INCREASE'
            })
        },
        asyncReduces() { // 异步的方式触发action，（异步的action是一个函数）
            dispatch(dis => {
                setTimeout(()=>{
                    dis({
                        type: 'DECREASE'
                    })
                },2000)
            })
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyRedux)
