import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { Modal } from 'react-bootstrap';

class NewMessage extends Component {
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
        <a href="#!" onClick={this.handleShow} className="btn btn-primary btn-block btn-compose-email">{this.props.translate("message.left_nav.new_message")}</a>        

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>            
            <h4 class="modal-title text-center m-t-25">{this.props.translate('message.left_nav.new_message')}</h4>
          </Modal.Header>
          <Modal.Body>
            <div class="form-group">
              <label>{this.props.translate('message.left_nav.to')}</label>
              <input type="text" class="form-control" placeholder={this.props.translate('message.left_nav.kbt_placeholder')} />
            </div>
            <div class="form-group">
              <label>{this.props.translate('message.left_nav.subject')}</label>
              <input type="text" class="form-control" />
            </div>
             <div class="form-group">
              <label>{this.props.translate('message.left_nav.message')}</label>
              <textarea class="form-control"></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <button type="button" class="btn btn-block btn-primary btn-rd" data-dismiss="modal">{this.props.translate('message.left_nav.send')}</button>
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
export default connect(mapStateToProps)(NewMessage);


