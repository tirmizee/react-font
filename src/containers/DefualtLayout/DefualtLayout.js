import React, { Component } from 'react'

const Menu = React.lazy(() => import('./Menu'));
const Footer = React.lazy(() => import('./Footer'));
const Header = React.lazy(() => import('./Header'));
const Content = React.lazy(() => import('./Content'));

class DefualtLayout extends Component {

    componentDidMount = () => {
        console.log("DefualtLayout : " + JSON.stringify(this.props.location));
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Menu {...this.props}/>
                <Content />
                <Footer />
            </div>
        )
    }
}

export default DefualtLayout;
