import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ PagesFront-----*/
import Home from "./pages/front/Home";
import SendPackages from "./pages/front/SendPackages";
import MyPackages from "./pages/front/MyPackages";
import About from "./PagesFront/About";
import Service from "../src/pages/front/Services";
import Process from "./PagesFront/Process";
import Team from "./PagesFront/Team";
import ScrollToTopRoute from "./ScrollToTopRoute";
import NotFound from "./PagesFront/404";
import CustomerServiceDetails from "./pages/front/CustomerServiceDetails";
import EntrepriseServiceDetails from "./pages/front/EntrepriseServiceDetails";
import SignUpCustomer from "./pages/front/SignUpCustomer";
import SignUpEntreprise from "./pages/front/SignUpEntreprise";
import EntrepriseInterface from "./pages/front/EntrepriseInterface";
import CustomerInterface from "./pages/front/CustomerInterface";
import Payment from "./pages/front/Payment";
import Flex_join from "./pages/front/Flex_join";
import Join_form from "./componentsFront/Join_form";
import P_deliveryform from "./pages/front/P_deliveryform";
import Delivery_man_interface from "./pages/front/Delivery_man_interface";
import PackageDetail from "./pages/front/PackageDetail.js";
import Pricing from "./pages/front/Pricing";
import SignInWamya from "./pages/front/SignInWamya";
import ActivatedAccount from "./pages/front/ActivatedAccount";
import ResetPassword from "./pages/front/ResetPassword";
import ResetNewPassword from "./pages/front/ResetNewPassword";
import PackageUpdate from "./pages/front/PackageUpdate";
/*------ Pages Dashboard-----*/
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import Routes from "./Routes";
import ScrollToTop from "./utils/ScrollToTop";
import "./assets/base.scss";
import CssBaseline from "@material-ui/core/CssBaseline";

import { library } from "@fortawesome/fontawesome-svg-core";
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
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
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
  faChartBar,
} from "@fortawesome/free-regular-svg-icons";
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
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Contact from "./pages/front/Contact";


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
const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
      <>
        <Router basename="/">

          {username != null && role === "Admin" ? (
            <switch>
              <Provider store={store}>
                <CssBaseline />
                <ScrollToTop>
                  <Routes />
                </ScrollToTop>
              </Provider>
            </switch>)
              :
              (
            <Switch>
              <ScrollToTopRoute exact={true} path={"/"} component={Home} />
              <ScrollToTopRoute path="/About" component={About} />
              <ScrollToTopRoute path="/Service" component={Service} />
              <ScrollToTopRoute path="/Process" component={Process} />
              <ScrollToTopRoute path="/Team" component={Team} />
              <ScrollToTopRoute path="/Contact" component={Contact} />

              {/**Package Management*/}
              <ScrollToTopRoute path="/SendPackage" component={SendPackages} />
              <ScrollToTopRoute path="/MyPackages" component={MyPackages} />
              <ScrollToTopRoute
                path="/PackageUpdate/:id"
                component={PackageUpdate}
              />
              <ScrollToTopRoute
                path="/PackageDetail/:id"
                component={PackageDetail}
              />
              <ScrollToTopRoute path="/SignInWamya" component={SignInWamya} />
              {/*** delivery_man  ***/}
              <ScrollToTopRoute path="/Flex_join" component={Flex_join} />
              <ScrollToTopRoute path="/Join_form" component={Join_form} />
              Delivery_man_interface
              <ScrollToTopRoute
                path="/Delivery_man_interface"
                component={Delivery_man_interface}
              />
              <ScrollToTopRoute
                path="/P_deliveryform"
                component={P_deliveryform}
              />
              {/***Cutomser & Entreprise Module***/}
              <ScrollToTopRoute
                path="/CustomerServiceDetails"
                component={CustomerServiceDetails}
              />
              <ScrollToTopRoute
                path="/EntrepriseServiceDetails"
                component={EntrepriseServiceDetails}
              />
              <ScrollToTopRoute
                path="/SignUpCustomer"
                component={SignUpCustomer}
              />
              <ScrollToTopRoute
                path="/SignUpEntreprise"
                component={SignUpEntreprise}
              />
              <ScrollToTopRoute path="/Payment" component={Payment} />
              <ScrollToTopRoute
                path="/EntrepriseInterface"
                component={EntrepriseInterface}
              />
              <ScrollToTopRoute
                path="/CustomerInterface"
                component={CustomerInterface}
              />
              <ScrollToTopRoute
                path="/ActivatedAccount"
                component={ActivatedAccount}
              />
              <ScrollToTopRoute
                path="/ResetPassword"
                component={ResetPassword}
              />
              <ScrollToTopRoute
                path="/ResetNewPassword/:id"
                component={ResetNewPassword}
              />
              <ScrollToTopRoute path="/Pricing/:id" component={Pricing} />
              <ScrollToTopRoute component={NotFound} />
            </Switch>
          )}
        </Router>
      </>
    );
  }
}

export default App;
