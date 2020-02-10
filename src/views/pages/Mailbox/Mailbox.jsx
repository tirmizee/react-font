import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Mailbox.styles';

class Mailbox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Mailbox will mount');
  }

  componentDidMount = () => {
    console.log('Mailbox mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Mailbox will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Mailbox will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Mailbox did update');
  }

  componentWillUnmount = () => {
    console.log('Mailbox will unmount');
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
            Mailbox
      <small>13 new messages</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li className="active">Mailbox</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <a href="compose.html" className="btn btn-primary btn-block margin-bottom">Compose</a>
              <div className="box box-solid">
                <div className="box-header with-border">
                  <h3 className="box-title">Folders</h3>
                  <div className="box-tools">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="box-body no-padding">
                  <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#"><i className="fa fa-inbox" /> Inbox
                  <span className="label label-primary pull-right">12</span></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o" /> Sent</a></li>
                    <li><a href="#"><i className="fa fa-file-text-o" /> Drafts</a></li>
                    <li><a href="#"><i className="fa fa-filter" /> Junk <span className="label label-warning pull-right">65</span></a>
                    </li>
                    <li><a href="#"><i className="fa fa-trash-o" /> Trash</a></li>
                  </ul>
                </div>
                {/* /.box-body */}
              </div>
              {/* /. box */}
              <div className="box box-solid">
                <div className="box-header with-border">
                  <h3 className="box-title">Labels</h3>
                  <div className="box-tools">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="box-body no-padding">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#"><i className="fa fa-circle-o text-red" /> Important</a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-yellow" /> Promotions</a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-light-blue" /> Social</a></li>
                  </ul>
                </div>
                {/* /.box-body */}
              </div>
              {/* /.box */}
            </div>
            {/* /.col */}
            <div className="col-md-9">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Inbox</h3>
                  <div className="box-tools pull-right">
                    <div className="has-feedback">
                      <input type="text" className="form-control input-sm" placeholder="Search Mail" />
                      <span className="glyphicon glyphicon-search form-control-feedback" />
                    </div>
                  </div>
                  {/* /.box-tools */}
                </div>
                {/* /.box-header */}
                <div className="box-body no-padding">
                  <div className="mailbox-controls">
                    {/* Check all button */}
                    <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o" />
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o" /></button>
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-reply" /></button>
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-share" /></button>
                    </div>
                    {/* /.btn-group */}
                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh" /></button>
                    <div className="pull-right">
                      1-50/200
                <div className="btn-group">
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left" /></button>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right" /></button>
                      </div>
                      {/* /.btn-group */}
                    </div>
                    {/* /.pull-right */}
                  </div>
                  <div className="table-responsive mailbox-messages">
                    <table className="table table-hover table-striped">
                      <tbody>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment" />
                          <td className="mailbox-date">5 mins ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">28 mins ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">11 hours ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment" />
                          <td className="mailbox-date">15 hours ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">Yesterday</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment" />
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment" />
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment" />
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">4 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment" />
                          <td className="mailbox-date">12 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">12 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">14 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow" /></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                    </td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip" /></td>
                          <td className="mailbox-date">15 days ago</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* /.table */}
                  </div>
                  {/* /.mail-box-messages */}
                </div>
                {/* /.box-body */}
                <div className="box-footer no-padding">
                  <div className="mailbox-controls">
                    {/* Check all button */}
                    <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o" />
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o" /></button>
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-reply" /></button>
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-share" /></button>
                    </div>
                    {/* /.btn-group */}
                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh" /></button>
                    <div className="pull-right">
                      1-50/200
                <div className="btn-group">
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left" /></button>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right" /></button>
                      </div>
                      {/* /.btn-group */}
                    </div>
                    {/* /.pull-right */}
                  </div>
                </div>
              </div>
              {/* /. box */}
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

Mailbox.propTypes = {
  // bla: PropTypes.string,
};

Mailbox.defaultProps = {
  // bla: 'test',
};

export default Mailbox;
