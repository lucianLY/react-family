import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVisaList } from "../../redux/actions/visa"

class visaList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            guides: [
                {'title': '日本', 'text': '日本签证信息。。', 'pic' : 'hot.png'},
                {'title': '韩国', 'text': '韩国签证信息。。', 'pic' : 'hot.png'},
                {'title': '新加坡', 'text': '新加坡签证信息。。', 'pic' : 'hot.png'},
                {'title': '泰国', 'text': '泰国签证信息。。', 'pic' : 'hot.png'}
            ],
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
        this.props.getVisaList()
    }

    view(index){
        console.log('On click view' + index )
    }

    render (){
        return (
            <div className="hot">
                <div className='raiders'>
                    热门旅游攻略
                </div>
                <div className='sub'>
                    HOT TRAVEL GUIDES
                </div>
                <div className="line"></div>
                <div className='hot-map'>
                    {
                        this.state.guides.map( (item, index) => {
                            return (
                            <div className='item' key={index} >
                                <div className="img">
                                    <img src={require("./images/" + item.pic)} />
                                </div>
                                <div className="title">
                                    { item.title }
                                </div>
                                <div className="main">
                                    { item.text }
                                </div>
                                <div className="view" onClick={this.view.bind(index)}>
                                    去看看
                                </div>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default connect( (state) => ( { visaList: state.visaList } ), {getVisaList})( visaList )