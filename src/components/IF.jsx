import React, { Component } from 'react'

// 声明并且创建函数式组件

function Home() {
    return <div>
        Home 组件
        </div>
}

function Post() {
    return <div>
        Post 组件
        </div>
}

class IF extends Component {
    constructor() {
        super()
        this.state = {
            componentName: 'post'
        }
    }

    render() {
     
        // 条件渲染方式一： 

        /** if (this.state.componentName ==='home') {
            return <Home />
        } else if (this.state.componentName ==='post') {
            return <Post />
        } else {
            return null
        }
        **/
        
        // 条件渲染方式二： 
        return (
            <div>
                <button onClick={() => { this.setState({ componentName: 'post' }) }}>post组件</button>
                <button onClick={() => { this.setState({ componentName: 'home' }) }}>home组件</button>

                {/* 方式 2.1, 三目运算符 */}
                {/* {this.state.componentName === 'post' ? <Post/> : <Home />} */}
                
                {/* 方式2.2， && 运算 */}
                {this.state.componentName === 'post' && <Post/>}
                {this.state.componentName === 'home' && <Home/>}
            </div>
        )

    }
}

export default IF