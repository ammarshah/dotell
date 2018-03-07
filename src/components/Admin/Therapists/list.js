import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class List extends Component {
  render(props) {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID </th>
              <th>{this.props.translate("admin.sender")}</th>
              <th>{this.props.translate("admin.phone_num")}</th>
              <th>Email</th>
              <th>{this.props.translate("admin.pwd")}</th>
              <th>{this.props.translate("admin.edit")}</th>
              <th>{this.props.translate("admin.delete")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>03256589345</td>
              <td>john@example.com</td>
              <td>Attribes</td>
              <td><a href="#">Edit</a></td>
              <td><a href="#">Delete</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>John Doe</td>
              <td>03256589345</td>
              <td>john@example.com</td>
              <td>Attribes</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>John Doe</td>
              <td>03256589345</td>
              <td>john@example.com</td>
              <td>Attribes</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(List);