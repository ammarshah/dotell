import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import ad_image from '../../images/athenik-office-slider@3x.png';

class AdItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 card-holder">
          <div className="row">
            <div className="col-md-2 pd-sm pd-l-15 col-xs-12">
              <div className="row">
                <div className="col-md-12">
                  <img alt="" src={ad_image} width="100%" />
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
    );
  };
};

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(AdItem);