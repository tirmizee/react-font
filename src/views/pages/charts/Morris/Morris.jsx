import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Morris.styles';

class Morris extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Morris will mount');
  }

  componentDidMount = () => {
    console.log('Morris mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Morris will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Morris will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Morris did update');
  }

  componentWillUnmount = () => {
    console.log('Morris will unmount');
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
            Morris Charts
      <small>Preview sample</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Charts</a></li>
            <li className="active">Morris</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="callout callout-warning">
            <h4>Warning!</h4>
            <p><b>Morris.js</b> charts are no longer maintained by its author. We would recommend using any of the other
        charts that come with the template.</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* AREA CHART */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Area Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body chart-responsive">
                  <div className="chart" id="revenue-chart" style={{ height: 300 }} />
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              {/* DONUT CHART */}
              <div className="box box-danger">
                <div className="box-header with-border">
                  <h3 className="box-title">Donut Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body chart-responsive">
                  <div className="chart" id="sales-chart" style={{ height: 300, position: 'relative' }} />
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col (LEFT) */}
            <div className="col-md-6">
              {/* LINE CHART */}
              <div className="box box-info">
                <div className="box-header with-border">
                  <h3 className="box-title">Line Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body chart-responsive">
                  <div className="chart" id="line-chart" style={{ height: 300 }} />
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
              {/* BAR CHART */}
              <div className="box box-success">
                <div className="box-header with-border">
                  <h3 className="box-title">Bar Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body chart-responsive">
                  <div className="chart" id="bar-chart" style={{ height: 300 }} />
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col (RIGHT) */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>

    );
  }
}

Morris.propTypes = {
  // bla: PropTypes.string,
};

Morris.defaultProps = {
  // bla: 'test',
};

export default Morris;
