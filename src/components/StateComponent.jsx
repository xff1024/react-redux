import React from 'react'

class StateCompontent extends React.Component {
    constructor() {
        super()
        // 相当于 vue 中的 data
        this.state= {
            nickname: '小懒虫'
        }
        // 2.0 提前给方法绑定 this 指向，这种方式不是很灵活 (在构造器中绑定this指向)
        this.clikMe2 = this.clikMe2.bind(this)
    }
    clikMe() {
        // 问题所在： 在实例方法中 this 指向为 undefined,所以要修改 this 为 实例
        // 1.0   在调用的时候修改 this 指向  this.cliMe.bind(this)
        console.log('StateCom--------', this)
        this.setState({
            nickname:'小臭凑'
        })
    }
    clikMe2() {
        this.setState({
            nickname:'小懒虫'
        })
    }
    clickMe3 = () => {
        console.log('高级语法')
        this.setState({
            nickname:'小懒虫22222'
        })
    }
    clickMe4 = ()=> {
        this.props.callback(this.state.nickname)
    }

    // 不能在 执行阶段的任何生命周期函数中去修改 this.state 中的值，只能用于获取值
    render() {
        // 有状态组件的演示
        console.log(this)
        return (
            <div>
                我是一个有状态的组件,
                我是父组件传过来的值，不可修改-------{this.props.name}----{this.props.age} <br />
                我是内部数据，可直接修改---------{this.state.nickname}
                {/* 总结： this.props 是 访问的是 父组件传过来的值，  this.state 访问的是 组件内部数据 */}
                {/* react 事件处理程序 */}
                {/* 子组件给父组件传值の演示 */}
                <button onClick={this.clikMe.bind(this)}>修改昵称方式1</button>
                <button onClick={this.clikMe2}>修改昵称方式2</button>
                <button onClick={this.clickMe3}>修改昵称方式3</button>
                <button onClick={this.clickMe4}>子组件传值给父组件</button>
            </div>
        )
    }

}
export default StateCompontent