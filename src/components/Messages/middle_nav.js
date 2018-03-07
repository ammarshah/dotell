import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import NewMessageModal from './new_message_modal';

import './styles.css';

class MiddleNav extends Component {
  render(){
    return(
      <div>
        <NewMessageModal />
        <ul className="nav nav-pills nav-stacked nav-email shadow mb-20">
          <li className="active">
            <a href="!#">            
              <i className="fa fa-inbox" /> {this.props.translate("message.left_nav.inbox")}
              <span className="label pull-right">7</span>
            </a>
          </li>
          <li>
            <a data-toggle="modal" href="#composeModal">
              <i className="fa fa-envelope-o" /> {this.props.translate("message.left_nav.starred")}</a>
          </li>
          <li>
            <a href="#!">
              <i className="fa fa-certificate" /> {this.props.translate("message.left_nav.sent")}</a>
          </li>
          <li>
            <a href="#!">
              <i className="fa fa-trash-o" />{this.props.translate("message.left_nav.trash_can")}
            </a>
          </li>
        </ul>            
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(MiddleNav);
