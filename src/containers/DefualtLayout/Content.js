import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard  from '../../views/DashBoard'

export default class Content extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={DashBoard} />
                <Route path={"/dashboard"} component={DashBoard} />
            </Switch>
        )
    }
}
