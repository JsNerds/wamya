import React, { Component, useEffect } from "react";
import CustomNavbar from "../../components/front/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import { Link, NavLink } from "react-router-dom";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import Featuresitems from "../../componentsFront/Features/Featuresitems";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../componentsFront/ScrollToTop";

class flex_join extends Component {
  render() {
    var { hbtnClass } = this.props;
    return (
      <div className="body_wrapper">
        <CustomNavbar
          slogo="sticky_logo"
          mClass="menu_four"
          nClass="w_menu ml-auto mr-auto"
        />
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName="breadcrumb/ban2.png"
          Ptitle="Start driving and
earning today"
          Pdescription="Making quicker progress towards your goals starts with rolling as a wamya driver. "
        />
        <section className="process_area bg_color sec_pad">
          <div className="container">
            <div className="features_info">
              <h2>Ready to drive with Wamya Flex? </h2>
              <h3>This is what you need to get started.</h3>
              <img
                className="dot_img"
                src={require("../../img/home4/divider.png")}
                alt=""
              />

              <Featuresitems
                rowClass="row flex-row-reverse"
                aClass="pr_70 pl_70"
                fimage="j1.png"
                iImg="icon01.png"
                ftitle="
Live in an area where Wamya Flex operates."
                descriptions="Find a list of cities with delivery opportunities."
              />

              <Featuresitems
                rowClass="row"
                aClass="pl_100"
                fimage="j2.png"
                iImg="icon02.png"
                ftitle="Be 18 or older.
"
                descriptions=""
              />
              <Featuresitems
                rowClass="row flex-row-reverse"
                aClass="pr_70 pl_70"
                fimage="j8.jpg"
                iImg="icon3.png"
                ftitle="Have a valid Tunisian driver’s licence and be entitled to work in Tunisia."
                descriptions=""
              />
              <Featuresitems
                rowClass="row"
                aClass="pl_100"
                fimage="j4.png"
                iImg="icon_04.png"
                ftitle="Have a mid-size or larger vehicle."
                descriptions="Most deliveries require a 4-door, mid-size sedan or larger vehicle (like an SUV, van or truck with a covered bed)."
              />
              <Featuresitems
                rowClass="row flex-row-reverse"
                aClass="pr_70 pl_70"
                fimage="j5.png"
                iImg="icon_05.png"
                ftitle="Have an iPhone or Android smartphone."
                descriptions=""
              />
              <Featuresitems
                rowClass="row"
                aClass="pl_100"
                fimage="j7.png"
                iImg="done.png"
                ftitle="Pass a background check."
                descriptions="You will need to be entitled to work in Tunisia and pass a background and criminal record check which includes, but is not limited to, a review of driving licence records."
              />
              <Link
                to="/P_deliveryform"
                className={`btn_get btn_hover ${hbtnClass}`}
                href="#get-app"
                style={{ float: "right" }}
              >
                Join the program
              </Link>

              <div className="dot middle_dot">
                <span className="dot1"></span>
                <span className="dot2"></span>
              </div>
            </div>
          </div>
        </section>
        <FooterTwo FooterData={FooterData} />
      </div>
    );
  }
}
export default flex_join;
