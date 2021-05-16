import React, { Component } from "react";
import Slider from "react-slick";
class AgencyAbout extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let ServiceData = this.props.ServiceData;
    return (
      <section className="agency_about_area d-flex bg_color">
        <div className="col-lg-6 about_content_left ">
          <div className="about_content mb_30">
            <h2 className="f_size_30 f_700 l_height45 mb_20">
              With wamya delivery we are always on time.
            </h2>
            <p className="f_size_15 f_400 mb_40">
              with the latest technologies we provide you the best delivery
              experince , with our trusted deliverymen you package at your
              doorstep faster than you know{" "}
            </p>
          </div>
        </div>
        <div className="col-lg-6 about_img">
          <a href=".#" className="pluse_icon">
            <i className="ti-plus"></i>
          </a>
          <Slider className="about_img_slider" {...settings}>
            <div className="item">
              <div className="about_item w45">
                <img src={require("../../img/home4/l0.png")} alt="" />
                <div className="about_text">
                  <span className="br"></span>
                  <h5 className="f_size_18 l_height28 mb-0">
                    A warehouse equiped with best specialists to manage your
                    deliveries and assign them to their final destination
                  </h5>
                </div>
              </div>
              <div className="about_item w55">
                <img src={require("../../img/home4/l1.png")} alt="" />
                <div className="about_text text_two">
                  <span className="br"></span>
                  <h5 className="f_size_18 l_height28 mb-0">
                    you can check yhe status of your package online !
                  </h5>
                </div>
              </div>
              <div className="about_item w55">
                <img src={require("../../img/home4/l2.png")} alt="" />
                <div className="about_text text_two">
                  <span className="br"></span>
                  <h5 className="f_size_18 l_height28 mb-0">
                    A very easy to use and a flexible way to use the application{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="about_item w45">
                <img src={require("../../img/home4/team1.jpg")} alt="" />
                <div className="about_text">
                  <span className="br"></span>
                  <h5 className="f_size_18 l_height28 mb-0">
                    you can check your deliverys at home via our Dashboard
                  </h5>
                </div>
              </div>
              <div className="about_item w55">
                <img src={require("../../img/home4/l3.jpg")} alt="" />
                <div className="about_text text_two">
                  <span className="br"></span>
                  <h5 className="f_size_18 l_height28 mb-0">
                    with the most qualified people you will get your package
                    before you know it{" "}
                  </h5>
                </div>
              </div>
              <div className="about_item w55">
                <img src={require("../../img/home4/l4.png")} alt="" />
                <div className="about_text text_two">
                  <span className="br"></span>
                  <h5 className="f_size_18 l_height28 mb-0">Begin now !</h5>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
export default AgencyAbout;
