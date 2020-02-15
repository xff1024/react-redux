// 列表渲染的演示
import React, { Component } from 'react'
class For extends Component {
    constructor() {
        super()
        this.state = {
            dataArr: [
                { id: '1001', name: '小峰', age: 18 },
                { id: '1002', name: '小林', age: 18 }
            ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.dataArr.map(item => { return <li key={item.id}>{item.name}------{item.age}岁</li> })}
                </ul>
            </div>
        )
    }
}
export default For