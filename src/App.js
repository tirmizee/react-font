import React, { Component } from 'react'
import Header from './containers/DefualtLayout/Header'
import Menu from './containers/DefualtLayout/Menu'
import Footer from './containers/DefualtLayout/Footer'
import Content from './containers/DefualtLayout/Content'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <Content/>
        <Footer/> 
      </div>
    )
  }
}
