import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Flot.styles';

class Flot extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Flot will mount');
  }

  componentDidMount = () => {
    console.log('Flot mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Flot will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Flot will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Flot did update');
  }

  componentWillUnmount = () => {
    console.log('Flot will unmount');
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
            Flot Charts
      <small>preview sample</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Charts</a></li>
            <li className="active">Flot</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              {/* interactive chart */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">Interactive Area Chart</h3>
                  <div className="box-tools pull-right">
                    Real time
              <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                      <button type="button" className="btn btn-default btn-xs active" data-toggle="on">On</button>
                      <button type="button" className="btn btn-default btn-xs" data-toggle="off">Off</button>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  <div id="interactive" style={{ height: 300 }} />
                </div>
                {/* /.box-body*/}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-6">
              {/* Line chart */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">Line Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="line-chart" style={{ height: 300 }} />
                </div>
                {/* /.box-body*/}
              </div>
              {/* /.box */}
              {/* Area chart */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">Full Width Area Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="area-chart" style={{ height: 338 }} className="full-width-chart" />
                </div>
                {/* /.box-body*/}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-6">
              {/* Bar chart */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">Bar Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="bar-chart" style={{ height: 300 }} />
                </div>
                {/* /.box-body*/}
              </div>
              {/* /.box */}
              {/* Donut chart */}
              <div className="box box-primary">
                <div className="box-header with-border">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">Donut Chart</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button>
                  </div>
                </div>
                <div className="box-body">
                  <div id="donut-chart" style={{ height: 300 }} />
                </div>
                {/* /.box-body*/}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </section>
        {/* /.content */}
      </div>

    );
  }
}

Flot.propTypes = {
};

Flot.defaultProps = {
};

export default Flot;
