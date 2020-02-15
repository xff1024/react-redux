// 美食介绍页
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class FoodList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* query传参演示 */}
                        <Link to="/foodDetail?name=薯片&type=油炸系列">薯片</Link>
                    </li>
                    <li>番薯</li>
                    <li>
                        <Link to="/foodDetail?name=汤圆&type=水煮系列">汤圆</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default FoodList