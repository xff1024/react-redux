import React,{Component} from 'react'
import img404 from '../../static/img/404.jpg'
class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={img404} alt=""/>
            </div>
        )
    }
}
export default NotFound