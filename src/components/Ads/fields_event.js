import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class FieldsEvent extends Component {
  render(props) {
    return (
      <div>
        <div className="row m-t-45">
          <div className="col-md-6">
            <label>{this.props.translate("ads.form.ad_content")}*</label>
            <input type="text" className="form-control" placeholder={this.props.translate("ads.form.advertisement_title")} />
          </div>
        </div>
        <div className="row m-t-15">
          <div className="col-md-6">            
            <input type="text" className="form-control" placeholder={this.props.translate("ads.form.place")} />            
          </div>
        </div>

        <div className="row m-t-15">
          <div className="col-md-6">                                
            <input type="text" className="form-control" placeholder={this.props.translate("ads.form.type_of_item")} />
          </div>
        </div>
						
        <div className="row m-t-15">
          <div className="col-md-6">
            <input type="text" className="form-control form-control-half" placeholder={this.props.translate('ads.form.price')} />
            <span>SEK</span>
          </div>
          <div className="col-md-12 m-t-25">
            <input type="radio" /> <span> {this.props.translate('ads.form.free')}</span>                      
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

export default connect(mapStateToProps)(FieldsEvent);
