import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector';


import logo from '../../images/logo.png';

class HeaderLight extends Component {
  render(props) {
    return (
      <div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top booking-main-nav" style={{ marginBottom: "0" }}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse"
              data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand brand-home"><img src={logo} alt="Logo" /></Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            {/* <LanguageSelector /> */}
            <ul className="nav navbar-top-links navbar-right nav-mobile ">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="!#">Gör testet</a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="!#">
                  För legitimerade terapeuter
                                </a>
              </li>
              {/*/.dropdown*/}
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="!#">
                  {this.props.translate('login')}
                                </a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle br-btn" data-toggle="dropdown" href="!#">
                  Logga ut
                                </a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle br-btn" data-toggle="dropdown" href="!#">
                  Registrera dig
                                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
  }
};

export default connect(mapStateToProps)(HeaderLight);
