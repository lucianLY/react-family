import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from "component/Home/Home"
// import VISA from "component/Visa/Index"
// import Counter from "component/Counter/Counter"
// import UserInfo from "component/UserInfo/UserInfo"

const AppRouter = () => (
    <div>
        <Router>
            {/* <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/visa'>VISA</Link></li>
                <li><Link to='/counter'>Counter</Link></li>
                <li><Link to='/userInfo'>UserInfo</Link></li>
            </ul> */}
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/visa" component={VISA} />
                <Route path="/counter" component={Counter} />
                <Route path="/userInfo" component={UserInfo} /> */}
            </Switch>
        </Router>
    </div>
)

export default AppRouter