import React from 'react'
import { bus } from '../common/bus'
class Borther2 extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: 0
        }
        bus.on('eventbus', data => {
            this.setState(data)
        })
    }
    render() {
        return (
            <div>
                我是兄弟组件 2，我知道兄弟一的年龄是 ------ {this.state.age}
            </div>
        )
    }
}
export default Borther2