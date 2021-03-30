import React from 'react';
import Sectitle from '../../componentsFront/Title/Sectitle';
import PackageItem from '../../components/front/PackageItem';
const PackageList =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"/>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_01.jpg" memberN="Phillip Anthropy" memberd="web designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_02.jpg" memberN="Gordon Norman" memberd="UI/UX designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_03.jpg" memberN="Dylan Meringue" memberd="web designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_04.jpg" memberN="Bailey Wonger" memberd="Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_5.jpg" memberN="Giles Posture" memberd="App designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_6.jpg" memberN="Rodney Artichoke" memberd="UI/UX designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_7.jpg" memberN="Jackson Pot" memberd="Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_8.jpg" memberN="Bailey Wonger" memberd="Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_9.jpg" memberN="Max Conversion" memberd="Social Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_10.jpg" memberN="Jake Weary" memberd="UI/UX designer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_9.jpg" memberN="Justin Case" memberd="Marketer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <PackageItem PackageImage="team_12.jpg" memberN="Norman Gordon" memberd="Web developer"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default PackageList;