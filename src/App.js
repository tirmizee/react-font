import React, { Component } from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import Header from './containers/DefualtLayout/Header'
import Menu from './containers/DefualtLayout/Menu'
import Footer from './containers/DefualtLayout/Footer'
import Content from './containers/DefualtLayout/Content'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Menu />
          <Content />
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
