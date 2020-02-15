// 纯函数
function counter(state = 0, action) {
    console.log(action)
    switch (action.type) { // 注意： type是必须的，没有会报错的
        case 'INCREASE':
            return state + 1;
            break;
        case 'DECREASE':
            return state - 1;
            break;
        default:
            return state;
    }
}
export default counter