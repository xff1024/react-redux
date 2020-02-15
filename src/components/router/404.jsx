import React,{Component} from 'react'

import img404 from '../../static/img/404.jpg'

class NotDedfound extends Component {
    render() {
        return (
            <div>
                404
                <img src={img404} alt=""/>
            </div>
        )
    }
}

export default NotDedfound