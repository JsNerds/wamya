import React, { Component } from "react";
import Slider from "react-slick";
import Sectitle from "../../componentsFront/Title/Sectitle";
import { PromoSection } from "../../layout-componentsBack";

export default function PackageSlider(props) {
  console.log(props.deliveries);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <section className="prototype_service_area_two">
      <div className="container custom_container">
        <Sectitle
          Title="My Packages "
          TitleP="WShow off show off pick your nose and blow off Elizabeth grub haggle dropped a clanger cracking.!"
          tClass="t_color3"
          sClass="sec_title text-center mb_70"
        />
        <div className="container">
          <Slider className="service_carousel" {...settings}>
            {props.packagesList?.map((deliv, index) => {
             return deliv.package?.map((pack,i)  => {
                return(
                  <div key={deliv._id} className="service_item">
                  <div className="icon s_icon_one">
                    <i className="ti-check"></i>
                  </div>
                  <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">
                    
                    <br /> 
                  </h4>
                  <p>
                    {pack.note}
                  </p>
                  <img
                    className="float-right"
                    src={require("../../img/home2/undraw.png")}
                    alt=""
                  />
                  <button className="btn_get btn_hover">Check State</button>
                </div>
                )
              })
              })}     
          </Slider>
        </div>
      </div>
    </section>
  );
}
