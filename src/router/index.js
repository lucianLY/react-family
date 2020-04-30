import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "../redux/store"

import "./init.scss"
import { mainRouter } from "./router"

const AppRouter = () => (
    <Provider store = { store }>
        <Router>
            <Switch>
               {
                   mainRouter.map( route => {
                        return <Route 
                            exact = { route.exact } 
                            key = { route.pathname } 
                            path = { route.pathname } 
                            component = { route.component }
                            />
                       
                   })
               }
            </Switch>
        </Router>
    </Provider>
)

export default AppRouter