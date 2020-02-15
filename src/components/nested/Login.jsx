import React,{Component} from 'react'
class Login extends Component {
    login = () =>{
        this.props.history.push('/layout')
    }
    render() {
        let styeObj = {
            border: '1px solid red',
            width: '200px',
            height: '200px',
            margin: '200px auto',
            padding: '10px'
        }
        return (
            <div style={styeObj}>
                <input type="text" placeholder="请输入账号" /> <br/><br/>
                <input type="passwoed" placeholder="请输入密码" /><br/><br/>
                <button onClick={this.login}>登陆</button>
            </div>
        )
    }
}
export default Login