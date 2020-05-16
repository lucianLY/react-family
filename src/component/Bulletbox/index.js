import React, { Component } from "react"
import "./index.scss"

export default class Bulletbox extends Component {

    constructor(props) {
        super(props)
    }

    applyVisa(){
        this.props.applyProps('日本')
    }

    render () {
        const {type, country} = this.props
        const materials = this.props.materials
        let passport = []
        let photo = []
        let other = []
        if (type) { 
            passport= materials.materials.passport
            photo= materials.materials.photo
            other= materials.materials.other
        }

        return (
            <div className={"bullet-box " + (this.props.type === true? 'show' : 'none')}>
                <div className='container'>
                    <div className="visa-article">
                        <div className="visa-material">
                            <div className="title">
                            {materials.country}旅游签证[菲律宾送签]·单次 
                            </div>
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <span>★</span>
                                        <span>中国大陆因私护照</span>
                                    </td>
                                    <td>
                                        <div className="info">
                                            <ul>
                                                <li>需同时满足以下3点:</li>
                                                { 
                                                    passport.map( ( item, index ) => {
                                                        return (
                                                            <li key={index}>{index+1} 、{ item }</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>★</span>
                                        <span>照片</span>
                                    </td>
                                    <td>
                                        <div className="info">
                                            <ul>
                                                <li>需同时满足以下3点:</li>
                                                { 
                                                    photo.map( ( item, index ) => {
                                                        return (
                                                            <li key={index}>{index+1} 、{ item }</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>★</span>
                                        <span>其他材料</span>
                                    </td>
                                    <td>
                                        <div className="info">
                                            <ul>
                                                { 
                                                    other.map( ( item, index ) => {
                                                        return (
                                                            <li key={index}>{index+1} 、{ item }</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="edit-row">
                            <div className="cancel" onClick={ ()=> {this.props.closeProp()} }>取消</div>
                            <div className="apply" onClick={ () => { this.applyVisa() }}>申请</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}