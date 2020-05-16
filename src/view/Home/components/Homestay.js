import React, { Component } from 'react'

export default class Homestay extends Component{

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className="hot">
                <div className='raiders'>
                    热门民宿推荐
                </div>
                <div className='sub'>
                    POPULAR HOMESTAY RECOMMENDATION
                </div>
                <div className="line"></div>
                <div className="hot-border">
                    <div className="hot-source">
                        <div className="img">
                            <img src={require("./../images/item-1.png")} />
                        </div>
                        <div className="brief">
                            <div className="title">这里是标题</div>
                            <div className="main">
                                这里是内容简介，这里是内容简介，这里是内容简介，
                                这里是内容简介，这里是内容简介，这里是内容简介，
                                这里是内容简介，这里是内容简介，这里是内容简介，
                            </div>
                        </div>
                    </div>
                    <div className="hot-source">
                        <div className="brief">
                            <div className="title">这里是标题</div>
                            <div className="main">
                                这里是内容简介，这里是内容简介，这里是内容简介，
                                这里是内容简介，这里是内容简介，这里是内容简介，
                                这里是内容简介，这里是内容简介，这里是内容简介，
                            </div>
                            <div className="subscribe">
                                立即订阅
                            </div>
                        </div>
                        <div className="img">
                            <img src={require("./../images/item-2.png")} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}