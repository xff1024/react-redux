// 新闻页
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NewsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/NewaDetail/1001">vue3.0 横空出世</Link>
                    </li>
                    <li>空链</li>
                    <li>
                        <Link to="/NewaDetail/1002">科比走好</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default NewsList