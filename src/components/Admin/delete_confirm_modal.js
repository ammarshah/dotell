import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { Modal } from 'react-bootstrap';

import plus from '../../images/plus-o.svg';

class DeleteConfirm extends Component {
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
        <span onClick={this.handleShow} className="glyphicon glyphicon-trash dotell-icon" />        

        <Modal show={this.state.show} onHide={this.handleClose} className="adminModal">
          <Modal.Header closeButton>
            <h4 className="modal-title text-center m-t-25">{this.props.translate('admin.delete_user')}</h4>
          </Modal.Header>
          <Modal.Body>
            
            {/* ROW */}
            <div className="row">              
              <div className="col-md-12" style={{textAlign: 'center'}}>
                <div className="form-group">                  
                  <br />
                  {this.props.translate('admin.delete_warning_msg')}
                  <br /><br />
                  <strong style={{color: '#6a8a9e'}}>Louise Enwall</strong>
                  <br /><br /><br /><br />
                </div>
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
export default connect(mapStateToProps)(DeleteConfirm);


