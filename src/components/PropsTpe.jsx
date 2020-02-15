// 属性类型检查以及默认值的演示
import React, { Component } from 'react'
import PropTypes from 'prop-types'
class MyPropsTypes extends Component {
    static propTypes = {
        name:PropTypes.string,
        age: PropTypes.number
    }
    static defaultProps = {
        name: '小林',
        age: 18
      };
    render() {
        return (
            <div>
                {this.props.name} -------- {this.props.age}
            </div>
        )
    }
}
export default MyPropsTypes