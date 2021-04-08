import React, { Component } from "react";
import PackageSlider from "../../components/front/PackageSlider";
import CustomNavbar from "../../componentsFront/CustomNavbar";
import Breadcrumb from "../../componentsFront/Breadcrumb";
import FooterTwo from "../../componentsFront/Footer/FooterTwo";
import FooterData from "../../componentsFront/Footer/FooterData";
import PackageList from "../../components/front/PackageList";
import { useServerApi } from "../../hooks/useServerApi"; 

export default class MyPackages extends Component {
     testApi = () => {
        console.log(process.env.SERVER_API_URL+"hi")
        const [PackageApi] = useServerApi("package/");        
        console.log(PackageApi);
        return null;
        }

    render() {  
        let user = "Customer";
        let packageCont = null;
        if (user === "Customer") {
            packageCont = (
                <>
                    <PackageList />
                </>
            );
        } else if (user === "Company") {
            packageCont = (
                <>
                    <PackageList />
                </>
            );
        }

        return (
            <>
                <this.testApi/>
                <CustomNavbar
                    slogo="sticky_logo"
                    mClass="menu_four"
                    nClass="w_menu ml-auto mr-auto"
                />
                <Breadcrumb
                    breadcrumbClass="breadcrumb_area"
                    imgName="breadcrumb/banner_bg.png"
                    Ptitle="My packages"
                    
                />
                {packageCont}
                <FooterTwo FooterData={FooterData} />
            </>
        );
    }
}
