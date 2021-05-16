import React, { Fragment, useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import Sticky from "react-stickynode";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Menu,
  Tooltip,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomNavbar(props) {
  const history = useHistory();
  var { mClass, nClass, cClass, slogo, hbtnClass } = props;
  const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  const img = localStorage.getItem("img");

  const [connected, setConnected] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
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
    history.push("/");
  };

  const myAccountPath = () => {
    if (role === "Company") {
      history.push("/EntrepriseInterface");
    } else if (role === "Customer") {
      history.push("/CustomerInterface");
    } else {
      history.push("/Delivery_man_interface");
    }
  };

  return (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
      <header className="header_area">
        <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
          <div className={`container ${cClass}`}>
            <Link className={`navbar-brand ${slogo}`} to="/">
              <img src={require("../../img/logoWhite.png")} alt="" />
              <img src={require("../../img/logoBlue.png")} alt="logo" />
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
                <li className="nav-item">
                  <NavLink title="Pricing" className="nav-link" to="/flex_join">
                    Wamya flex
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink title="About" className="nav-link" to="/About">
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink title="About" className="nav-link" to="/ourTeam">
                     Team
                  </NavLink>
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
                      className="text-capitalize px-3 text-left btn-inverse d-flex align-items-center"
                    >
                      <Box>
                        <Avatar
                          sizes="44"
                          alt={username}
                          src={
                            process.env.REACT_APP_API_URL_UPLOADS + "/" + img
                          }
                        />
                      </Box>
                      <span className="pl-1 pl-xl-3">
                        <FontAwesomeIcon
                          icon={["fas", "angle-down"]}
                          className="opacity-5"
                        />
                      </span>
                    </Button>

                    <Menu
                      anchorEl={anchorEl}
                      keepMounted
                      getContentAnchorEl={null}
                      open={Boolean(anchorEl)}
                      anchorOrigin={{
                        vertical: "center",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "center",
                        horizontal: "center",
                      }}
                      onClose={handleClose}
                      className="ml-2"
                    >
                      <div className="dropdown-menu-right dropdown-menu-lg overflow-hidden p-0">
                        <List className="text-left bg-transparent d-flex align-items-center flex-column pt-0">
                          <div className="pl-3  pr-3">
                            <br />
                            <br />
                            <p></p>
                            <div className="font-weight-bold text-center pt-2 line-height-1">
                              {username}
                            </div>
                          </div>
                          <Divider className="w-100 mt-2" />
                          <ListItem button onClick={myAccountPath}>
                            My Account
                          </ListItem>
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
