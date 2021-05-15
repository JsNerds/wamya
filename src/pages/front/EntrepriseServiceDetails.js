import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../componentsFront/Breadcrumb';
import ServiceDetails from '../../componentsFront/Service/ServiceDetails';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../componentsFront/Footer/FooterData';
import FeaturesitemsFront from "../../components/front/Featuresitems";

const EntrepriseServiceDetails = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Company Service Details" Pdescription="Detailed steps to join the ccopmany's service and use it correctly "/>
            <section className="process_area bg_color sec_pad">
                <div className="container">
                    <div className="features_info">
                        <img className="dot_img" src={require ('../../img/home4/divider.png')} alt=""/>
                        <FeaturesitemsFront role="Company" rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="SignUpCompany.jpg" iImg="icon01.png" ftitle="Sign Up as a Company"
                                            descriptions="Create your own account , put your informations fields respect the conditions finally read and accept terms you need to subscribe and activate your account you'll receive an Email of the payment of you subscription"/>
                        <FeaturesitemsFront role="Company" rowClass="row" aClass="pl_100" fimage="SingInCompany.jpg" iImg="icon02.png" ftitle="Sign In as a Company"
                                            descriptions="There are different ways to sign in as customer the first one is with your username or email and password the second one with facebook or google  accounts"/>
                        <FeaturesitemsFront role="Company" rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="CompanyInterface.jpg" iImg="icon3.png" ftitle="Company interface"
                                            descriptions="the company interface is rich with advanced features and analytics , you can consult your payments your packages , edit your profile , change password , disable your account and finally send your package and track it in real time "/>
                        <FeaturesitemsFront role="Company" rowClass="row" aClass="pl_100" fimage="SendPackages.jpg" iImg="icon_04.png" ftitle="Send Packages"
                                            descriptions="You can send your packages via your own interface or the button in homepage then we'll organize the process of sending your packages with your drivers and our vehicles , you don't to pay if you are subscribed "/>
                        <FeaturesitemsFront role="Company" rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="trackPackage.jpg" iImg="icon_05.png" ftitle="Track your Packages"
                                            descriptions="you can track your package while his on the way and when the is arrived to his destination , the receiver will confirm that with his signature and you can verified is by consulting your finished deliveries"/>
                    </div>
                </div>
            </section>

            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default EntrepriseServiceDetails;