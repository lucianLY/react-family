import React , { Component } from "react"
import { Link } from 'react-router-dom'
import "./navigation.scss"

export default class Navigation extends Component {
    render () {
        return (
            <div className="header-layer">
                <div className='welcome'>
                    <div className='logo'>
                        LOGO 
                    </div>
                </div>
                <div className="banner">
                    <div className="nav">

                        <div className="item">签证</div>
                        <div className="item">线路</div>
                        <div className="item">首页</div>
        
                        {/* <div className="item private">私人规划</div>
                        <div className="item-btn">登入</div>
                        <div className="item-btn active">注册</div> */}
                    </div>
                    {/* <div className="search">搜索</div> */}
                </div>
            </div>
        )
    }
}