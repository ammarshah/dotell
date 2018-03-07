import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import './styles.css';

class LeftNav extends Component {
  render(){
    return(
      <div className="navbar-default sidebar" role="navigation">            
        <ul className="nav" id="side-menu">
          <li>
            <a href="!#">{this.props.translate("message.left_nav.my_profile")}</a>
          </li>
          <li>
            <a className="active" href="!#">{this.props.translate("message.left_nav.messaging")}</a>
          </li>
          <li>
            <a href="!#">{this.props.translate("message.left_nav.meeting_list")}</a>
          </li>
          <li>
            <a href="!#">{this.props.translate("message.left_nav.calendar")}</a>
          </li>
          <li>
            <a href="!#">{this.props.translate("message.left_nav.account_information")}</a>
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
export default connect(mapStateToProps)(LeftNav);
