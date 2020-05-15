import React, { Component } from "react"
import "./index.scss"

export default class Bulletbox extends Component {

    constructor(props) {
        super(props);
    }

    applyVisa(){
        this.props.applyProps('日本')
    }

    render () {
        const {type, country} = this.props
        const materials = this.props.materials
        let passport = {}
        if (materials.length > 0) {
            passport = materials.materials.passport  
            console.log( 'materials - ' + JSON.stringify(passport, 2) )
        }

        return (
            <div className={"bullet-box " + (this.props.type === true? 'show' : 'none')}>
                <div className='container'>
                    <div className="visa-sider">
                        <div className="pic">

                        </div>
                    </div>
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
                                                    // passport.map( ( item, index ) => {
                                                    //     return (
                                                    //         <li>{ item }</li>
                                                    //     )
                                                    // })
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
                                                <li>1、近6个月内拍摄2寸(4.5cm×4.5cm或3.5cm×4.5cm)白底证件彩照1张(照片背后用铅笔写姓名);</li>
                                                <li>2、不接收侧身照,不接收过胸照;</li>
                                                <li>3、不接收自拍照,不接收戴帽子。</li>
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
                                                <li>1、赴日申请表;</li>
                                                <li>2、在职证明;</li>
                                                <li>3、工签卡 ICARD 原件;</li>
                                                <li>4、工签卡 ICARD 复印件;</li>
                                                <li>5、存款证明 原件;</li>
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