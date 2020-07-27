import React, { Component } from "react"
import { addItem } from '../../redux/actions/todolist.js'
import { connect } from "react-redux"

import './TodoList.scss'

export default class TodoList extends Component{

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    addItem () {
        console.log('第一步 点击 add 按钮开始触发')
        // this.props.dispatch({
        //     type: 'ADD',
        //     name: 'TTT'
        // })
        this.props.addItem()
    }

    render () {
        return (
            <div className='todo-list'>
                <h3 className='title'>Todo List Demo </h3>
                <div className='row'>
                    <div className='input'>
                        <input type='text' />
                    </div>
                    <div className='button' onClick = { () => { this.addItem() }}>添加</div>
                </div>
            </div>
        )
    }

}