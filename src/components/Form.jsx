// 受控组件的演示

import React, { Component } from 'react'
class Forms extends Component {
    constructor() {
        super()
        this.state = {
            uname: '',
            pwd: ''
        }
    }
    changeVal = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:  e.target.value
        })
    }
    submit = (e) => {
        console.log(this.state)
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input value={this.state.uname} onChange={this.changeVal} name="uname" type="text" />
                <input type="password" value={this.state.pwd} name="pwd" onChange={this.changeVal} />
                <input type="submit" value="提交" />
            </form>

        )
    }
}
export default Forms