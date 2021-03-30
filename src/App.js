import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ PagesFront-----*/
import  Home  from "./pages/front/Home";
import SendPackages from "./pages/front/SendPackages";
import MyPackages from './pages/front/MyPackages'
import DigitalMarketing from "./PagesFront/Digital-marketing";
import PaymentProcessing from "./PagesFront/Payment-processing";
import HRManagement from "./PagesFront/HR-Management";
import Startup from "./PagesFront/Startup";
import HomeCRM from "./PagesFront/Home-CRM";
import About from "./PagesFront/About";
import Service from "./PagesFront/Service";
import Process from "./PagesFront/Process";
import SignUp from "./pages/front/SignUp"
import Team from "./PagesFront/Team";
import Portfolio2col from "./PagesFront/Portfolio-2col";
import Portfolio3col from "./PagesFront/Portfolio-3col";
import Portfoliofull4col from "./PagesFront/Portfolio-fullwidth-4col";
import PortfolioSingle from "./PagesFront/PortfolioSingle";
import Bloglist from "./PagesFront/Bloglist";
import BlogSingle from "./PagesFront/BlogSingle";
import Contact from "./PagesFront/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import Landing from "./PagesFront/Landing";
import Price from "./PagesFront/Price";
import Faq from "./PagesFront/Faq";
import ServiceDetails from "./PagesFront/ServiceDetails";
import SignIn from "./PagesFront/SignIn";
import BlogGridPage from "./PagesFront/BlogGridPage";
import NotFound from "./PagesFront/404";
import CustomerServiceDetails from "./pages/front/CustomerServiceDetails";
import EntrepriseServiceDetails from "./pages/front/EntrepriseServiceDetails";
import SignUpCustomer from "./pages/front/SignUpCustomer";
import SignUpEntreprise from "./pages/front/SignUpEntreprise";
import EntrepriseInterface from "./pages/front/EntrepriseInterface";
import CustomerInterface from "./pages/front/CustomerInterface";
import Payment from './pages/front/Payment'






/***Dashbord Imports ********/
import { BrowserRouter } from 'react-router-dom';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import Routes from './Routes';
import ScrollToTop from './utils/ScrollToTop';
import './assets/base.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebook,
  faTwitter,
  faVuejs,
  faReact,
  faHtml5,
  faGoogle,
  faInstagram,
  faPinterest,
  faYoutube,
  faDiscord,
  faSlack,
  faDribbble,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  far,
  faSquare,
  faLifeRing,
  faCheckCircle,
  faTimesCircle,
  faDotCircle,
  faThumbsUp,
  faComments,
  faFolderOpen,
  faTrashAlt,
  faFileImage,
  faFileArchive,
  faCommentDots,
  faFolder,
  faKeyboard,
  faCalendarAlt,
  faEnvelope,
  faAddressCard,
  faMap,
  faObjectGroup,
  faImages,
  faUser,
  faLightbulb,
  faGem,
  faClock,
  faUserCircle,
  faQuestionCircle,
  faBuilding,
  faBell,
  faFileExcel,
  faFileAudio,
  faFileVideo,
  faFileWord,
  faFilePdf,
  faFileCode,
  faFileAlt,
  faEye,
  faChartBar
} from '@fortawesome/free-regular-svg-icons';
import {
  fas,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faSmile,
  faHeart,
  faBatteryEmpty,
  faBatteryFull,
  faChevronRight,
  faSitemap,
  faPrint,
  faMapMarkedAlt,
  faTachometerAlt,
  faAlignCenter,
  faExternalLinkAlt,
  faShareSquare,
  faInfoCircle,
  faSync,
  faQuoteRight,
  faStarHalfAlt,
  faShapes,
  faCarBattery,
  faTable,
  faCubes,
  faPager,
  faCameraRetro,
  faBomb,
  faNetworkWired,
  faBusAlt,
  faBirthdayCake,
  faEyeDropper,
  faUnlockAlt,
  faDownload,
  faAward,
  faPlayCircle,
  faReply,
  faUpload,
  faBars,
  faEllipsisV,
  faSave,
  faSlidersH,
  faCaretRight,
  faChevronUp,
  faPlus,
  faLemon,
  faChevronLeft,
  faTimes,
  faChevronDown,
  faFilm,
  faSearch,
  faEllipsisH,
  faCog,
  faArrowsAltH,
  faPlusCircle,
  faAngleRight,
  faAngleUp,
  faAngleLeft,
  faAngleDown,
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
  faStar,
  faSignOutAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons';

library.add(
    far,
    faSquare,
    faLifeRing,
    faCheckCircle,
    faTimesCircle,
    faDotCircle,
    faThumbsUp,
    faComments,
    faFolderOpen,
    faTrashAlt,
    faFileImage,
    faFileArchive,
    faCommentDots,
    faFolder,
    faKeyboard,
    faCalendarAlt,
    faEnvelope,
    faAddressCard,
    faMap,
    faObjectGroup,
    faImages,
    faUser,
    faLightbulb,
    faGem,
    faClock,
    faUserCircle,
    faQuestionCircle,
    faBuilding,
    faBell,
    faFileExcel,
    faFileAudio,
    faFileVideo,
    faFileWord,
    faFilePdf,
    faFileCode,
    faFileAlt,
    faEye,
    faChartBar
);
library.add(
    fab,
    faFacebook,
    faTwitter,
    faVuejs,
    faReact,
    faHtml5,
    faGoogle,
    faInstagram,
    faPinterest,
    faYoutube,
    faDiscord,
    faSlack,
    faDribbble,
    faGithub
);
library.add(
    fas,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faSmile,
    faHeart,
    faBatteryEmpty,
    faBatteryFull,
    faChevronRight,
    faSitemap,
    faPrint,
    faMapMarkedAlt,
    faTachometerAlt,
    faAlignCenter,
    faExternalLinkAlt,
    faShareSquare,
    faInfoCircle,
    faSync,
    faQuoteRight,
    faStarHalfAlt,
    faShapes,
    faCarBattery,
    faTable,
    faCubes,
    faPager,
    faCameraRetro,
    faBomb,
    faNetworkWired,
    faBusAlt,
    faBirthdayCake,
    faEyeDropper,
    faUnlockAlt,
    faDownload,
    faAward,
    faPlayCircle,
    faReply,
    faUpload,
    faBars,
    faEllipsisV,
    faSave,
    faSlidersH,
    faCaretRight,
    faChevronUp,
    faPlus,
    faLemon,
    faChevronLeft,
    faTimes,
    faChevronDown,
    faFilm,
    faSearch,
    faEllipsisH,
    faCog,
    faArrowsAltH,
    faPlusCircle,
    faAngleRight,
    faAngleUp,
    faAngleLeft,
    faAngleDown,
    faArrowUp,
    faArrowDown,
    faArrowRight,
    faArrowLeft,
    faStar,
    faSignOutAlt,
    faLink
);

const store = configureStore();

const user = false;


class App extends Component {


  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
<>
  {user ? (
      <Provider store={store}>
        <BrowserRouter basename="/">
          <CssBaseline />
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
  ):
      <>

        <Router>
          <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute path="/HR-Management" component={HRManagement} />
          <ScrollToTopRoute path="/Startup" component={Startup} />
          <ScrollToTopRoute path="/Home-CRM" component={HomeCRM} />
          <ScrollToTopRoute path="/About" component={About} />
          <ScrollToTopRoute path="/Service" component={Service} />
          <ScrollToTopRoute path="/Process" component={Process} />
          <ScrollToTopRoute path="/Team" component={Team} />


          {/** Portfolios ***/}
          <ScrollToTopRoute path="/Portfolio-2col" component={Portfolio2col} />
          <ScrollToTopRoute path="/Portfolio-3col" component={Portfolio3col} />
          <ScrollToTopRoute path="/Portfolio-fullwidth-4col"  component={Portfoliofull4col}/>
          <ScrollToTopRoute path="/PortfolioSingle" component={PortfolioSingle}/>


          {/**Package Management*/}
          <ScrollToTopRoute path="/SendPackage" component={SendPackages} />
          <ScrollToTopRoute path="/MyPackages" component={MyPackages} />
          
          {/** Blog ***/}
          <ScrollToTopRoute path="/Bloglist" component={Bloglist} />
          <ScrollToTopRoute path="/BlogSingle" component={BlogSingle} />
          <ScrollToTopRoute path="/BlogGridPage" component={BlogGridPage} />

          
          <ScrollToTopRoute path="/SignUp" component={SignUp} />
          
          <ScrollToTopRoute path="/Contact" component={Contact} />
          <ScrollToTopRoute path="/Landing" component={Landing} />
          <ScrollToTopRoute path="/Price" component={Price} />
          <ScrollToTopRoute path="/Faq" component={Faq} />
          <ScrollToTopRoute path="/ServiceDetails" component={ServiceDetails} />
          <ScrollToTopRoute path="/SignIn" component={SignIn} />
          <ScrollToTopRoute path="/SignUp" component={SignUp} />

            {/*** Cutomser & Entreprise Module  ***/}
            <ScrollToTopRoute path="/CustomerServiceDetails" component={CustomerServiceDetails} />
            <ScrollToTopRoute path="/EntrepriseServiceDetails" component={EntrepriseServiceDetails} />
            <ScrollToTopRoute path="/SignUpCustomer" component={SignUpCustomer} />
            <ScrollToTopRoute path="/SignUpEntreprise" component={SignUpEntreprise} />
            <ScrollToTopRoute path="/Payment" component={Payment} />
            <ScrollToTopRoute path="/EntrepriseInterface" component={EntrepriseInterface} />
            <ScrollToTopRoute path="/CustomerInterface" component={CustomerInterface} />

          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
      </>

  }



</>

    );
  }
}

export default App;
