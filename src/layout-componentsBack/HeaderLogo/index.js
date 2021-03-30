import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import {  Box } from '@material-ui/core';

import WamyaLogo from '../../assets/images/WaymyaLogoWhite.png';

const HeaderLogo = props => {
  return (
    <Fragment>
      <div className={clsx('app-header-logo', {})}>
        <Box
          className="header-logo-wrapper"
          title="Carolina React Admin Dashboard with Material-UI Free">
          <Link to="/DashboardDefault" className="header-logo-wrapper-link">
              <img
                alt="Carolina React Admin Dashboard with Material-UI Free"
                src={WamyaLogo}
                width="120"
                height="50"
              />
          </Link>
          <Box className="header-logo-text"> Welcome To Dashboard ! </Box>
        </Box>
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
