import React , { Component } from "react"
import Navigation from "component/Navigation"
import VisaList from "./components/VisaList"
import HomeStay from "./components/Homestay"
import DayTrip from "./components/DayTrip"
import Bulletbox from "component/Bulletbox"
import "./home.scss"

export default  class Home extends Component {

    constructor(props) {
        super(props);
        this.openProp = this.openProp.bind(this);
        this.closeProp = this.closeProp.bind(this);
        this.state = {
            materials: {},
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
        // this.props.getVisaList() 
    }

    openProp( name ){
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

    apply( json ){
        console.log( JSON.stringify(json , 2))
        this.setState({
            showApply: true,
            materials: json
        })
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
                    <VisaList 
                            title="热门签证攻略"
                            englishTitle = "HOT VISA GUIDES"
                            fromItem = {this.openProp}
                            applyProps = { this.apply.bind(this) }
                            description="HOT VISA GUIDES"
                            name="hot-travel-map" />
                    <HomeStay />    
                    <DayTrip />
                </div>
                <Bulletbox 
                    materials = { this.state.materials }
                    type={ this.state.showApply }
                    closeProp = {this.closeProp} />
            </div>
        )
    }
}