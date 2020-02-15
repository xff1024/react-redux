import React,{Component} from 'react'
class FoodDetails extends Component {
    constructor(props) {
        super()
        const query = new URLSearchParams(props.location.search)
        this.state = {
            name: query.get('name'),
            type: query.get('type')
        }
    }
    render() {
        return (
            <div>
                美食详情 {this.state.name}  {this.state.type}
            </div>
        )
    }
}
export default FoodDetails