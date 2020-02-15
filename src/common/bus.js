// 公共 bus 的方式（事件总线）实现 兄弟组件之间的传值

// 按需导入
import {EventEmitter} from 'events'

var bus = new EventEmitter()

// 按需导出
export {bus}