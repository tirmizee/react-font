import React, { Component } from 'react'

const Menu = React.lazy(() => import('./Menu'));
const Footer = React.lazy(() => import('./Footer'));
const Header = React.lazy(() => import('./Header'));
const Content = React.lazy(() => import('./Content'));

class DefualtLayout extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Menu />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default DefualtLayout;
