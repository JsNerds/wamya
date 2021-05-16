import React from 'react';
import Sectitle from './Title/Sectitle';
import Teamitem from './TeamItem';
const TeamMembers = () => {
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
                <Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="Our team consist of four very skilled members that made the design and production of the project"/>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="ahmed.jpg" memberN="Ahmed Saidi" memberd="FullStack Js developer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="khalil.png" memberN="Ahmed Khalil Slama" memberd="FullStack Js developer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="aziz.jpg" memberN="Mouhamed Aziz Sahnoun" memberd="FullStack Js developer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="malek.jpg" memberN="Malek Mneri" memberd="FullStack Js developer"/>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default TeamMembers;