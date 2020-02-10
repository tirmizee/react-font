import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ChartJs.styles';

class ChartJs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ChartJs will mount');
  }

  componentDidMount = () => {
    console.log('ChartJs mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ChartJs will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ChartJs will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ChartJs did update');
  }

  componentWillUnmount = () => {
    console.log('ChartJs will unmount');
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
            ChartJS
      <small>Preview sample</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Charts</a></li>
            <li className="active">ChartJS</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
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
                <div className="box-body">
                  <div className="chart">
                    <canvas id="areaChart" style={{ height: 250 }} />
                  </div>
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
                <div className="box-body">
                  <canvas id="pieChart" style={{ height: 250 }} />
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
                <div className="box-body">
                  <div className="chart">
                    <canvas id="lineChart" style={{ height: 250 }} />
                  </div>
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
                <div className="box-body">
                  <div className="chart">
                    <canvas id="barChart" style={{ height: 230 }} />
                  </div>
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

ChartJs.propTypes = {
  // bla: PropTypes.string,
};

ChartJs.defaultProps = {
  // bla: 'test',
};

export default ChartJs;
