import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img from "../../img/home4/10d.png";
import img1 from "../../img/home4/11d.png";
import img2 from "../../img/home4/12d.png";
import img3 from "../../img/home4/13d.png";
import img4 from "../../img/home4/14d.png";
import img5 from "../../img/home4/15d.png";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

import {
  Grid,
  LinearProgress,
  Card,
  Button,
  List,
  ListItem,
} from "@material-ui/core";

export default function CustomerStats() {
  const Blacked = styled.img`
    width: 150px;
    height: 150px;
    margin: 0px;
    filter: grayscale(1);
  `;
  const Origin = styled.img`
    width: 150px;
    height: 150px;
    margin: 0px;
    filter: grayscale(0);
  `;
  const Div = styled.div`
    display: flex; //the flex stylings here
    flex-wrap: wrap;
    align-items: center;
  `;
  return (
    <Fragment>
      <Grid container spacing={10}>
        {/*sss*/}
        <Grid item xs={12} lg={12}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <b>avalible badges and milestones</b>
                <div className="d-block text-capitalize mt-1 font-size-sm">
                  unlocked milestones for this month.
                </div>
              </div>
            </div>
            <List>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">locked milestones</div>
                  </div>
                  <Div>
                    <Blacked src={img2} />
                    <Blacked src={img3} />
                    <Blacked src={img4} />
                    <Blacked src={img5} />
                  </Div>
                </div>

                <div>
                  <div className="font-weight-bold">Unlocked milestones</div>
                </div>
                <Div>
                  <Origin src={img} />
                  <Origin src={img1} />
                </Div>
              </ListItem>
            </List>
          </Card>
        </Grid>
        {/*sss*/}
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <b>Monthly targets</b>
                <div className="d-block text-capitalize mt-1 font-size-sm">
                  Monthly mile stones.
                </div>
              </div>
            </div>
            <List>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">
                      Next milestone to unlock
                      <Blacked src={img5} />
                    </div>
                  </div>

                  <div>
                    <div className="font-weight-bold">Packges delivered</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-success">
                      72
                    </div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-animated-alt"
                  color="secondary"
                  value={72}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">82%</div>
                </div>
              </ListItem>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Hours in service</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-danger">
                      <small>Hour</small>
                      39
                    </div>
                  </div>
                </div>
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={39}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">39</small>
                  <div className="ml-auto">39%</div>
                </div>
              </ListItem>
              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Regional ranking</div>
                    <Blacked src={img2} />
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-info">
                      <small>#</small>
                      42
                    </div>
                  </div>
                </div>
                <LinearProgress
                  className="progress-animated-alt"
                  color="primary"
                  value={51}
                />
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">in progress</div>
                </div>
              </ListItem>

              <ListItem className="py-2 d-block">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Costumer rating</div>
                    <Origin src={img} />
                    <Div>
                      <ReactStars
                        count={5}
                        edit={false}
                        isHalf={true}
                        value={3.5}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </Div>
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light p-4 text-center">
              <Button color="primary" variant="contained">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["far", "question-circle"]} />
                </span>
                <span className="btn-wrapper--label">View details</span>
              </Button>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="card-box mb-4">
            <div className="card-header">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Progress</small>
                <b>profit Analytics</b>
              </div>
              <div className="card-header--actions">
                <div className="badge badge-warning">Pending</div>
              </div>
            </div>
            <List>
              <ListItem className="d-block">
                <div className="align-box-row">
                  <div className="flex-grow-1">
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={38}
                    />
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">Dinar</small>
                      869
                    </b>
                  </div>
                </div>
              </ListItem>
            </List>
            <div className="card-footer bg-light text-center">
              <Button variant="contained" color="primary">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={["far", "question-circle"]} />
                </span>
                <span className="btn-wrapper--label">Generate reports</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
}
