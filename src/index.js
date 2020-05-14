import React from "react"
import ReactDOM from "react-dom"
import AppRouter from  "./router"
import "antd/dist/antd.css"
import '../mock/mock'

if (MOCK) {
    require('../mock/mock')
}

ReactDOM.render(
    <AppRouter />
    ,
    document.getElementById('app')
)