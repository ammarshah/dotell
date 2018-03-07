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
              <th>ID</th>
              <th>{this.props.translate("admin.therapist")}</th>
              <th>Status</th>
              <th>{this.props.translate("admin.inquiry")}</th>
              <th>{this.props.translate("admin.personal_id")}</th>
              <th>E-mail</th>
              <th>{this.props.translate("admin.city")}</th>
              <th>{this.props.translate("admin.regions")}</th>
              <th>{this.props.translate("admin.payment")}</th>
              <th>{this.props.translate("admin.payment_status")}</th>
              <th>{this.props.translate("admin.last_login")}</th>
              <th>{this.props.translate("admin.reservations")}</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>T1</td>
              <td>John Doe</td>
              <td>Ny</td>
              <td>2018-03-05</td>
              <td>871281-1511</td>
              <td>john.doe@example.com</td>
              <td>Stockholm</td>
              <td>Inget</td>
              <td>Credit Card</td>
              <td>Reserved</td>
              <td>2018-03-05 20:13</td>
              <td>14</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
            <tr>
              <td>T1</td>
              <td>John Doe</td>
              <td>Ny</td>
              <td>2018-03-05</td>
              <td>871281-1511</td>
              <td>john.doe@example.com</td>
              <td>Stockholm</td>
              <td>Inget</td>
              <td>Credit Card</td>
              <td>Reserved</td>
              <td>2018-03-05 20:13</td>
              <td>14</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
            <tr>
              <td>T1</td>
              <td>John Doe</td>
              <td>Ny</td>
              <td>2018-03-05</td>
              <td>871281-1511</td>
              <td>john.doe@example.com</td>
              <td>Stockholm</td>
              <td>Inget</td>
              <td>Credit Card</td>
              <td>Reserved</td>
              <td>2018-03-05 20:13</td>
              <td>14</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
            <tr>
              <td>T1</td>
              <td>John Doe</td>
              <td>Ny</td>
              <td>2018-03-05</td>
              <td>871281-1511</td>
              <td>john.doe@example.com</td>
              <td>Stockholm</td>
              <td>Inget</td>
              <td>Credit Card</td>
              <td>Reserved</td>
              <td>2018-03-05 20:13</td>
              <td>14</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
            <tr>
              <td>T1</td>
              <td>John Doe</td>
              <td>Ny</td>
              <td>2018-03-05</td>
              <td>871281-1511</td>
              <td>john.doe@example.com</td>
              <td>Stockholm</td>
              <td>Inget</td>
              <td>Credit Card</td>
              <td>Sent</td>
              <td>2018-03-05 20:13</td>
              <td>14</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
            <tr>
              <td>T1</td>
              <td>John Doe</td>
              <td>Ny</td>
              <td>2018-03-05</td>
              <td>871281-1511</td>
              <td>john.doe@example.com</td>
              <td>Stockholm</td>
              <td>Inget</td>
              <td>Credit Card</td>
              <td>Paid</td>
              <td>2018-03-05 20:13</td>
              <td>14</td>
              <td><a href="#"><span className="glyphicon glyphicon-pencil dotell-icon" /></a></td>
              <td><a href="#"><span className="glyphicon glyphicon-trash dotell-icon" /></a></td>
            </tr>
            <tr>
              <td>T1</td>
              <td>John Doe</td>
              <td>Ny</td>
              <td>2018-03-05</td>
              <td>871281-1511</td>
              <td>john.doe@example.com</td>
              <td>Stockholm</td>
              <td>Inget</td>
              <td>Credit Card</td>
              <td>Created</td>
              <td>2018-03-05 20:13</td>
              <td>14</td>
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