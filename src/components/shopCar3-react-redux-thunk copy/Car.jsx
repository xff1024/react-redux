import React, { Component } from 'react'
import store from './store/store'
import { Button, Table, InputNumber, MessageBox,Message } from 'element-react'
class Car extends Component {
    constructor() {
        super()
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
                        return <InputNumber defaultValue={data.num} controls={true} min={1} onChange={this.addNum.bind(this, data.id)}></InputNumber>
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
                        return <Button type="danger" onClick={this.delGoods.bind(this, data.id)}>删除</Button>
                    }
                }
            ],
            goodListsData: store.getState(),
            totalprice: this.calcTotalPrice()
        }
    }

    calcTotalPrice = () => {
        let totalpice = 0
        if (store.getState().length > 0) {
            store.getState().forEach(item => {
                totalpice += item.price * item.num
            })
        }
        return totalpice
    }
    addNum = (id, newNum) => {
        // console.log(id,newNum)
        store.dispatch({
            type: 'UPGOODSNUM',
            id,
            newNum
        })
    }
    delGoods = (id) => {
        alert(id)
        MessageBox.confirm('确定删除移出购物车吗', '提示', { type: 'warning' }).then(() => {
            store.dispatch({
                type: 'DELGOODS',
                id
            })
        }).catch(()=> {
            Message({
                type:'info',
                message:'已取消'
            })
        })

    }
    componentDidMount() {
        store.subscribe(() => {
            console.log('数据变化')
            this.setState({
                goodListsData: store.getState(),
                totalprice: this.calcTotalPrice()
            })
            console.log(store.getState(), this.state.totalprice)
        })
    }

    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {

        return (
            <div className="mytable-area">
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.state.goodListsData}
                    border={true}
                />
                <div>
                    总价： {this.state.totalprice}
                </div>
            </div>
        )
    }
}
export default Car