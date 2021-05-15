import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import FeaturesitemsFront from "../../components/front/Featuresitems";

const CustomerServiceDetails = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Customer Service Details" Pdescription="Detailed steps to join the customer's service and use it correctly "/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../../img/home4/divider.png')} alt=""/>
                        <FeaturesitemsFront role="Customer" rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="CustomerRegister.jpg" iImg="icon01.png" ftitle="Sign Up as a Customer"
                                            descriptions="Create your own account , put your informations fields respect the conditions finally read and accept terms"/>
                        <FeaturesitemsFront role="Customer" rowClass="row" aClass="pl_100" fimage="SingIn.png" iImg="icon02.png" ftitle="Sign In as a Customer"
                                            descriptions="There are different ways to sign in as customer the first one is with your username or email and password the second one with facebook or google  accounts the last one with face recognition"/>
                        <FeaturesitemsFront role="Customer" rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="UserInterface.png" iImg="icon3.png" ftitle="Customer interface"
                                            descriptions="the customer interface is rich with advanced features and analytics , you can consult your payments your packages , edit your profile , change password , disable your account and finally send your package and track it in real time "/>
                        <FeaturesitemsFront role="Customer" rowClass="row" aClass="pl_100" fimage="SendPackage.jpg" iImg="icon_04.png" ftitle="Send Package"
                                            descriptions="You can send your package via your own interface or the button in home page  , next choose the driver and wait for him  to confirm the job , confirm that you give the package to the driver finish the payment process you'll receine and Email with detailed informations of payment and SMS notification with the estimated arrived time "/>
                        <FeaturesitemsFront role="Customer" rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="CustomerSendPackage.jpg" iImg="icon_05.png" ftitle="Receive Package"
                                            descriptions="you can track your package while his on the way and when the is arrived to his destination , the receiver will confirm that with his signature and you can verified is by consulting your finished deliveries"/>
                    </div>
                </div>
            </section>

            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default CustomerServiceDetails;