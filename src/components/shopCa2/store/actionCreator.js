/**
 *  统一管理action
 */
export function addAction(item) {
    // 返回的就是一个action对象
    return {
        type:'ADD_GOODS',
        goods: item
    }
}

/**
 * 异步操作action
 */
export function asyncAddAction(item) {
    // 等待异步操作（比如：发送网络请求）后dispatch再触发action
    return dispatch => {
        // 使用 setTimeout模拟异步请求
        setTimeout(() => {
            dispatch(addAction(item)) 
        },2000)
    }
} 