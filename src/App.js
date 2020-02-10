import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './containers/DefualtLayout/Header'
import Menu from './containers/DefualtLayout/Menu'
import Footer from './containers/DefualtLayout/Footer'
import Content from './containers/DefualtLayout/Content'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Menu/>
          <Content/>
          <Footer/> 
        </BrowserRouter>
      </div>
    )
  }
}
