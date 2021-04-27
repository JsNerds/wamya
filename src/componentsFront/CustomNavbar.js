import React, {Component, Fragment, useEffect, useState} from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Sticky from "react-stickynode";
import {Avatar, Box, Button, Divider, List, ListItem, Menu, Tooltip} from "@material-ui/core";
import avatar5 from "../assets/images/avatars/avatar5.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function CustomNavbar(props) {
  const history = useHistory();
  var { mClass, nClass, cClass, slogo, hbtnClass } = props;
  const username = localStorage.getItem("username");
  const id = localStorage.getItem("id");
  const role = localStorage.getItem("role");
  const img = localStorage.getItem("img");

  const [connected, setConnected] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (username === null) {
      setConnected(false);
    } else {
      setConnected(true);
    }
  });

  const Logout = () => {
    localStorage.clear();
    history.go(0);
  };

  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to="/">
              <img src={require("../img/logoWhite.png")} alt="" />
              <img src={require("../img/logoBlue.png")} alt="logo" />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="menu_toggle">
                <span className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="hamburger-cross">
                  <span></span>
                  <span></span>
                </span>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                  <Link to="/" className="nav-link dropdown-toggle">
                    Home
                  </Link>
                </li>

                <li className="dropdown submenu nav-item">
                  <Link to="/Service" className="dropdown-toggle nav-link">
                    Services
                  </Link>
                </li>
                <li className="dropdown submenu nav-item">
                  <Link
                    to="./"
                    title="Pages"
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul role="menu" className=" dropdown-menu">
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="About"
                        className="nav-link"
                        to="/MyPackages"
                      >
                        My Packages
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="About"
                        className="nav-link"
                        to="/CustomerInterface"
                      >
                        Customer Interface
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="About"
                        className="nav-link"
                        to="/Delivery_man_interface"
                      >
                        Delivery man interface
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="About"
                        className="nav-link"
                        to="/Drop_by"
                      >
                        Drop by
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="About"
                        className="nav-link"
                        to="/EntrepriseInterface"
                      >
                        Company Interface
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="About"
                        className="nav-link"
                        to="/Payment"
                      >
                        Payment
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="About"
                        className="nav-link"
                        to="/Pricing"
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="Process"
                        className="nav-link"
                        to="/Process"
                      >
                        Process
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="Team"
                        className="nav-link"
                        to="/Team"
                      >
                        Team
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="Price"
                        className="nav-link"
                        to="/Price"
                      >
                        Price
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact title="Faq" className="nav-link" to="/Faq">
                        Faq
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="SignInWamya"
                        className="nav-link"
                        to="/SignInWamya"
                      >
                        Sign In
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        title="SignUp"
                        className="nav-link"
                        to="/SignUp"
                      >
                        Sign Up
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/flex_join">
                    Wamya flex
                  </NavLink>
                </li>

                <li className="dropdown submenu nav-item">
                  <Link
                    title="Pages"
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="#"
                  >
                    Portfolio
                  </Link>
                  <ul role="menu" className=" dropdown-menu">
                    <li className="nav-item">
                      <NavLink
                        title="Portfolio 2"
                        className="nav-link"
                        to="/Portfolio-2col"
                      >
                        Portfolio 2col
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        title="Portfolio 3"
                        className="nav-link"
                        to="/Portfolio-3col"
                      >
                        Portfolio 3col
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        title="Portfolio Fullwidth"
                        className="nav-link"
                        to="/Portfolio-fullwidth-4col"
                      >
                        Portfolio fullwidth
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        title="PortfolioSingle"
                        className="nav-link"
                        to="/PortfolioSingle"
                      >
                        Portfolio Single
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href=".#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <NavLink to="/Bloglist" className="nav-link">
                        Blog List
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/BlogGridPage" className="nav-link">
                        Blog Grid
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/BlogSingle" className="nav-link">
                        Blog Single
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              {connected ? (
                  <>
                    <Fragment>
                      <Button
                          color="inherit"
                          onClick={handleClick}
                          className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center">
                        <Box>
                          <Avatar sizes="44" alt="Emma Taylor" src={process.env.REACT_APP_API_URL_UPLOADS + "/" + img} />
                        </Box>
                        <span className="pl-1 pl-xl-3"><FontAwesomeIcon icon={['fas', 'angle-down']} className="opacity-5" /></span>
                      </Button>

                      <Menu
                          anchorEl={anchorEl}
                          keepMounted
                          getContentAnchorEl={null}
                          open={Boolean(anchorEl)}
                          anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center'
                          }}
                          transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center'
                          }}
                          onClose={handleClose}
                          className="ml-2">
                        <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
                          <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
                            <div className="pl-3  pr-3">
                              <br/>
                              <br/>
                              <p></p>
                              <div className="font-weight-bold text-center pt-2 line-height-1">
                                {username}
                              </div>
                            </div>
                            <Divider className="w-100 mt-2" />
                            <ListItem button>My Account</ListItem>
                            <ListItem button>Profile settings</ListItem>
                            <ListItem button>Active tasks</ListItem>
                            <Divider className="w-100" />
                            <ListItem className="d-block rounded-bottom px-3 pt-3 pb-0 text-center">
                              <Tooltip arrow title="Twitter">
                                <Button color="default" className="text-twitter">
                                  <button
                                      onClick={Logout}
                                      className={`btn_get btn_hover ${hbtnClass}`}
                                  >
                                    LOGOUT
                                  </button>
                                </Button>
                              </Tooltip>
                            </ListItem>
                          </List>
                        </div>
                      </Menu>
                    </Fragment>
                  </>
              ) : (
                <Link
                  to="/SignInWamya"
                  className={`btn_get btn_hover ${hbtnClass}`}
                >
                  Sign Up / Sign in
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    </Sticky>
  );
}
