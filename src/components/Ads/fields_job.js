import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class FieldsJob extends Component {
  render(props) {
    return (
      <div>
        <div className="row m-t-45">
          <div className="col-md-6">
            <label>{this.props.translate("ads.form.ad_content")}*</label>
            <input type="text" className="form-control" placeholder="Annonsrubrik" />
          </div>
        </div>
        <div className="row m-t-15">
          <div className="col-md-6">
            <div className="select-holder">
              <select className="form-control">
                <option>Anställningsform</option>
                <option>Anställningsform</option>
                <option>Anställningsform</option>
              </select>
            </div>
          </div>
        </div>        

        <div className="row m-t-15">
          <div className="col-md-6">
            <div className="select-holder">
              <select className="form-control">
                <option>Inriktning</option>
                <option>Inriktning</option>
                <option>Inriktning</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="row m-t-15">
          <div className="col-md-6">
            <div className="select-holder">
              <select className="form-control">
                <option>Omfattning</option>
                <option>Omfattning</option>
                <option>Omfattning</option>
              </select>
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

export default connect(mapStateToProps)(FieldsJob);
