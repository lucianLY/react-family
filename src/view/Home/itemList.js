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

    apply(index){
        console.log('On click view' + index )
    }

    render () {
        let { visaList, success } = this.props
        return (
            success === true  ? (
                <div className={ this.props.name }>
                    {
                        visaList.map( (item, index) => {
                            return (
                                <div className='item' key={index} >
                                    <div className="img">
                                        <img src={require("./images/" + item.pic)} />
                                    </div>
                                    <div className="title">
                                        { item.country }
                                    </div>
                                    <div className="main">
                                        { item.title }
                                    </div>
                                    <div className="view" onClick={this.apply.bind(index)}>
                                        去申请
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            ):('')
        )
    }
}

const mapState = (state) => {
    return state.visaList
}

/**
 * HOC 高阶组件
 * Redux的connect负责把 React组件和Redux中的store链接起来
 * connect([mapStateToProps],[mapDispatchToProps],[mergeProps],[options])
 * --【connect 方法有4个参数，常用的是前面两个】
 * 
 * mapStateToProps的作用是允许store中的数据作用在props绑定的组件上
 * mapStateToProps 第一个参数 state: Redux 的sore 可以根据state的数据、动态输出到组件需要的最小属性
 * mapStateToProps 第二个参数 ownProps: 组件自己的props 
 * 
 * mapDispatchToProps的作用是将action作为props绑定到组件上
 * 直接第二个参数传递一个对象，这里面的对象就是actionCreators
 * 只要传入了actionCreators，在组件内就通过 this.props.actionCreators 来调用
 * 这样的话，在调用之后，那个actionCreators会自动帮你把它内部的action dispatch出去
 * 
 */
export default connect( mapState, {getVisaList})( visaList )