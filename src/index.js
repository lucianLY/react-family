import React from "react"
import ReactDOM from "react-dom"
import AppRouter from  "./router/router"

if( module.hot ){
    module.hot.accept()
}

ReactDOM.render(
    <AppRouter />
    ,
    document.getElementById('app')
)