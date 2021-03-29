import React from 'react';



const EntrepriseSignUpForm =()=>{



    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting using our <br/><span className="f_700">amazing</span> services</h2>
                                <ul className="list-unstyled mb-0">
                                    <li><i className="ti-check"></i> Track your package</li>
                                    <li><i className="ti-check"></i> Notification of delivery time </li>
                                    <li><i className="ti-check"></i> Checking for the most qualified driver for the job.</li>
                                </ul>
                                <button type="submit" className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                <form action="#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> Responsible (CIN)</label>
                                        <input type="number" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Responsible First Name</label>
                                        <input type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Responsible Last Name</label>
                                        <input type="text" placeholder="First Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> Creation Date</label>
                                        <input type="date" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Activity</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Headquarters Address</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Register Status</label>
                                        <input type="text" />
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Regional Office</label>
                                        <input type="text" />
                                    </div>        <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Tax Situation</label>
                                        <input type="text" />
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
export default EntrepriseSignUpForm;