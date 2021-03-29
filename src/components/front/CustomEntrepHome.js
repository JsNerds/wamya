import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

class CustomerEntrepriseHome extends Component {
    render(){
        return(
            <section className="payment_features_area">
                <div className="bg_shape shape_one"></div>
                <div className="bg_shape shape_two"></div>
                <div className="bg_shape shape_three"></div>
                <div className="container">
                    <div className="row featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInLeft">
                                <div className="payment_featured_img">
                                    <img src={require ('../../img/home9/featured_img.png')} alt=""/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_features_content pl_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../../img/home9/icon_shape.png')} alt=""/>
                                        <img className="icon_img" src={require('../../img/home9/icon2.png')} alt=""/>

                                    </div>
                                    <h2>For Entreprises</h2>
                                    <p>with this feature you can track the state or the real time location of your package at anytime you want</p>
                                    <a href=".#" className="btn_hover agency_banner_btn pay_btn">Join the service</a>
                                    <Link to="/Service" className="btn_hover agency_banner_btn pay_btn pay_btn_two">Service Details</Link>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="row flex-row-reverse featured_item">
                        <div className="col-lg-6">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_featured_img img_two">
                                    <img src={require('../../img/CustomersService.jpg')} width="750" height="650"/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Reveal effect="fadeInLeft" duration={1200}>
                                <div className="payment_features_content pr_70">
                                    <div className="icon">
                                        <img className="img_shape" src={require('../../img/home9/icon_shape.png')} alt=""/>
                                        <img className="icon_img" src={require('../../img/home9/icon2.png')} alt=""/>

                                    </div>
                                    <h2>For Customers</h2>
                                    <p>you have the option to pay online or on site when the package arrives to your door step</p>
                                    <a href=".#" className="btn_hover agency_banner_btn pay_btn">Join the service</a>
                                    <a href=".#" className="btn_hover agency_banner_btn pay_btn pay_btn_two">Service Details</a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default CustomerEntrepriseHome;




