import React from 'react'

function NoState(props) {
    console.log(props)
return <div>hello，我是无状态组件------{props.name}-----{props.age}</div>
}

export default NoState