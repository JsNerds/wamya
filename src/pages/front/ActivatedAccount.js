import React from 'react';
import CustomNavbar from '../../components/front/CustomNavbar';
import Breadcrumb from '../../components/front/Breadcrumb';
import FooterTwo from '../../components/front/FooterTwo';
import FooterData from '../../components/front/FooterData';
import MuiAlert from "@material-ui/lab/Alert";

const ActivatedAccount = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Sign In" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <br/>
            <br/>
            <MuiAlert className="mb-4" severity="success">
                <div className="d-flex align-items-center align-content-center">
                      <span>
                             <strong className="d-block">Congrats!</strong> You have been succesfuly activated , You can login now
                                <strong> <a href="/SignInWamya"> Login </a></strong>
                      </span>
                </div>
            </MuiAlert>
            <br/>
            <br/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default ActivatedAccount;