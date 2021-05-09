import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import FooterThree from '../../componentsFront/Footer/FooterThree';
import FooterData from '../../componentsFront/Footer/FooterData';
import HomeBanner from "../../components/front/HomeBanner";
import CustomEntrepHome from "../../components/front/CustomEntrepHome";

const Home = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu"/>
            <HomeBanner/>
            <CustomEntrepHome/>
            <FooterThree FooterData={FooterData}/>
        </div>
    )
}
export default Home;