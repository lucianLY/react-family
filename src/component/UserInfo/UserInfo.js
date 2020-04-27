import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from "../../redux/actions/useInfo"

class UserInfo extends Component {

    render () {
        const { userInfo, isLoadding, errorMsg } = this.props.userInfo

        return (
            <div>
                {
                    isLoadding ? "请求信息中。。。。。":
                    (
                        errorMsg ? errorMsg: 
                        <div>
                            <p>用户信息：</p>
                            <p>用户名：{userInfo.name} </p>
                            <p>介绍：{userInfo.intro}</p>
                        </div>
                    )
                }
                <button onClick={ () => { this.props.getUserInfo() } }>异步请求 Ajax </button>
            </div>
        )
    }
}

export default connect( (state) => ( { userInfo: state.userInfo } ), {getUserInfo})( UserInfo )