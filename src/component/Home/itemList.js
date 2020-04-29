import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVisaList } from "../../redux/actions/visa"

class visaList extends Component{
    constructor(props) {
        super(props);
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

    componentDidMount() {
        this.props.getVisaList()
    }

    view(index){
        console.log('On click view' + index )
    }

    render (){
        let len = this.props.visaList.length
        return (
            <div>
                {
                    len !== undefined ? (
                        <div className={ this.props.name }>
                            {
                                this.props.visaList.map( (item, index) => {
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
                    ): ('')
                }
                
            </div>
        )
    }
}

const mapState = (state) => {
    return state.visaList
}

//connect 方法有4个参数，常用的是前面两个
//第一个参数是 mapStateToProps，作用是从store里面把state注入到当前组件的props上
//第二个参数是 mapDispatchToProps，这个的主要作用是把action生成的方法注入到当前组件的props上，一般不用

// export default connect(mapState,mapDispatchToProps)(CartList)

//直接第二个参数传递一个对象，这里面的对象就是actionCreators
//只要传入了actionCreators，在组件内就通过 this.props.actionCreators 来调用
//这样的话，在调用之后，那个actionCreators会自动帮你把它内部的action dispatch出去


export default connect( mapState, {getVisaList})( visaList )