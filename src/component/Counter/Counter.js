import React, { Component } from "react"
import { increment, decrement, reset } from "../../redux/actions/counter"
import { connect } from "react-redux"

class Counter extends Component {
    render () {
        return (
            <div>
                <div>当前计数显示 redux 计数 = { this.props.counter.count}</div>
                <button onClick={ () => this.props.increment() }> 自增 +1 </button>
                <button onClick={ () => this.props.decrement() }> 自减 -1 </button>
                <button onClick={ () => this.props.reset() }> 重置 </button>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        increment: () => {
            dispatch( increment() )
        },
        decrement: () =>{
            dispatch( decrement() )
        },
        reset: () =>{
            dispatch( reset() )
        }
    }
}

/**
 * Action 做了什么？
 * 定义Action 是把数据从应用穿到store【store数据的唯一来源】
 * 
 * reducer 
 * reducers 指定应用的状态，如何响应action并发送到store，记住action
 * 
 * store 
 * 维持应用的state
 * 提供 getState 方法获取state；
 * dispatch(action) 更新state
 * subscribe(listener) 注册监听
 * subcribe(listener) 返回的函数注销监听器
 * 
 * Redux 的middleware机制
 * Redux middleware的特性
 * 关于执行时机： middleware的代码执行时机是由框架确定的，只定义代码，单无法改变运行的时机
 * middleware允许链式调用
 * 
 * redux-thunk库
 * 核心是判断每个经过action的
 * thunk是redux的一个middleware 用来解决异步请求的问题
 * 我们创建的action函数最终都会返回的是对象，store只能接受action对象，但是如果涉及有请求发送
 * 的时候返回对象就不那么容易了，所以这时候用redux-think
 * 
 * 
 */
export default connect( mapStateToProps, mapDispatchToProps)(Counter) 