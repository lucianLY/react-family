import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "../redux/store"

import "./init.scss"
import Home from "component/Home/Home"
import VISA from "component/Visa/Index"


const AppRouter = () => (
    <Provider store = { store }>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/visa" component={VISA} />
                {/* <Route path="/counter" component={Counter} />
                <Route path="/userInfo" component={UserInfo} /> */}
            </Switch>
        </Router>
    </Provider>
)

export default AppRouter