import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import MessageItem from './message_item';

import rectangle from '../../images/rectangle-2@3x.png';
import page from '../../images/page-1@3x.png';
import trash from '../../images/trash-icon@3x.png';

class MessagesList extends Component {
  render() {
    return (
      <div className="col-sm-5 col-xs-12 pd0 br-section">
                <div className="panel rounded shadow panel-teal">
                  <div className="panel-heading">
                    <div className="pull-left">
                      <h3 className="panel-title">{this.props.translate('message.left_nav.inbox')}</h3>
                    </div>
                    <div className="pull-right">
                      <form action="#" className="form-horizontal mr-5 mt-3">
                        <div className="form-group no-margin no-padding has-feedback">
                          <input type="text" className="form-control no-border" placeholder={this.props.translate('search')} />
                          <button type="submit" className="btn btn-theme fa fa-search form-control-feedback" />
                        </div>
                      </form>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-sub-heading inner-all">
                    <div className="pull-left">
                      <ul className="list-inline no-margin">                        
                        <li>
                          <div className="btn-group">
                            <button style={{paddingLeft: 0}} className="btn btn-default br0 btn-sm tooltips" type="button" data-toggle="tooltip" data-container="body" data-original-title="Delete">
                              <img alt="select all" width={20} src={rectangle} />
                            </button>
                            <button className="btn btn-default br0 btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
                            <img alt="sorting" width={20} src={page} />
                            </button>
                            <ul className="dropdown-menu dropdown-sm pull-right" role="menu">
                              <li>
                                <a href="#!">Senaste</a>
                              </li>
                              <li>
                                <a href="#!">ldsta</a>
                              </li>
                            </ul>
                            <button className="btn btn-default br0 btn-sm tooltips" type="button" data-toggle="tooltip" data-container="body" data-original-title="Report Spam">
                            <img alt="Trash Can" width={16} src={trash} />
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="clearfix" />
                  </div>
                  {/* /.panel-sub-heading */}
                  <div className="panel-body no-padding">
                    <div className="table-responsive">
                      <table className="table table-hover table-email">
                        <tbody>
                          <tr>
                            <td>
                              <div className="ckbox ckbox-theme">
                                <input id="checkbox1" type="checkbox" defaultChecked="checked" className="mail-checkbox" />
                                <label htmlFor="checkbox1" />
                                <a href="#!" className="star star-checked">
                                  <i className="fa fa-star" />
                                </a>
                              </div>
                            </td>
                            <td>
                              <div className="media">
                                <div className="media-body">
                                  <h4 className="text-primary">Scott Nash</h4>
                                  <p className="text-default">I’m running late</p>
                                  <p className="email-summary">Hi Andrea, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore mag… </p>
                                  <span className="media-meta text-default">Today at 6:16am</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                          {/* <MessageItem /> */}
                          <MessageItem />
                          
                        </tbody>
                      </table>
                    </div>
                    {/* /.table-responsive */}
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(MessagesList);
