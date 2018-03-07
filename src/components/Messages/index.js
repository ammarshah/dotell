import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import Header from '../Header';
import LeftNav from './left_nav';
import MiddleNav from './middle_nav';
import MessagesList from './messages_list';

class Messages extends Component {
  render(props){
    return (
      <div>
        <Header />
        <div id="wrapper">
          {/* Navigation */}          
          <LeftNav />
          <div id="page-wrapper" className="pd-l-15">
            <div className="row flex-holder">
              <div className="col-sm-2 col-xs-12 pd0 mail-left"><MiddleNav /></div>
                              
              <MessagesList />

              <div className="col-sm-5 col-xs-12 pd0">
                <div className="panel rounded shadow panel-teal">
                  <div className="panel-heading">
                    <div className="pull-left">
                      <h3 className="panel-title">I need to reschedule</h3>
                    </div>
                    <div className="pull-right user-right-head">
                      <a href="#!">
                        <i className="fa fa-angle-left" aria-hidden="true" />
                      </a>
                      <a href="#!">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-sub-heading inner-all">
                    <div className="pull-right">
                      <ul className="list-inline no-margin">
                        <li>
                          <div className="btn-group">
                            <button style={{paddingLeft: 0}} className="btn btn-default br0 btn-sm tooltips" type="button" data-toggle="tooltip" data-container="body" data-original-title="Delete">
                              <img alt="" width={20} src="../dist/images/rectangle-2@3x.png" />
                            </button>
                            <button className="btn btn-default br0 btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
                              <img alt="" width={20} src="../dist/images/page-1@3x.png" />
                            </button>
                            <button className="btn btn-default br0 btn-sm tooltips" type="button" data-toggle="tooltip" data-container="body" data-original-title="Report Spam">
                              <img alt="" width={16} src="../dist/images/trash-icon@3x.png" />
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* /.panel-sub-heading */}
                  <div className="panel-body no-padding user-mail">
                    <div className="table-responsive">
                      <table className="table table-hover table-email">
                        <tbody>
                          <tr>
                            <td>
                              <div className="media">
                                <a href="#!" className="pull-left">
                                  <img alt="..." src="../dist/images/userpic@3x.png" className="media-object" /> </a>
                                <div className="media-body">
                                  <h4 className="text-primary">Scott Nash</h4>
                                  <h5 className="text-secondry">Eva Ekman, Anton Ericsson,Pia Er…
                                    <a href="#!">+5 till </a>
                                  </h5>
                                  <span className="media-meta ">Jan 9, 2017 11:30</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* /.table-responsive */}
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mail-detail">
                          <p>
                            Hi Andrea,
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                          <p>
                            Best regards, <br /> Scott
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mail-detail">
                          <div className="row user-name-head">
                            <div className="col-md-6 pd0">
                              <h4>Eva Ekman</h4>
                            </div>
                            <div className="col-md-6 text-right">
                              <p>Jan 7, 2017 11:30</p>
                            </div>
                          </div>
                          <p>
                            Hi Andrea,
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                          <p>
                            Best regards, <br /> Scott
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mail-detail">
                          <div className="row user-name-head">
                            <div className="col-md-6 pd0">
                              <h4>Eva Ekman</h4>
                            </div>
                            <div className="col-md-6 text-right">
                              <p>Jan 7, 2017 11:30</p>
                            </div>
                          </div>
                          <p>
                            Hi Andrea,
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                          <p>
                            Best regards, <br /> Scott
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </div>
            </div>
          </div>
          {/* /#page-wrapper */}
        </div>
        {/* /#wrapper */}
        <div id="composeModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <img alt="" src="../dist/images/group-19@3x.png" width={12} />
                </button>
                <h4 className="modal-title text-center m-t-25">Nytt meddelande</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Till</label>
                  <input type="text" className="form-control" placeholder="Nyexad KBT-student söker PTP-anställning" />
                </div>
                <div className="form-group">
                  <label>Ämne</label>
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
  }

}
const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};

export default connect(mapStateToProps)(Messages);