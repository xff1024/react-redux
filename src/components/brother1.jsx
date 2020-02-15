import React from 'react'
import {bus} from '../common/bus'
class Borther1 extends React.Component {
    sendToBorther2 = () => {
        bus.emit('eventbus',{
            name: '我是兄弟一号',
            age: 22
        })
    }
    render() {
        return (
            <div>
                我是兄弟组件 1
                <button onClick={this.sendToBorther2}>点击我向兄弟组件传值</button>
            </div>
        )
    }
} 
export default Borther1