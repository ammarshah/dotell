import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

// import './styles.css';

class Nav extends Component {
  render(){
    return(
      <div className="navbar-default sidebar" role="navigation">            
        <ul className="nav" id="side-menu">
          <li>            
            <Link className="active" to={'/ads'}>{this.props.translate("ads.all_ads")}</Link>
          </li>
          <li>
            <Link to={'/createAd'}>{this.props.translate("ads.create_new_ad")}</Link>
          </li>
          <li>
            {/* <a href="#!">{this.props.translate("ads.my_ads")}</a> */}
            <Link className="active" to={'/ads'}>{this.props.translate("ads.my_ads")}</Link>
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
export default connect(mapStateToProps)(Nav);
