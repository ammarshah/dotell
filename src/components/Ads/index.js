import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import Header from '../Header';
import Nav from './nav';
import Filters from './filters';
import AdsList from './ads_list';

class Ads extends Component {
  render(props){
    return (
      <div>
        <Header />
        <div id="wrapper">
          {/* Navigation */}
          <Nav />
          <div id="page-wrapper">
            <Filters />
            <hr />
            <AdsList />
            <div className="row">
              <div className="col-md-12 col-xs-12 card-holder">
                <div className="row">
                  <div className="col-md-2 pd-l-15 pd-sm col-xs-12">
                    <div className="row">
                      <div className="col-md-12">
                        <img src="../dist/images/athenik-office-slider@3x.png" width="100%" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 pd-sm col-xs-12">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Lokaler, Finnes, Öst</p>
                      </div>
                      <div className="col-md-6 text-right"> 
                        <p className="gray-text">6 sep 14:30</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h3>Ljusa lokaler i kontorshotell – Centralt och härliga kollegor.</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <p>1 rum</p>
                      </div>
                      <div className="col-md-4">
                        <p>30 kvm</p>
                      </div>
                      <div className="col-md-4">
                        <p>12 000 kr/mån</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-12">
                        <h4>Nyckelord</h4>
                        <ul>
                          <li>Wifi</li>
                          <li>Egen ingång</li>
                          <li>Veckostädning</li>
                          <li>3 mån uppsägning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xs-12 card-holder">
                <div className="row">
                  <div className="col-md-2 pd-l-15 pd-sm col-xs-12">
                    <div className="row">
                      <div className="col-md-12">
                        <img src="../dist/images/athenik-office-slider@3x.png" width="100%" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 pd-sm col-xs-12">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Lokaler, Finnes, Öst</p>
                      </div>
                      <div className="col-md-6 text-right"> 
                        <p className="gray-text">6 sep 14:30</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h3>Ljusa lokaler i kontorshotell – Centralt och härliga kollegor.</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <p>1 rum</p>
                      </div>
                      <div className="col-md-4">
                        <p>30 kvm</p>
                      </div>
                      <div className="col-md-4">
                        <p>12 000 kr/mån</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-12">
                        <h4>Nyckelord</h4>
                        <ul>
                          <li>Wifi</li>
                          <li>Egen ingång</li>
                          <li>Veckostädning</li>
                          <li>3 mån uppsägning</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /#page-wrapper */}
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

export default connect(mapStateToProps)(Ads);