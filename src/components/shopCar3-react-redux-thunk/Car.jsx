import React, { Component } from 'react'
// import store from './store/store'
import {updataAction,asyncUpdataAction,delteGoods} from './store/actionCreator'
// 导入 connect 使得组件 与 store建立联系
import { Button, Table, InputNumber, MessageBox, Message } from 'element-react'
import { connect } from 'react-redux'
class Car extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    label: "名字",
                    prop: "name"
                },
                {
                    label: "图片",
                    prop: "url",
                    render: (data) => {
                        return (
                            <img src={data.url} alt="" className="data-img" />
                        )
                    }
                },
                {
                    label: "数量",
                    prop: "num",
                    render: (data) => {
                        return <InputNumber defaultValue={data.num} controls={true} min={1} onChange={props.addNum.bind(this,data.id)}></InputNumber>
                    }
                },
                {
                    label: "单价",
                    prop: "price"
                },
                {
                    label: "总价",
                    render: (data) => {
                        return <span>{data.num * data.price}</span>
                    }
                },
                {
                    label: "操作",
                    render: (data) => {
                        return <Button type="danger" onClick={props.delGoods.bind(this, data.id)}>删除</Button>
                    }
                }
            ]
        }
    }

    render() {

        return (
            <div className="mytable-area">
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.props.goodListsData}
                    border={true}
                />
                <div>
                    {/* 对于 store 中的数据会通过mapStateToProps取更新到组件的props中，在使用的时候直接从propsz中获取，尽量不要放到 constructor()中的函数中的this.state中 ，因为要使用需再次更改*/}
                    总价：{this.props.totalpice}
                </div>
            </div>
        )
    }
}

// 将Store仓库中的数据 state 挂载到 组件的属性中 ，通过 this.props.attr 方式访问(将store.getState()方法替代，同时自己会进行数据的订阅更新，无需store.subscribe()进行订阅更新)

const mapStateToProps = (state) => {
    const calcTotalPrice = () => {
    
        let totalpice = 0
        if (state.length > 0) {
            state.forEach(item => {
                totalpice += item.price * item.num
            })
        }
        return totalpice
    }

    return {
        goodListsData: state,
        totalpice: calcTotalPrice()
    }
}
// 将修改仓库中的数据的 dispatch的action(方法) 挂载到 组件的属性中 ，通过 this.props.fn方式访问
const mapDispatchToProps = dispatch => {
    return {
        addNum(id,newNum) {
           dispatch(asyncUpdataAction({id:id,newNum:newNum}))
        },
        delGoods(id){
            MessageBox.confirm('确定删除移出购物车吗', '提示', { type: 'warning' }).then(() => {
                dispatch(delteGoods(id))
            }).catch(() => {
                Message({
                    type: 'info',
                    message: '已取消'
                })
            })

        }
    }
}

// 将组件 与 仓库建立联系

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Car)