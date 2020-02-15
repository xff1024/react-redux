// 非受控组件的演示
import React, { Component, createRef } from 'react'
class Refs extends Component {
    constructor() {
        super()
        // console.log('constructor---------------', this.refs.inputRef)
        this.fileRefs = new createRef()
    }
    componentDidMount() {
        console.log('componentDidMount-------------', this.refs.inputRef)
        this.refs.inputRef.focus()
    }
    // getFile = (e) => {
    //     console.dir(e.target.files[0])
    // }
    getFile = () => {
        console.log(this.fileRefs.current.files[0])
    }
    render() {
        return (
            <div>
                <input type="text" ref="inputRef" /> <br /><br /><br /><br />

                <input type="file" ref={this.fileRefs} onChange={this.getFile} />
            </div>
        )
    }
}
export default Refs