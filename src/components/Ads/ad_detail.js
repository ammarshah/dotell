import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import Header from '../Header';
import Nav from './nav';
import Slider from './slider';
import MessageModal from './message_modal';
import ad_image from '../../images/athenik-office-slider@3x.png';

import call from '../../images/call@3x.png';
class AdDetail extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="wrapper">
          {/* Navigation */}
          <Nav />
          <div id="page-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header"><a href>Tillbaka till sökningen</a></h1>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                    <Slider />
                    
                  </div>
                </div>
                <div className="row m-t-15 bt-section">
                  <div className="col-md-4">
                    <p>Lokaler, Finnes, Östermalm</p>
                  </div>
                  <div className="col-md-4">
                    <p>Annonsör: <a href>Lokaler för psykologer AB</a></p>
                  </div>
                  <div className="col-md-4 pull-right text-right">
                    <p>6 sep 14:30</p>
                  </div>
                </div>
                <div className="row bt-section">
                  <div className="col-md-12">
                    <h2>Ljusa lokaler i kontorshotell – Centralt <br />
                      och härliga kollegor </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat nulla arcu, lacinia mattis felis ultricies sed. Nam varius ullamcorper nisl, nec laoreet felis. Proin imperdiet libero urna, at dignissim risus rutrum ac. Phasellus gravida blandit turpis vitae lacinia. Integer tempus dui at tortor facilisis, ut molestie arcu dapibus.    
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat nulla arcu, lacinia mattis felis ultricies sed. Nam varius ullamcorper nisl, nec laoreet felis. Proin imperdiet libero urna, at dignissim risus rutrum ac. Phasellus gravida blandit turpis vitae lacinia. Integer tempus dui at tortor facilisis, ut molestie arcu dapibus. 
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat nulla arcu, lacinia mattis felis ultricies sed. Nam varius ullamcorper nisl, nec laoreet felis. Proin imperdiet libero urna, at dignissim risus rutrum ac. Phasellus gravida blandit turpis vitae lacinia. Integer tempus dui at tortor facilisis, ut molestie arcu dapibus. 
                    </p>
                  </div>
                  <div className="col-md-3">                    
                    <MessageModal />
                    <button className="btn btn-primary btn-block"><img width={15} src={call} />070-Visa nummer</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4 right-section">
                <div className="row">
                  <div className="col-md-12">
                    <h2>12 000 kr/mån</h2>
                    <p><span> 1 rum </span>  <span>30 kvm</span></p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-12">
                    <h4>Nyckelord</h4>
                    <ul className="check-list">
                      <li>Wifi</li>
                      <li>Printer</li>
                      <li>Veckostädning</li>
                      <li>3 mån uppsägning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /#page-wrapper */}
        </div>
        {/* /#wrapper */}        
        <div id="contactModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><img src="../dist/images/group-19@3x.png" width={12} /></button>
                <h4 className="modal-title text-center m-t-25">Skicka meddelande</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>ANNONS</label>
                  <input type="text" className="form-control" placeholder="Nyexad KBT-student söker PTP-anställning" />
                </div>
                <div className="form-group">
                  <label>TILL</label>
                  <input type="text" className="form-control" placeholder="Lisa Johansson" />
                </div>
                <div className="form-group">
                  <label>Meddelande</label>
                  <textarea className="form-control" defaultValue={"\n                "} />
                </div>
              </div>
              <div className="modal-footer text-center">
                <div className="row">
                  <div className="col-md-4 col-md-offset-4">
                    <button type="button" className="btn btn-block btn-primary btn-rd" data-dismiss="modal">Skicka</button>
                  </div>
                </div>
              </div>
            </div>
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
export default connect(mapStateToProps)(AdDetail);