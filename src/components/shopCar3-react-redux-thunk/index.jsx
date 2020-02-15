// 黑马买买买购物车案例
import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import Goodlists from './GoodList'
// import store from './store/store'

// connect 是将组件与 store 建立联系
import { connect } from 'react-redux'


import Car from './Car'
import Notdfound from '../router/404'
import 'element-theme-default'
import './css/index.css'
class ShopCar3 extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         count: this.cacleGoods()
    //     }
    // }
    // cacleGoods = () => {
    //     let allcount = 0
    //     // store.getState() 获取数据
    //     store.getState().forEach(item => {
    //         allcount += item.num
    //     })
    //     return allcount
    // }
    componentDidMount() {
        // 开启订阅更新模式，当数据发生改变会执行的操作，用于获取最新数据的操作
        // store.subscribe(() =>
        //     this.setState({
        //         count: this.cacleGoods()
        //     })
        // )
        // 监听用户的关闭或者刷新
        window.onbeforeunload = () => {
            localStorage.setItem('GOODSLISTS',JSON.stringify(this.props.goodLists))
        }
    }


    render() {
        return (
            <div className="content">
                <Router>
                    <div className="header">
                        黑马买买买
                    </div>
                    <div className="linkarea">
                        <Link to="/goodlists">商品列表</Link>
                        {/* react-redux 实现原理就是将通过 父组件向子组件中传值的方式实现,即将数据挂载到组件的属性中访问，子组件只能获取父组件中的值，不能修改父组件传递过来的值（防止修改仓库中的代码），只暴露出方法取修改 */}
                        <Link to="/mycar">购物车{this.props.counter > 0 && <span>({this.props.counter})</span>}</Link>
                    </div>
                    <Switch>
                        <Route path="/goodlists" component={Goodlists}></Route>
                        <Route path="/mycar" component={Car}></Route>
                        <Redirect exact from="/" to="/goodlists" />
                        <Route component={Notdfound} />
                    </Switch>

                </Router>
            </div>
        )
    }
}

// 将数据映射到组件中的属性中
const mapStateToProps = (state /*, ownProps*/) => {
    const cacleGoods = () => {
        let allcount = 0
        // store.getState() 获取数据
        state.forEach(item => {
            allcount += item.num
        })
        return allcount
    }
    return {
        counter: cacleGoods(), // counter 为挂载到该组件中的属性名称
        goodLists: state
    }
}

const mapDispatchToProps = null // 无需修改store中的数据，所以为 null

// 该组件主要是获取数据 （购物车中的数量）

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopCar3)