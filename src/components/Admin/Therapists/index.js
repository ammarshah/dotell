import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import Header from '../header';
import LeftNav from '../left_nav';
import List from './list';

class Therapists extends Component {
  render() {
    return (
      <div className="container-fluid">			
        <Header />
        <div className="row">
          <LeftNav />
          <div className="col-md-10 details-bg">
            <h2>              
              Therapists
            </h2> 
            <List />
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
export default connect(mapStateToProps)(Therapists);