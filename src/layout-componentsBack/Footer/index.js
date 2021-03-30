import React, { Fragment } from 'react';

import clsx from 'clsx';

import { Paper, List } from '@material-ui/core';

import { connect } from 'react-redux';

const Footer = props => {
  const { footerFixed } = props;
  return (
    <Fragment>
      <Paper
        square
        className={clsx('app-footer text-black-50', {
          'app-footer--fixed': footerFixed
        })}>
        <div className="app-footer--inner">
          <div className="app-footer--first">
            <List dense className="d-flex align-items-center">

            </List>
          </div>
          <div className="app-footer--second">
            <span>Wamya Admin Dashboard </span> ©
            2021 - crafted By  <span className="text-danger px-1">Js Nerds</span>
            <a
              href="https://uifort.com"
              rel="noopener"
              title="UiFort.com">
              UiFort.com
            </a>
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed
});
export default connect(mapStateToProps)(Footer);
