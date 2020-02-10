import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './TopNav.styles';

class TopNav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('TopNav will mount');
  }

  componentDidMount = () => {
    console.log('TopNav mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TopNav will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TopNav will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('TopNav did update');
  }

  componentWillUnmount = () => {
    console.log('TopNav will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="content-wrapper">
        <div className="container">
          {/* Content Header (Page header) */}
          <section className="content-header">
            <h1>
              Top Navigation
        <small>Example 2.0</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
              <li><a href="#">Layout</a></li>
              <li className="active">Top Navigation</li>
            </ol>
          </section>
          {/* Main content */}
          <section className="content">
            <div className="callout callout-info">
              <h4>Tip!</h4>
              <p>Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a
                sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular
          links instead.</p>
            </div>
            <div className="callout callout-danger">
              <h4>Warning!</h4>
              <p>The construction of this layout differs from the normal one. In other words, the HTML markup of the navbar
          and the content will slightly differ than that of the normal layout.</p>
            </div>
            <div className="box box-default">
              <div className="box-header with-border">
                <h3 className="box-title">Blank Box</h3>
              </div>
              <div className="box-body">
                The great content goes here
        </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

TopNav.propTypes = {
  // bla: PropTypes.string,
};

TopNav.defaultProps = {
  // bla: 'test',
};

export default TopNav;
