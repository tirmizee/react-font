import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Inline.styles';

class Inline extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Inline will mount');
  }

  componentDidMount = () => {
    console.log('Inline mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Inline will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Inline will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Inline did update');
  }

  componentWillUnmount = () => {
    console.log('Inline will unmount');
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
            Inline Charts
      <small>multiple types of charts</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Charts</a></li>
            <li className="active">Inline Charts</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          {/* row */}
          <div className="row">
            <div className="col-xs-12">
              {/* jQuery Knob */}
              <div className="box box-solid">
                <div className="box-header">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">jQuery Knob</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={30} data-width={90} data-height={90} data-fgcolor="#3c8dbc" />
                      <div className="knob-label">New Visitors</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={70} data-width={90} data-height={90} data-fgcolor="#f56954" />
                      <div className="knob-label">Bounce Rate</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={-80} data-min={-150} data-max={150} data-width={90} data-height={90} data-fgcolor="#00a65a" />
                      <div className="knob-label">Server Load</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={40} data-width={90} data-height={90} data-fgcolor="#00c0ef" />
                      <div className="knob-label">Disk Space</div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                  <div className="row">
                    <div className="col-xs-6 text-center">
                      <input type="text" className="knob" defaultValue={90} data-width={90} data-height={90} data-fgcolor="#932ab6" />
                      <div className="knob-label">Bandwidth</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 text-center">
                      <input type="text" className="knob" defaultValue={50} data-width={90} data-height={90} data-fgcolor="#39CCCC" />
                      <div className="knob-label">CPU</div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-solid">
                <div className="box-header">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">jQuery Knob Different Sizes</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={30} data-width={90} data-height={90} data-fgcolor="#3c8dbc" data-readonly="true" />
                      <div className="knob-label">data-width="90"</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={30} data-width={120} data-height={120} data-fgcolor="#f56954" />
                      <div className="knob-label">data-width="120"</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={30} data-thickness="0.1" data-width={90} data-height={90} data-fgcolor="#00a65a" />
                      <div className="knob-label">data-thickness="0.1"</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" data-thickness="0.2" data-anglearc={250} data-angleoffset={-125} defaultValue={30} data-width={120} data-height={120} data-fgcolor="#00c0ef" />
                      <div className="knob-label">data-angleArc="250"</div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-solid">
                <div className="box-header">
                  <i className="fa fa-bar-chart-o" />
                  <h3 className="box-title">jQuery Knob Tron Style</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <div className="row">
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={80} data-skin="tron" data-thickness="0.2" data-width={90} data-height={90} data-fgcolor="#3c8dbc" data-readonly="true" />
                      <div className="knob-label">data-width="90"</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={60} data-skin="tron" data-thickness="0.2" data-width={120} data-height={120} data-fgcolor="#f56954" />
                      <div className="knob-label">data-width="120"</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={10} data-skin="tron" data-thickness="0.1" data-width={90} data-height={90} data-fgcolor="#00a65a" />
                      <div className="knob-label">data-thickness="0.1"</div>
                    </div>
                    {/* ./col */}
                    <div className="col-xs-6 col-md-3 text-center">
                      <input type="text" className="knob" defaultValue={100} data-skin="tron" data-thickness="0.2" data-anglearc={250} data-angleoffset={-125} data-width={120} data-height={120} data-fgcolor="#00c0ef" />
                      <div className="knob-label">data-angleArc="250"</div>
                    </div>
                    {/* ./col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          {/* callout */}
          <div className="callout callout-info">
            <h4>The following was created using data tags</h4>
            <p>The following three inline (sparkline) chart have been initialized to read and interpret data tags</p>
          </div>
          {/* /.callout */}
          <div className="row">
            <div className="col-md-4">
              <div className="box box-solid">
                <div className="box-header">
                  <h3 className="box-title text-danger">Sparkline Pie</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh" /></button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body text-center">
                  <div className="sparkline" data-type="pie" data-offset={90} data-width="100px" data-height="100px">
                    6,4,8
            </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-4">
              <div className="box box-solid">
                <div className="box-header">
                  <h3 className="box-title text-blue">Sparkline line</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh" /></button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body text-center">
                  <div className="sparkline" data-type="line" data-spot-radius={3} data-highlight-spot-color="#f39c12" data-highlight-line-color="#222" data-min-spot-color="#f56954" data-max-spot-color="#00a65a" data-spot-color="#39CCCC" data-offset={90} data-width="100%" data-height="100px" data-line-width={2} data-line-color="#39CCCC" data-fill-color="rgba(57, 204, 204, 0.08)">
                    6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6
            </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-4">
              <div className="box box-solid">
                <div className="box-header">
                  <h3 className="box-title text-warning">Sparkline Bar</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh" /></button>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body text-center">
                  <div className="sparkline" data-type="bar" data-width="97%" data-height="100px" data-bar-width={14} data-bar-spacing={7} data-bar-color="#f39c12">
                    6,4,8, 9, 10, 5, 13, 18, 21, 7, 9
            </div>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-solid">
                <div className="box-header">
                  <h3 className="box-title">Sparkline examples</h3>
                  <div className="box-tools pull-right">
                    <button type="button" className="btn btn-default btn-sm" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    <button type="button" className="btn btn-default btn-sm" data-widget="remove"><i className="fa fa-times" />
                    </button>
                  </div>
                </div>
                {/* /.box-header */}
                <div id="myBody" className="box-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <p>
                        Mouse speed <span id="mousespeed">Loading..</span>
                      </p>
                      <p>
                        Inline <span className="sparkline-1">10,8,9,3,5,8,5</span>
                        line graphs
                  <span className="sparkline-1">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
                      </p>
                      <p>
                        Bar charts <span className="sparkbar">10,8,9,3,5,8,5</span>
                        negative values: <span className="sparkbar">-3,1,2,0,3,-1</span>
                        stacked: <span className="sparkbar">0:2,2:4,4:2,4:1</span>
                      </p>
                      <p>
                        Composite inline
                  <span id="compositeline">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
                      </p>
                      <p>
                        Inline with normal range
                  <span id="normalline">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
                      </p>
                      <p>
                        Composite bar
                  <span id="compositebar">4,6,7,7,4,3,2,1,4</span>
                      </p>
                      <p>
                        Discrete
                  <span className="discrete1">4,6,7,7,4,3,2,1,4,4,5,6,7,6,6,2,4,5</span><br />
                        Discrete with threshold
                  <span id="discrete2">4,6,7,7,4,3,2,1,4</span>
                      </p>
                      <p>
                        Bullet charts<br />
                        <span className="sparkbullet">10,12,12,9,7</span><br />
                        <span className="sparkbullet">14,12,12,9,7</span><br />
                        <span className="sparkbullet">10,12,14,9,7</span><br />
                      </p>
                    </div>
                    {/* /.col */}
                    <div className="col-sm-6">
                      <p>
                        Customize size and colours
                  <span id="linecustom">10,8,9,3,5,8,5,7</span>
                      </p>
                      <p>
                        Tristate charts
                  <span className="sparktristate">1,1,0,1,-1,-1,1,-1,0,0,1,1</span><br />
                        (think games won, lost or drawn)
                </p>
                      <p>
                        Tristate chart using a colour map:
                  <span className="sparktristatecols">1,2,0,2,-1,-2,1,-2,0,0,1,1</span>
                      </p>
                      <p>
                        Box Plot: <span className="sparkboxplot">4,27,34,52,54,59,61,68,78,82,85,87,91,93,100</span><br />
                        Pre-computed box plot <span className="sparkboxplotraw">Loading..</span>
                      </p>
                      <p>
                        Pie charts
                  <span className="sparkpie">1,1,2</span>
                        <span className="sparkpie">1,5</span>
                        <span className="sparkpie">20,50,80</span>
                      </p>
                    </div>
                    {/* /.col */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.box-body */}
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

Inline.propTypes = {
  // bla: PropTypes.string,
};

Inline.defaultProps = {
  // bla: 'test',
};

export default Inline;
