import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class FieldsFacilities extends Component {
  render(props) {
    return (
      <div>
        <div className="row m-t-45">
          <div className="col-md-6">
            <label>{this.props.translate('ads.form.ad_content')}*</label>
            <input type="text" className="form-control" placeholder="Ljusa lokaler i kontorshotell – Centralt och härliga kollegor" />
          </div>
        </div>
        <div className="row m-t-15">
          <div className="col-md-6">
            <input type="text" className="form-control form-control-half" placeholder={1} />
            <span>{this.props.translate('ads.form.room')}</span>
          </div>
        </div>
        <div className="row m-t-15">
          <div className="col-md-6">
            <input type="text" className="form-control form-control-half" placeholder={30} />
            <span>{this.props.translate('ads.form.sq')}</span>
          </div>
        </div>
        <div className="row m-t-15">
          <div className="col-md-6">
            <input type="text" className="form-control form-control-half" placeholder={12000} />
            <span>kr/mån</span>
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

export default connect(mapStateToProps)(FieldsFacilities);
