import React from "react";
import CustomNavbar from "../components/front/CustomNavbar";
import EventBanner from "../componentsFront/Banner/EventBanner";
import EventCount from "../componentsFront/Service/Sservice/EventCount";
import EventAbout from "../componentsFront/About/EventAbout";
import EventTeam from "../componentsFront/Team/EventTeam";
import EventFeatures from "../componentsFront/Features/EventFeatures";
import EventDetails from "../componentsFront/Features/EventDetails";
import ScheduleTab from "../componentsFront/scheduleTab";
import EventPrice from "../componentsFront/EventPrice";
import EventFact from "../componentsFront/EventFact";
import Eventgallery from "../componentsFront/Portfolios/Eventgallery";
import EventSponser from "../componentsFront/EventSponser";
import EventLocation from "../componentsFront/EventLocation";
import FooterErp from "../componentsFront/Footer/FooterErp";
import FooterData from "../components/front/FooterData";

const homesupport = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <EventBanner />
      <EventCount />
      <EventAbout />
      <EventTeam />
      <EventFeatures />
      <EventDetails />
      <ScheduleTab />
      <EventPrice />
      <EventFact />
      <Eventgallery />
      <EventSponser />
      <EventLocation />
      <FooterErp fClass="event_footer_area" FooterData={FooterData} />
    </div>
  );
};
export default homesupport;
