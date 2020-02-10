import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Boxed.styles';

class Boxed extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log(this.props.location.pathname);
  }

  componentDidMount = () => {
    console.log('Boxed mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Boxed will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Boxed will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Boxed did update');
  }

  componentWillUnmount = () => {
    console.log('Boxed will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <h1>
            Boxed Layout
      <small>Blank example to the boxed layout</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Layout</a></li>
            <li className="active">Boxed</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="callout callout-info">
            <h4>Tip!</h4>
            <p>Add the layout-boxed class to the body tag to get this layout. The boxed layout is helpful when working on
        large screens because it prevents the site from stretching very wide.</p>
          </div>
          {/* Default box */}
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Title</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fa fa-minus" /></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fa fa-times" /></button>
              </div>
            </div>
            <div className="box-body">
              Start creating your amazing application!
      </div>
            {/* /.box-body */}
            <div className="box-footer">
              Footer
      </div>
            {/* /.box-footer*/}
          </div>
          {/* /.box */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

Boxed.propTypes = {
  // bla: PropTypes.string,
};

Boxed.defaultProps = {
  // bla: 'test',
};

export default Boxed;
