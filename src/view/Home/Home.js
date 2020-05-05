import React , { Component } from "react"
import Navigation from "component/Navigation"
import Item from "./itemList"
import Bulletbox from "component/Bulletbox"
import "./home.scss"

export default  class Home extends Component {

    constructor(props) {
        super(props);
        this.openProp = this.openProp.bind(this);
        this.closeProp = this.closeProp.bind(this);
        this.state = {
            showApply: false,
            travel:[
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
            ]
        }
    }

    componentDidMount() {
        // console.log('第一次渲染之后 函数中发送ajax请求，拿到数据，通过setState()保存在state中')
        // this.props.getVisaList() 
    }

    openProp( name ){
        console.log('你调用了父组件的方法' + name)
        this.setState({
            showApply: true
        })
    }

    closeProp() {
        this.setState({
            showApply: false
        })
    }

    view(index){
        this.showApply = true
        console.log(this.showApply)
    }

    render () {
        return (
            <div className='main'>
                <div className='header'>
                    <Navigation name='ree'/>
                    <div className="header-body">
                        <div className="travel-title">
                            我们一起去旅行菲律宾
                        </div>
                        <div className="travel-sub">
                            这是你需要决定的菲律宾旅行信息，如果它适合你，让它更有趣、愉快、安全。
                        </div>
                        <div className="start">
                            开始
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="hot">
                        <div className='raiders'>
                            热门签证攻略
                        </div>
                        <div className='sub'>
                            HOT VISA GUIDES
                        </div>
                        <div className="line"></div>
                        <Item raiders="热门签证攻略"  fromItem = {this.openProp} description="HOT VISA GUIDES" name="hot-travel-map" />
                    </div>
                    
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
                                    <img src={require("./images/item-1.png")} />
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
                                    <img src={require("./images/item-2.png")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hot">
                        <div className='raiders'>
                            精品一日游推荐
                        </div>
                        <div className='sub'>
                            HOT TRAVEL GUIDES
                        </div>
                        <div className="line"></div>
                        <div className='hot-travel-map'>
                            {
                                this.state.travel.map( (item, index) => {
                                    return (
                                    <div className='item' key={index} >
                                        <div className="img">
                                            <img src={require("./images/" + item.pic)} />
                                        </div>
                                        <div className="title">
                                            标题
                                        </div>
                                        <div className="view">
                                            去看看
                                        </div>
                                    </div>
                                )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Bulletbox type={ this.state.showApply } closeProp = {this.closeProp} />
            </div>
        )
    }
}