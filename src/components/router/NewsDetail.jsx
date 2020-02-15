// 新闻详情
import React,{Component} from 'react'

class NewsDetail extends Component {
    render() {
        return (
            <div>
                新闻id ---------- {this.props.match.params.newsId}
            </div>
        )
    }
}
export default NewsDetail