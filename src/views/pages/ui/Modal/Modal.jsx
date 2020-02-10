import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Modal will mount');
  }

  componentDidMount = () => {
    console.log('Modal mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Modal will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Modal will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Modal did update');
  }

  componentWillUnmount = () => {
    console.log('Modal will unmount');
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
            Modals
      <small>new</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">UI</a></li>
            <li className="active">Modals</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="callout callout-info">
            <h4>Reminder!</h4>
            Instructions for how to use modals are available on the
      <a href="http://getbootstrap.com/javascript/#modals">Bootstrap documentation</a>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-default">
                <div className="box-header with-border">
                  <h3 className="box-title">Modal Examples</h3>
                </div>
                <div className="box-body">
                  <button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">
                    Launch Default Modal
            </button>
                  <button type="button" className="btn btn-info" data-toggle="modal" data-target="#modal-info">
                    Launch Info Modal
            </button>
                  <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modal-danger">
                    Launch Danger Modal
            </button>
                  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-warning">
                    Launch Warning Modal
            </button>
                  <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-success">
                    Launch Success Modal
            </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="modal-default">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title">Default Modal</h4>
                </div>
                <div className="modal-body">
                  <p>One fine body…</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
          <div className="modal modal-primary fade" id="modal-primary">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title">Primary Modal</h4>
                </div>
                <div className="modal-body">
                  <p>One fine body…</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline">Save changes</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
          <div className="modal modal-info fade" id="modal-info">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title">Info Modal</h4>
                </div>
                <div className="modal-body">
                  <p>One fine body…</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline">Save changes</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
          <div className="modal modal-warning fade" id="modal-warning">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title">Warning Modal</h4>
                </div>
                <div className="modal-body">
                  <p>One fine body…</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline">Save changes</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
          <div className="modal modal-success fade" id="modal-success">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title">Success Modal</h4>
                </div>
                <div className="modal-body">
                  <p>One fine body…</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline">Save changes</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
          <div className="modal modal-danger fade" id="modal-danger">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span></button>
                  <h4 className="modal-title">Danger Modal</h4>
                </div>
                <div className="modal-body">
                  <p>One fine body…</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline pull-left" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-outline">Save changes</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
        </section>
        {/* /.content */}
      </div>


    );
  }
}

Modal.propTypes = {
  // bla: PropTypes.string,
};

Modal.defaultProps = {
  // bla: 'test',
};

export default Modal;
