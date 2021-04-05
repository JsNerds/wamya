import React, { Fragment } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

import { Box } from "@material-ui/core";

import WamyaLogo from "../../img/logoWhite.png";

const HeaderLogo = (props) => {
  return (
    <Fragment>
      <div className={clsx("app-header-logo", {})}>
        <Box className="header-logo-wrapper" title="Wamya dashboard">
          <Link to="/DashboardDefault" className="header-logo-wrapper-link">
            <img alt="Wamya logo" src={WamyaLogo} />
          </Link>
          {/* <Box className="header-logo-text"> Welcome To Dashboard ! </Box>*/}
        </Box>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
