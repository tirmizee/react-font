import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard  from '../../views/DashBoard'
import Widget  from '../../views/pages/Widget'

export default class Content extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={"/"} component={DashBoard} />
                <Route path={"/dashboard"} component={DashBoard} />
                <Route path={"/pages/widget"} component={Widget} />
            </Switch>
        )
    }
}
