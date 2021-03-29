import React from 'react';
import Reveal from "react-reveal/Reveal";


const CustomerSignUpForm =()=>{
    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <Reveal effect="fadeInRight" duration={800}>
                                <div className="payment_featured_img img_two">
                                    <img src={require('../../img/home9/featured_img_two.png')} alt="" width="466" height="1200"/>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Checkout</h2>
                                <form action="#" className="login-form sign-in-form">

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Username</label>
                                        <input type="text" placeholder="Name"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" name="email" id="email" placeholder="saasland@gmail.com"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Card Type</label>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Visa
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Master Card
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Edinar
                                                </label>
                                        </div>


                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Name On Card</label>
                                        <input type="text" placeholder="Name"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Credit Card Number </label>
                                        <input type="number" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Security Code</label>
                                        <input type="password" placeholder="******"/>
                                    </div>


                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Expiration Date</label>
                                        <input type="date" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                                    </div>


                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> I agree to terms and conditions of this website
                                            </label>
                                        </div>

                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three">Sign Up</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CustomerSignUpForm;