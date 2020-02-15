// reduers.js是一个纯函数

// 获取 默认值
let goodLists = JSON.parse(localStorage.getItem('GOODSLISTS') || '[]') 
function reducers(state = goodLists, action) { // state 可设置默认初始值，一旦 sotre 容器中有数据后，执行store中的disptch后，state参数的值 就是 store容器中的数据
    console.log(state, action)
    switch (action.type) {
        case 'ADD_GOODS':
            // 深拷贝： 拷贝的是值，不是拷贝函数的引用，拷贝之后不会任何其他影响
            const ADDLists = JSON.parse(JSON.stringify(state))
            console.log(ADDLists)
            let hasid = ADDLists.find(item => { 
                return item.id === action.goods.id
             })
            if (hasid) {
                hasid.num += action.goods.num
            } else {
                ADDLists.push(action.goods)
            }

            return ADDLists // return 后的数据其实默认的做了一个操作，就是 将 store 中容器的值（数据） 重新覆盖，store 容器中的值（数据） 是 ADDLists 
        case 'UPGOODSNUM':
            const UPDSDATA_LISTS = JSON.parse(JSON.stringify(state))
            let updataGoods = UPDSDATA_LISTS.find(item => { // 这里返回的是引用，是浅拷贝
                return item.id === action.id
            })
            updataGoods.num = action.newNum
            return UPDSDATA_LISTS;
        case 'DELGOODS':
            const GOODSLISTS = JSON.parse(JSON.stringify(state))
            let deleteIndex = GOODSLISTS.findIndex(item => {
                return item.id === action.id
            })
            GOODSLISTS.splice(deleteIndex, 1)
            return GOODSLISTS;
        default:
            return state
            break;
    }
}
export default reducers