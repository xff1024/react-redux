import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'
import './Layout/layout.css'
import Menu1 from './Layout/layoutcomp/Menu1'
import Menu2 from './Layout/layoutcomp/Menu2'
import NotFound from './404'
class Layout extends Component {
    exit = () => {
        // 退出登录
        this.props.history.push('/login')
    }
    render() {
        return (
            <Router>
                <button onClick={this.exit}>退出登录</button>
                <div className="layout">
                    <div className="box">
                        <div className="left">
                            <Link to="/layout/menu1">菜单一</Link><br/><br/><br/><br/><br/><br/><br/>
                            <Link to="/layout/menu2">菜单二</Link>
                        </div>
                        <div className="right">
                            <Switch>
                                <Route  path="/layout/menu1" component={Menu1}></Route>
                                <Route  path="/layout/menu2" component={Menu2}></Route>
                                <Redirect exact from="/layout/" to="/layout/menu2"></Redirect>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Layout