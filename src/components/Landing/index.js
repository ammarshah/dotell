import React, { Component } from "react";
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import shape from '../../images/shape@3x.png';
import arrows from '../../images/fill-1@3x_2.png';
import schedule from '../../images/fill-1@3x.png';

class Landing extends Component {
  render(props) {
    return (
      <div id="wrapper">
        <section className="home-header">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="row">
                  <div className="col-md-12">                    
                    <h1>Hitta en <strong>behandlare</strong> <br /> som passar just dig. </h1>
                    <p>Sök, jämför och boka de bästa legitimerade psykologerna och psykoterapeuterna i Sverige.</p>
                  </div>
                </div>
                <div className="row bg-home">
                  <div className="col-md-5">
                    <div className="select-holder">
                      <select className="">
                        <option> Symptom, behandling, specialist</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="select-holder">
                      <select className=" ">
                        <option> Symptom, behandling, specialist</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-block btn-primary br-btn">Sök</button>
                  </div>
                </div>
                <div className="row m-t-25">
                  <div className="col-md-3 col-md-offset-2">
                    <button className="btn btn-bubble">
                      Varför går man i terapi?
                                        </button>
                  </div>
                  <div className="col-md-3 ">
                    <button className="btn btn-bubble btn-bubble-white">
                      vad-kostar-det
                                        </button>
                  </div>
                </div>
                <div className="row m-t-25">
                  <div className="col-md-2 col-md-offset-1">
                    <button className="btn btn-bubble btn-bubble-white">
                      hur-g-r-terapi-till
                                        </button>
                  </div>
                  <div className="col-md-3 ">
                    <button className="btn btn-bubble ">
                      Vilken terapi ska jag välja?
                                        </button>
                  </div>
                  <div className="col-md-6">
                    <p className="head-desc m-0"><a href="">Gör testet </a> och se vilken behandling som passar dig bäst</p>
                  </div>
                </div>
                <div className="row m-t-5">
                  <div className="col-md-3 col-md-offset-2">
                    <button className="btn btn-bubble btn-bubble-white">
                      Vad kan jag förvänta mig?
                                        </button>
                  </div>
                  <div className="col-md-3 ">
                    <button className="btn btn-bubble ">
                      Kan man få remiss?
                                        </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Så fungerar det!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-md-offset- text-center">
                <div className="home-col">
                  <img alt="" src={shape} width="60" />
                  <h4>Sök</h4>
                  <p>Sök och filtrera för att enkelt hitta rätt terapeut i djungeln av alternativ. Annars kan du göra vårt
                      test och få förslag
                      på terapeuter som passar dina behov.
                                    </p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="home-col">
                  <img alt="" src={arrows} width="60" />
                  <h4>Jämför</h4>
                  <p>Jämför terapeuter utifrån patientomdömmen, behandlingstyp, pris, lediga tider, plats eller tillgång
                      till videomöten. På så
                      vis kan du hitta den bästa terapeuten för just dig.
                                    </p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="home-col">
                  <img alt="" src={schedule} width="60" />
                  <h4>Boka</h4>
                  <p>Det tar mindre än en minut att boka eller skicka en förfrågan till den terapeut som passar dig bäst.
                      Vi önskar dig stort lycka till!
                                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bottom-section">
          <div className="container-fluid">
            <div className="col-md-6">
              <h1>”Terapi har hjälpt mig att <br /> förhålla mig till min familj.”</h1>
              <p>Ellinore, 35 år</p>
            </div>
            <div className="col-md-6">
              <h1>”Att börja i parterapi är det <br /> bästa vi gjort”</h1>
              <p>Anders, 57 år</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
  }
};

export default connect(mapStateToProps)(Landing);
