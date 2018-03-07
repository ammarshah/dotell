import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { Modal } from 'react-bootstrap';

import comment from '../../images/comment@3x.png';

class MessageModal extends Component {
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
        <button onClick={this.handleShow} className="btn btn-primary btn-block"><img width={15} src={comment} />Visa e-postadress</button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>            
            <h4 className="modal-title text-center m-t-25">{this.props.translate('ads.send_message')}</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>{this.props.translate('ads.advertisement')}</label>
              <input type="text" className="form-control" placeholder={this.props.translate('message.left_nav.kbt_placeholder')} />
            </div>
            <div className="form-group">
              <label>{this.props.translate('message.left_nav.to')}</label>
              <input type="text" className="form-control" />
            </div>
             <div className="form-group">
              <label>{this.props.translate('message.left_nav.message')}</label>
              <textarea className="form-control"></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <button type="button" className="btn btn-block btn-primary btn-rd" data-dismiss="modal">{this.props.translate('message.left_nav.send')}</button>
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
export default connect(mapStateToProps)(MessageModal);


