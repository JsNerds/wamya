import React, {Component} from 'react';
import Slider from 'react-slick'

class Pserviceslider extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '100px',
            responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '100px',
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    centerPadding: '0px',
                  }
                }
              ]
        };
        return(
            <Slider className="service_carousel" {...settings}>
                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Activation <br/> Account<br/> Mail Receive</h4>
                    <p>you'll receive an email with activation link</p>
                    <img className="float-right" src={require('../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-mobile"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">SMS <br/> Notifications</h4>
                    <p>you'll receive an SMS notifications include estimated arrive time of your delivery</p>
                    <img className="float-right" src={require('../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-money"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Payments <br/> Mails<br/> Receive</h4>
                    <p>you'll receive an email with detailed informations of each payment</p>
                    <img className="float-right" src={require('../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">User<br/> Interface</h4>
                    <p>you can find analytics and other informations here</p>
                    <img className="float-right" src={require('../../img/home2/report.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-face-smile"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">wheel of <br/> prizes</h4>
                    <p>earn prizes as soon as you reach your milestones goals</p>
                    <img className="float-right" src={require('../../img/home2/Roue.png')}  width={100} height={200} alt=""/>
                </div>




                <div className="service_item">
                    <div className="icon s_icon_one"><i className="ti-check"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Activation <br/> Account<br/> Mail Receive</h4>
                    <p>you'll receive an email with activation link</p>
                    <img className="float-right" src={require('../../img/home2/undraw.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_two"><i className="ti-mobile"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">SMS <br/> Notifications</h4>
                    <p>you'll receive an SMS notifications include estimated arrive time of your delivery</p>
                    <img className="float-right" src={require('../../img/home2/inbox.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_three"><i className="ti-money"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">Payments <br/> Mails<br/> Receive</h4>
                    <p>you'll receive an email with detailed informations of each payment</p>
                    <img className="float-right" src={require('../../img/home2/file.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon s_icon_four"><i className="ti-stats-up"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">User<br/> Interface</h4>
                    <p>you can find analytics and other informations here</p>
                    <img className="float-right" src={require('../../img/home2/report.png')} alt=""/>
                </div>
                <div className="service_item">
                    <div className="icon f_social_icon_two"><i className="ti-face-smile"></i></div>
                    <h4 className="f_600 f_size_20 l_height28 t_color2 mb_20">wheel of <br/> prizes</h4>
                    <p>earn prizes as soon as you reach your milestones goals</p>
                    <img className="float-right" src={require('../../img/home2/Roue.png')}  width={100} height={200} alt=""/>
                </div>

            </Slider>
        )
    }
}
export default Pserviceslider;