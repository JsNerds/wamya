import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import Featuresitems from "../../componentsFront/Features/Featuresitems";
import FeaturesitemsFront from "../../components/front/FeaturesitemsCustomer";

const CustomerServiceDetails = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Customer Service Details" Pdescription="Detailed steps to join the customer's service and use it correctly "/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../../img/home4/divider.png')} alt=""/>
                        <FeaturesitemsFront rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="CustomerRegister.jpg" iImg="icon01.png" ftitle="Sign Up as a Customer" descriptions="Create your own account , put your informations fields respect the conditions finally read and accept terms"/>
                        <FeaturesitemsFront rowClass="row" aClass="pl_100" fimage="SingIn.png" iImg="icon02.png" ftitle="Sign In as a Customer" descriptions="There are different ways to sign in as customer the first one is with your username or email and password the second one with facebook or google  accounts the last one with face recognition"/>
                        <FeaturesitemsFront rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="UserInterface.png" iImg="icon3.png" ftitle="Customer interface"
                                       descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <FeaturesitemsFront rowClass="row" aClass="pl_100" fimage="SendPackage.jpg" iImg="icon_04.png" ftitle="Send Package"
                                       descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <FeaturesitemsFront rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="CustomerSendPackage.jpg" iImg="icon_05.png" ftitle="With efficiency to unlock more opportunities"
                                       descriptions="Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!"/>
                        <div className="dot middle_dot"><span className="dot1"></span><span className="dot2"></span></div>
                    </div>
                </div>
            </section>

            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default CustomerServiceDetails;