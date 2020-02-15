import React, { Component } from 'react'
// 导入 react-router

import { HashRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom'
//  Router 是容器，  Route是设定规则，占位の

// 导入组件
import FoodList from './FoodList'
import NewsList from './NewsList'
import NotFound from './404'
import NewaDetail from './NewsDetail'
import FoodDetail from './FoodDetails'
class MyRouter extends Component {
    render() {
        return (
            <div>
                {/* 实现组件之间的切换 */}
                {/* Router 容器包裹的是 这个组件（MyRouter）中的子组件(FoodList,FoodList)  */}
                <Router>
                    <Link to="/FoodList">美食列表</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/NewsList">新闻列表</Link>

                    <hr />
                    {/* exact表示精确匹配  */}
                    <Switch>
                        <Route path="/FoodList" component={FoodList} />
                        <Route path="/NewsList" component={NewsList} />
                        {/* 重定向 */}
                        <Redirect exact from="/" to="/NewsList" />
                        {/* 动态路由匹配，传递参数,params 方式传参 */}
                        <Route path="/NewaDetail/:newsId" component={NewaDetail} />
                        {/* query 方式传参 */}
                        <Route path="/foodDetail" component={FoodDetail} />
                        {/* 404,要将 404 组件放到最后 */}
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default MyRouter