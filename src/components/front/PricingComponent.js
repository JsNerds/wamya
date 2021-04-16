import React from "react";
import {queryServerApi} from "../../utils/queryServerApi";
import {useHistory} from "react-router";
import {Button} from "@material-ui/core";


const PricingComponent = (props) => {
    const id=props.id;
    const history =useHistory();

    const updateSubscription = async (incrementDay,incrementMonth, IncrementYear,amount) => {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var newSubscriptionExpirationDate = new Date(year + IncrementYear, month + incrementMonth, day + incrementDay);
        const [,err] = await queryServerApi("entreprises/UpdateSubscription/" +id, {SubscriptionExpirationDate:newSubscriptionExpirationDate},"PUT",false);
        if(err){
                console.log(err);
        }
        else history.push("/Payment/"+amount)
    }


    return (
        <section className="event_price_area sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2>
                        <span>Choose your subscription type </span> To join our program
                    </h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="analytices_price_item event_price_item wow fadeInUp">
                            <div className="p_head">
                                <h5>One Month Pass</h5>
                                <div className="rate">700 DT</div>
                            </div>
                            <ul className="list-unstyled p_body">
                                <li>
                                    One month and 10 days Bonus <i className="ti-check"></i>
                                </li>
                                <li>
                                    Unlimited sending packages <i className="ti-check"></i>
                                </li>
                                <li>
                                   Track you Packages <i className="ti-close"></i>
                                </li>
                                <li>
                                    Unlimited drivers <i className="ti-close"></i>
                                </li>
                                <li>
                                    Advanced statistics <i className="ti-close"></i>
                                </li>
                            </ul>
                            <div className="text-center">
                                <a  className="btn_hover agency_banner_btn pay_btn pay_btn_two"
                                         onClick={()=>updateSubscription(10,1,0,700*100)}
                                >
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div
                            className="analytices_price_item event_price_item active wow fadeInUp"
                            data-wow-delay="0.2s"
                        >
                            <div className="p_head">
                                <h5>WAMYA</h5>
                                <h6 className="tag">
                                    <i className="icon_ribbon_alt"></i>Most popular
                                </h6>
                                <div className="rate">999 DT</div>
                            </div>
                            <ul className="list-unstyled p_body">
                                <li>
                                    One year and 2 months Bonus <i className="ti-check"></i>
                                </li>
                                <li>
                                    Unlimited sending packages <i className="ti-check"></i>
                                </li>
                                <li>
                                    Track you Packages <i className="ti-check"></i>
                                </li>
                                <li>
                                    Unlimited drivers <i className="ti-close"></i>
                                </li>
                                <li>
                                    Advanced statistics <i className="ti-close"></i>
                                </li>
                            </ul>
                            <div className="text-center">
                                <a  className="btn_hover agency_banner_btn pay_btn pay_btn_two"
                                    onClick={()=>updateSubscription(0,2,1,999*100)}
                                >
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div
                            className="analytices_price_item event_price_item wow fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <div className="p_head">
                                <h5>WAMYA DELUXE</h5>
                                <div className="rate">1300 DT</div>
                            </div>
                            <ul className="list-unstyled p_body">
                                <li>
                                    Two yeasr 3 months , and 15 days  Bonus <i className="ti-check"></i>
                                </li>
                                <li>
                                    Unlimited sending packages <i className="ti-check"></i>
                                </li>
                                <li>
                                    Track you Packages <i className="ti-check"></i>
                                </li>
                                <li>
                                    Unlimited drivers <i className="ti-check"></i>
                                </li>
                                <li>
                                    Advanced statistics <i className="ti-check"></i>
                                </li>
                            </ul>
                            <div className="text-center">
                                <a  className="btn_hover agency_banner_btn pay_btn pay_btn_two"
                                    onClick={()=>updateSubscription(15,3,2,1300*100)}
                                >
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PricingComponent;
