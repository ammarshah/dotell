import React, {Component} from 'react';

import clock from '../../images/clock.png';
import tick from '../../images/fill-1@3x_3.png';
import tool_tip from '../../images/fill-1@3x _3.png';
import map_point from '../../images/group-6@3x.png';
import sex from '../../images/k-nsymbol@3x.png';
import schedule from '../../images/page-1@3x_2.png';
import videocam from '../../images/videocam-copy@3x.png';

class BookingFilter extends Component {
    render() {
        return (
            <section className="booking-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 pd-sm">
                            <div className="select-holder">
                                <select>
                                    <option className="">Symptom</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2 pd-sm">
                            <div className="select-holder">
                                <select>
                                    <option className="">Plats</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <ul className="booking-nav">
                                <li>
                                    <a className="active-link" href="">
                                        <img width="16" src={clock} alt=""/>
                                        Idag
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img width="16" src={clock} alt=""/>
                                        Inom 2 veckor
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img width="16" src={schedule} alt=""/>
                                        När som helst
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img width="16" src={sex} alt=""/>
                                        Män & Kvinnor
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img width="16" src={tick} alt=""/>
                                        Svensktalande
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img width="16" src={map_point} alt=""/>
                                        Landstingsavtal
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img width="16" src={videocam} alt=""/>
                                        Videomöten
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img width="16" src={tool_tip} alt=""/>
                                        Prova-på möten
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BookingFilter
