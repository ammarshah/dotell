import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import TagsInput from 'react-tagsinput';
import Header from '../Header';
import Nav from './nav';
import FieldsJob from './fields_job';
import FieldsEvent from './fields_event';
import FieldsThing from './fields_thing';
import FieldsFacilities from './fields_facilities';

import 'react-tagsinput/react-tagsinput.css';
import './react-tagsinput.css';
import camera from '../../images/camera.png';


class CreateAd extends Component {
  
  state = {
    tags: [],
    category: 'job'
  };

  handleCategoryChange = (e) => {
    this.setState({category: e.target.value});
  };

  handleChange = (tags) => {
    this.setState({tags})
  };

  render(props) {
    return (
      <div>
        <Header />
        <div id="wrapper">
          {/* Navigation */}
          <Nav />
          
          <div id="page-wrapper">
            <div className="row">
              <div className="col-md-6 col-md-offset-1">
                <h1 className="page-header page-heading">{this.props.translate("ads.create_ad")}</h1>
              </div>
              {/* /.col-lg-12 */}
            </div>
            {/* /.row */}
            <div className="row">
              <div className="col-md-6 col-md-offset-1">
                <div className="row m-t-15">
                  <div className="col-md-6">
                    <label>{this.props.translate("ads.form.business")}*</label>
                    <input type="text" className="form-control" placeholder="Lokaler för psykologer AB" />
                  </div>
                  <div className="col-md-6 m-t-25">
                    <input type="text" className="form-control" placeholder="Lokaler@hotmail.com" />
                  </div>
                </div>
                <div className="row m-t-15">
                  <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="121212-5643" />
                  </div>
                  <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="070-1234565" />
                  </div>
                  <div className="col-md-4 m-t-5">
                    <input type="radio" /> <span> {this.props.translate("ads.form.hide_in_ad")} </span>
                  </div>
                </div>
                <div className="row m-t-45">
                  <div className="col-md-6">
                    <label>{this.props.translate("ads.form.geo_location")}*</label>
                    <div className="select-holder">
                      <select className="form-control">
                        <option>Län</option>
                        <option>Län</option>
                        <option>Län</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row m-t-15">
                  <div className="col-md-6">
                    <div className="select-holder">
                      <select className="form-control">
                        <option>Kommun</option>
                        <option>Kommun</option>
                        <option>Kommun</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <input type="text" className="form-control" placeholder="Postnummer" />
                  </div>
                </div>
                <div className="row m-t-45">
                  <div className="col-md-6">
                  {/* // Job, Event, things, facilities */}
                    <label>{this.props.translate("ads.form.category")}*</label>
                    <div className="select-holder">
                      <select className="form-control" onChange={this.handleCategoryChange}>
                        <option value="job">Job</option>
                        <option value="event">Event</option>
                        <option value="things">Things</option>
                        <option value="facilities">Facilities</option>
                      </select>
                    </div>                    
                  </div>
                  <div className="col-md-12 m-t-25">
                    <input type="radio" /> <span> Finnes (Jag har en ledig tjänst)</span>
                    <br />
                    <input type="radio" /> <span> Sökes (Jag söker en ledig tjänst)</span>
                  </div>
                  <div className="col-md-12 m-t-25">
                    { this.state.category === 'job' && <FieldsJob /> }
                    { this.state.category === 'event' && <FieldsEvent /> }
                    { this.state.category === 'things' && <FieldsThing /> }
                    { this.state.category === 'facilities' && <FieldsFacilities /> }
                  </div>
                </div>
                
                <div className="row m-t-45">
                  <div className="col-md-12">
                    <label>{this.props.translate("ads.form.ad_description")}</label>
                    <textarea className="form-control" defaultValue={this.props.translate("ads.form.print")} />
                  </div>
                </div>
                <div className="row m-t-45">
                  <div className="col-md-6">
                    <label>{this.props.translate("ads.form.keyword")}</label>
                    <TagsInput value={this.state.tags} onChange={this.handleChange} maxTags="4" />                    
                  </div>
                </div>
                
                <div className="row m-t-45">
                  <div className="col-md-12">
                    <label>{this.props.translate("ads.form.pictures")}</label>
                  </div>
                  <div className="col-md-4">
                    <form action="UploadImages" className="dropzone" id="DropZoneFiddle" encType="multipart/form-data">
                      <img src={camera} width={50} />
                    </form>
                    <p className="text-center"><a href="#!">Välj bild 1</a></p>
                  </div>
                  <div className="col-md-4">
                    <form action="UploadImages" className="dropzone" id="DropZoneFiddle1" encType="multipart/form-data">
                      <img src={camera} width={50} />
                    </form>
                    <p className="text-center"><a href="#!">Bild 2</a></p>
                  </div>
                  <div className="col-md-4">
                    <form action="UploadImages" className="dropzone" id="DropZoneFiddle2" encType="multipart/form-data">
                      <img src={camera} width={50} />
                    </form>
                    <p className="text-center"><a href="#!">Bild 3</a></p>
                  </div>
                </div>
                <div className="row m-t-45">
                  <div className="col-md-12">
                    <label>Godkänn villkor*</label>
                  </div>
                  <div className="col-md-12">
                    <input type="radio" /> <span>Jag godkänner användarvillkor ….</span>
                  </div>
                </div>
                <div className="row m-t-45 m-b-50">
                  <div className="col-md-5">
                    <button className="btn btn-block btn-outline">{this.props.translate("ads.form.preview_ad")}</button>
                  </div>
                  <div className="col-md-5">
                    <button className="btn btn-block btn-rd btn-primary"> {this.props.translate("ads.form.submit_ad")}!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /#page-wrapper */}
        </div>
        {/* /#wrapper */}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale)
  }
};
export default connect(mapStateToProps)(CreateAd);