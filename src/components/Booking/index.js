import React, {Component} from 'react';

import Header from '../Header';
import BookingFilter from './BookingFilter';
import Pagination from '../Pagination';

import icon from '../../images/icon@3x_3.png';
import bookmark from '../../images/bookmark-copy@3x.png';
import star from '../../images/icon-ios-star-filled-copy@3x.png';
import photo from '../../images/image-copy@3x.png';
import videocam from '../../images/videocam-copy@3x_2.png';

class Booking extends Component {
    render() {
        return (
          <div>
            <Header />
            <div id="wrapper">
                <BookingFilter/>
                <section className="booking-section">
                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-md-9 pd-sm">
                                {/*No results*/}
                                <div className="row bg-gray-booking">
                                    <div className="col-md-12 text-center">
                                        <p>Ingen perfekt matchning, men resultatet nedan går i linje med din sökning</p>
                                    </div>
                                </div>
                                {/*No results*/}

                                {/*Booking items*/}
                                <div className="row br-bt">
                                    <div className="col-md-12 text-right">
                                        <a href="">Visa alla tider</a>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src={photo} width="100%" alt=""/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4>
                                                            Johanna Andersson
                                                            <img width="20" src={videocam} alt=""/>
                                                        </h4>
                                                        <p><a href="">Legitimerad Psykoterapeut</a></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>Återbesök</p>
                                                        <p>Prova- på möte – Video </p>
                                                        <p>Första möte </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>50 min, 800 kr</p>
                                                        <p>15 min, 0 kr </p>
                                                        <p>30 min, 400 kr </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>
                                                            <span>
                                                                <img width="16" src={star} alt=""/>
                                                                Patientomdömmen
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            <span>
                                                                <img width="10" src={bookmark} alt=""/>
                                                                Rekommenderad av kollegor
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-2 ">
                                                <ul className="booking-list">
                                                    <li>Förmiddag</li>
                                                    <li>Eftermiddag</li>
                                                    <li>Kväll</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-10">
                                                <table className="table booking-table" width="100%">
                                                    <thead>
                                                    <tr>
                                                        <th>Idag</th>
                                                        <th>Imorgon</th>
                                                        <th>Fre 24 maj</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="full-row">
                                                    <tr>
                                                        <td>
                                                            <div className="table-content">
                                                                <button className="btn btn-success">
                                                                    <img width="20" src={icon} alt=""/>
                                                                    Skicka mötesförfrågan
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-pd br-bt">
                                    <div className="col-md-12 text-right">
                                        <a href="">Visa alla tider</a>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src={photo} alt="" width="100%"/>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4>
                                                            Johanna Andersson
                                                            <img width="20" src={videocam} alt=""/>
                                                        </h4>
                                                        <p><a href="">Legitimerad Psykoterapeut</a></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>Återbesök</p>
                                                        <p>Prova- på möte – Video </p>
                                                        <p>Första möte </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>50 min, 800 kr</p>
                                                        <p>15 min, 0 kr </p>
                                                        <p>30 min, 400 kr </p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <p>
                                                            <span>
                                                                <img width="16" src={star} alt=""/>
                                                                Patientomdömmen
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>
                                                            <span>
                                                                <img width="10" src={bookmark} alt=""/>
                                                                Rekommenderad av kollegor
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-2 ">
                                                <ul className="booking-list">
                                                    <li>Förmiddag</li>
                                                    <li>Eftermiddag</li>
                                                    <li>Kväll</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-10">
                                                <table className="table booking-table" width="100%">
                                                    <thead>
                                                    <tr>
                                                        <th>Idag</th>
                                                        <th>Imorgon</th>
                                                        <th>Fre 24 maj</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="half-row">
                                                    <tr>
                                                        <td>

                                                        </td>
                                                        <td>

                                                        </td>
                                                        <td>
                                                            <div className="active-td">
                                                                <span className="green-box-sm"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>

                                                        </td>
                                                        <td>
                                                            <div className="active-td">
                                                                <span className="green-box-sm"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="active-td">
                                                                <span className="green-box-sm"></span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="active-td">
                                                                <span className="green-box-sm"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="active-td">
                                                                <span className="green-box-sm"></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*Booking items*/}
                                <Pagination/>
                            </div>
                            <div className="col-md-3 pd-sm">
                                <iframe
                                    title="google_map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.320853601557!2d-99.1605578!3d19.4089399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb124499513a6deae!2sCine+Tonal%C3%A1!5e0!3m2!1sen!2s!4v1510669875736"
                                    width="100%" height="750" frameBorder="0" style={{border: "0"}} allowFullScreen={true}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>              
          </div>
        )
    }
}

export default Booking;
