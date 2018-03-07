import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import logo from '../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <div className="col-md-3">
          <img src={logo} />
        </div>
        <div className="col-md-9">
          <a className="btn btn-default navbar-btn navbar-right log-btn">
            Log Out
          </a>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Admin</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Advanced</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(Header);