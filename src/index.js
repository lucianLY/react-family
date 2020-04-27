import React from "react"
import ReactDOM from "react-dom"
import AppRouter from  "./router/router"
import { Provider } from "react-redux"
import store from "./redux/store"

if( module.hot ){
    module.hot.accept()
}

ReactDOM.render(
    <div>
        <Provider store = { store }>
            <AppRouter />
        </Provider>
    </div>
    ,
    document.getElementById('app')
)