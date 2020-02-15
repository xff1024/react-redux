// 黑马买买买购物车案例
import React, { Component } from 'react'
import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
import Goodlists from './GoodList'
import store from './store/store'
import Car from './Car'
import Notdfound from '../router/404'
import 'element-theme-default'
import './css/index.css'
class ShopCar extends Component {
    constructor() {
        super()
        this.state = {
            count: this.cacleGoods()
        }
    }
    cacleGoods = () => {
        let allcount = 0
        // store.getState() 获取数据
        store.getState().forEach(item => {
            allcount += item.num
        })
        return allcount
    }
    componentDidMount() {
        // 开启订阅更新模式，当数据发生改变会执行的操作，用于获取最新数据的操作
        store.subscribe(() =>
            this.setState({
                count: this.cacleGoods()
            })
        )
        // 监听用户的关闭或者刷新
        window.onbeforeunload = () => {
            localStorage.setItem('GOODSLISTS',JSON.stringify(store.getState()))
        }
    }


    render() {
        return (
            <div className="content">
                <Router>
                    <div className="header">
                        黑马买买买222
                    </div>
                    <div className="linkarea">
                        <Link to="/goodlists">商品列表</Link>
                        <Link to="/mycar">购物车{this.state.count > 0 && <span>({this.state.count})</span>}</Link>
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
export default ShopCar