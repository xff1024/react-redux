import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super()
        console.log(this)
        this.state = {
            currentNum: props.initCount
        }
    }
    addCount = () => {
        this.setState({
            currentNum: this.state.currentNum+1
        },()=> {
            this.props.callback(this.state.currentNum)
        })
    }
    render() {
        return (
            <div>
                当前数量 ----  {this.state.currentNum}
                <button onClick={this.addCount}>+1</button>
            </div>
        )
    }
}
export default Counter