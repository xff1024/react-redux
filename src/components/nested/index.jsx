// 路由嵌套的演示
import React, { Component } from 'react'
import { HashRouter as Router, Route,Switch,Redirect} from 'react-router-dom'
import Layout from './Layout'
import NotFound from './404'
import Login from './Login'
class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/layout" component={Layout}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Redirect exact from="/" to="/login"></Redirect>
                    <Route component={NotFound}></Route>
                </Switch>
            </Router>
        )
    }
}
export default Index