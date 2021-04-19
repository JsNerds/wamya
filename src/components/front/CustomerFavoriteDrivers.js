import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Grid, Avatar, Card, CardContent, Divider } from '@material-ui/core';



import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar3 from "../../assets/images/avatars/avatar3.jpg";
import avatar4 from "../../assets/images/avatars/avatar4.jpg";
import avatar5 from "../../assets/images/avatars/avatar5.jpg";
import avatar6 from "../../assets/images/avatars/avatar6.jpg";
import avatar7 from "../../assets/images/avatars/avatar7.jpg";

export default function CustomerFavoriteDrivers() {
  const chart53Options = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      color: "#4191ff",
      curve: "smooth",
      width: 2,
    },
    fill: {
      color: "#f4772e",
    },
    colors: ["#f4772e"],
    legend: {
      show: false,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
  };
  const chart53Data = [
    {
      name: "Sales",
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62],
    },
  ];
  return (
    <Fragment>

      <h4>Drivers Of the Month</h4> <hr/>
      <Grid item xs={12} md={6}>
        <Card className="card-box mb-4">
          <CardContent className="p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <Avatar alt="..." src={avatar2} className="mr-2" />
                  <div>
                    <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                      Inez Conley
                    </a>
                    <span className="text-black-50 d-block">
                        Project Manager
                      </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="font-weight-bold text-danger font-size-lg pr-2">
                  584
                </div>
                <FontAwesomeIcon
                    icon={['fas', 'arrow-down']}
                    className="font-size-sm text-danger opacity-5"
                />
              </div>
            </div>
            <Divider className="my-3" />
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <Avatar alt="..." src={avatar4} className="mr-2" />
                  <div>
                    <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="...">
                      Beck Simpson
                    </a>
                    <span className="text-black-50 d-block">
                        Senior Consultant
                      </span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="font-weight-bold text-first font-size-lg pr-2">
                  {' '}
                  $12,23M
                </div>
                <FontAwesomeIcon
                    icon={['fas', 'arrow-up']}
                    className="font-size-sm text-first opacity-5"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Card className="card-box mb-4 p-3 text-center">
        <div className="my-3">
          <h6 className="font-weight-bold font-size-lg mb-1 text-black">
            Revenue progress
          </h6>
          <p className="text-black-50 mb-0">
            Our company revenues, split by progress.
          </p>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar1} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Marion Devine</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>4.8</span>
              <span className="px-1">|</span>
              34 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar2} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Monique Hanna</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>5.0</span>
              <span className="px-1">|</span>
              81 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar3} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Celine Goulding</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>2.9</span>
              <span className="px-1">|</span>
              52 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar4} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Anabel Mayo</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>4.6</span>
              <span className="px-1">|</span>
              76 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar5} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Rueben Hays</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>4.8</span>
              <span className="px-1">|</span>
              76 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="divider-v divider-v-lg" />
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar6} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Kush Malone</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>3.5</span>
              <span className="px-1">|</span>
              34 Jobs
            </div>
          </div>
          <div className="position-relative px-5 py-3">
            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
              <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                <div className="rounded-circle overflow-hidden">
                  <img alt="..." className="img-fluid" src={avatar7} />
                </div>
              </div>
            </div>
            <div className="font-weight-bold mt-1">Haydn Porter</div>
            <div className="font-weight-bold font-size-sm text-black-50">
              <FontAwesomeIcon
                icon={["fas", "star"]}
                className="text-warning mr-1"
              />
              <span>4.5</span>
              <span className="px-1">|</span>
              23 Jobs
            </div>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
