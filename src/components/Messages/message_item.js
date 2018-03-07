import React, {Component} from 'react';
import { connect } from 'react-redux';


class MessageItem extends Component {
  render(props){
    return (
      <tr>
        <td>
          <div className="ckbox ckbox-theme">
            <input id="checkbox4" type="checkbox" className="mail-checkbox" />
            <label htmlFor="checkbox4" />
            <a href="!#" className="star">
              <i className="fa fa-star" />
            </a>
          </div>
        </td>
        <td>
          <div className="media">
            <div className="media-body">
              <h4 className="text-primary">Marcus Aurellius</h4>
              <p className="text-default">I’m running late</p>
              <p className="email-summary">Hi Andrea, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore mag…</p>
              <span className="media-meta">Jul 02</span>
              <span className="media-attach">
                <i className="fa fa-paperclip" />
                <i className="fa fa-share" />
              </span>
            </div>
          </div>
        </td>
      </tr>      
    );
  }
}

export default connect()(MessageItem);