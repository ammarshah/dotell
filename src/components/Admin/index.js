import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import Header from './header';
import LeftNav from './left_nav';
import AdminUsers from './AdminUsers';
import AddUser from './add_user_modal';

import './styles.css';

class AdItem extends Component {
  render() {
    return (
      <div className="container-fluid">			
        <Header />
        <div className="row">
          <LeftNav />
          <div className="col-md-10 details-bg">
            <h2>
              <AddUser className="pull-right" />
              Administration
            </h2> 
            <AdminUsers />            						
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(AdItem);