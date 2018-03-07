import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

class Filters extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Alla annonser</h1>
          </div>
          {/* /.col-lg-12 */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-md-3 col-xs-12 re-section">
            <input type="text" className="form-control" />
            <button className="search-holder"><i className="fa fa-search" /></button>
          </div>
          <div className="col-md-2 col-xs-12">
            <div className="select-holder">
              <select className="form-control">
                <option>Kategorier</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-xs-12">
            <div className="select-holder">
              <select className="form-control">
                <option>plats</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 col-xs-12">
            <div className="select-holder">
              <select className="form-control">
                <option>Sortera efter</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 col-xs-12">
            <div className="row">
              <div className="col-md-6 pull-right">
                <button className="btn btn-primary"><i className="fa fa-search" /></button>
              </div>
              <div className="col-md-6 m-t-6">
                <input type="radio" name="radio" defaultValue="Finnes" /> <span>Finnes</span>
              </div>
              <div className="col-md-6">
                <input type="radio" name="radio" defaultValue="Sökes" /> <span>Sökes</span>        
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
export default connect(mapStateToProps)(Filters);