import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";
class PaymentBanner extends Component {
  render() {
   let id =  localStorage.getItem('id')
    return (
      <section className="payment_banner_area">
        <div className="shape one"></div>
        <div className="shape two"></div>
        <div className="container">
          <Reveal effect="fadeInLeft" duration={500}>
            <div
              className="payment_banner_content wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <h1 className="f_p f_700 f_size_50 w_color">Welcome Wamya ! </h1>
              <p className="w_color f_p f_size_18">
                Do you need to send a package ?, Do you need to track the state
                of your package ? you are in the right place !{" "}
              </p>
              <div className="action_btn d-flex align-items-center mt_60">
                <Link to={id ? "/CustomerInterface" : "/SignInWamya"} className="btn_hover agency_banner_btn">
                  Send package
                </Link>
                <Link to="/Service" className="agency_banner_btn_two">
                  Find Out More<i className="ti-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal effect="fadeInLeft" duration={1200}>
          <div
            className="animation_img_two wow fadeInRight"
            data-wow-delay="0.5s"
          >    <img src={require("../../assets/images/WamyaHome2.png")} alt="" width={600} height={500} />

          </div>
        </Reveal>
        <img
          className="svg_intro_bottom"
          src={require("../../img/home9/shape.png")}
          alt=""
        />
      </section>
    );
  }
}
export default PaymentBanner;
