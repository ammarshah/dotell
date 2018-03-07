import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

import sliderImage from '../../images/group-2@3x.png';
 
class Slider extends React.Component {
    state = {
    }
    
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }    
    
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">            
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}                
                ref={r=>this.slider=r}
                className=""
              >
                <div style={{height:400}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src={sliderImage}
                  />
                  <div className="carousel-caption">
                    Image
                  </div>
                </div>
                
                <div style={{height:400}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src={sliderImage}
                  />
                  <div className="carousel-caption">
                    Image
                  </div>
                </div>
                
                <div style={{height:400,width:"100%",backgroundColor:"lightblue"}}>
                  <span>
                    text
                  </span>
                  <div className="carousel-caption">
                    Text
                  </div>
                </div>
                <div style={{height:400}}>
                  <img
                    style={{width:"100%",height:"100%"}}
                    src={sliderImage}
                  />
                  <div className="carousel-caption">
                    Image
                  </div>
                </div>
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
};

export default Slider;