import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './EditorForm.styles';

class EditorForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('EditorForm will mount');
  }

  componentDidMount = () => {
    console.log('EditorForm mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('EditorForm will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('EditorForm will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('EditorForm did update');
  }

  componentWillUnmount = () => {
    console.log('EditorForm will unmount');
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
            Text Editors
      <small>Advanced form element</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li className="active">Editors</li>
          </ol>
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="box box-info">
                <div className="box-header">
                  <h3 className="box-title">CK Editor
              <small>Advanced and full of features</small>
                  </h3>
                  {/* tools box */}
                  <div className="pull-right box-tools">
                    <button type="button" className="btn btn-info btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                      <i className="fa fa-minus" /></button>
                    <button type="button" className="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">
                      <i className="fa fa-times" /></button>
                  </div>
                  {/* /. tools */}
                </div>
                {/* /.box-header */}
                <div className="box-body pad">
                  <form>
                    <textarea id="editor1" name="editor1" rows={10} cols={80} defaultValue={"                                            This is my textarea to be replaced with CKEditor.\n                    "} />
                  </form>
                </div>
              </div>
              {/* /.box */}
              <div className="box">
                <div className="box-header">
                  <h3 className="box-title">Bootstrap WYSIHTML5
              <small>Simple and fast</small>
                  </h3>
                  {/* tools box */}
                  <div className="pull-right box-tools">
                    <button type="button" className="btn btn-default btn-sm" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                      <i className="fa fa-minus" /></button>
                    <button type="button" className="btn btn-default btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove">
                      <i className="fa fa-times" /></button>
                  </div>
                  {/* /. tools */}
                </div>
                {/* /.box-header */}
                <div className="box-body pad">
                  <form>
                    <textarea className="textarea" placeholder="Place some text here" style={{ width: '100%', height: 200, fontSize: 14, lineHeight: 18, border: '1px solid #dddddd', padding: 10 }} defaultValue={""} />
                  </form>
                </div>
              </div>
            </div>
            {/* /.col*/}
          </div>
          {/* ./row */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}

EditorForm.propTypes = {
  // bla: PropTypes.string,
};

EditorForm.defaultProps = {
  // bla: 'test',
};

export default EditorForm;
