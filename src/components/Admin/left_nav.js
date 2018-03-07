import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class LeftNav extends Component {
  render(props) {
    return (
      <div className="col-md-2 list-bg">
        <div className="list-group">
          <a href="#" className="list-group-item active">{this.props.translate("admin.nav.booking_list")}</a>
          <a href="#" className="list-group-item">{this.props.translate("admin.nav.incomplete_bookings")}</a>
          <a href="#" className="list-group-item">{this.props.translate("admin.nav.registered_therapist")}</a>
          <a href="#" className="list-group-item">{this.props.translate("admin.nav.registered_patients")}</a>
          <a href="#" className="list-group-item">{this.props.translate("admin.nav.registered_companies")}</a>
          <a href="#" className="list-group-item">{this.props.translate("admin.nav.edit_homepage")}</a>
          <a href="#" className="list-group-item">{this.props.translate("admin.nav.manage_users")}</a>
          <a href="#" className="list-group-item">{this.props.translate("admin.nav.economy")}</a>
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
export default connect(mapStateToProps)(LeftNav);