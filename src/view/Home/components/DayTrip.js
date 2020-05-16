import React, { Component } from 'react'

export default class DayTrip extends Component{

    constructor(props){
        super(props)

        this.state = {
            travel:[
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
                {'title': '标题', 'pic' : 'hot.png'},
            ]
        }
    }

    render () {
        return (
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
                                    <img src={require("./../images/" + item.pic)} />
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
        )
    }
}