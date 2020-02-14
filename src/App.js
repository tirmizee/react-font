import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Login = React.lazy(() => import('./containers/Login'));
const DefaultLayout = React.lazy(() => import('./containers/DefualtLayout/DefualtLayout'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/login" name="" render={props => <Login {...props} />} />
              <Route path="/" name="" render={props => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    )
  }
}
