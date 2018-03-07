import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { Modal } from 'react-bootstrap';

import plus from '../../images/plus-o.svg';

class EditUser extends Component {
  state = {
    show: false
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  }
  render(props){
    return (
      <div>        
        <span onClick={this.handleShow} className="glyphicon glyphicon-pencil dotell-icon" />

        <Modal show={this.state.show} onHide={this.handleClose} className="adminModal">
          <Modal.Header closeButton>
            <h4 className="modal-title text-center m-t-25">{this.props.translate('admin.edit_user')}</h4>
          </Modal.Header>
          <Modal.Body>
            
            {/* ROW */}
            <div className="row">              
              <div className="col-md-6">
                <div className="form-group">                  
                  <input type="text" className="form-control" placeholder={this.props.translate('admin.first_name')} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">                  
                  <input type="text" className="form-control" placeholder={this.props.translate('admin.surname')} />
                </div>
              </div>
            </div>

            {/* ROW */}
            <div className="row">              
              <div className="col-md-6">
                <div className="form-group">                  
                  <input type="text" className="form-control" placeholder={this.props.translate('admin.phone_num')} />
                </div>
              </div>
              
            </div>

            {/* ROW */}
            <div className="row">              
              <div className="col-md-6">
                <div className="form-group">                  
                  <input type="text" className="form-control" placeholder={this.props.translate('admin.email_address')} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">                  
                  <input type="text" className="form-control" placeholder={this.props.translate('admin.repeat_email')} />
                </div>
              </div>
            </div>
            
            {/* ROW */}
            <div className="row">              
              <div className="col-md-6">
                <div className="form-group">                  
                  <input type="text" className="form-control" placeholder={this.props.translate('admin.pwd')} />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">                  
                  <input type="text" className="form-control" placeholder={this.props.translate('admin.repeat_pwd')} />
                </div>
              </div>
            </div>

            {/* ROW */}
            <div className="row">              
              <div className="col-md-6">
                * {this.props.translate("admin.required_fields")}
              </div>
              
            </div>

          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <button type="button" className="btn btn-block adminBtn" data-dismiss="modal">{this.props.translate('admin.save')}</button>
              </div>
            </div>            
          </Modal.Footer>
        </Modal>
      </div>
    );
  
  };
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(EditUser);


