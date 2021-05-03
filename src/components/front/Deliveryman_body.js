import React, { Fragment, useEffect } from "react";
import EntrepriseDrivers from "./EntrepriseDrivers";
import PackageSlider from "./PackageSlider";
import Deliveryman_stats from "./Deliveryman_stats";
import CustomerFavoriteDrivers from "./CustomerFavoriteDrivers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button, Tooltip } from "@material-ui/core";
import SendPackages from "../../pages/front/SendPackages";
import Degiral_sign from "./Dm_comp/Digital_sign";
import Disco from "./Dm_inter/Disco";

import { useServerApi } from "../../hooks/useServerApi";

export default function Deliveryman_Body(props) {
  useEffect(() => {
    console.log(props.dm);
  }, [props.dm]);
  console.log(props.dm);
  const a = 4;
  return (
    <section className="faq_area bg_color sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pr_50">
            <div className="faq_tab">
              <h4 className="f_p t_color3 f_600 f_size_22 mb_40">
                Quick Navigation
              </h4>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="purchas-tab"
                    data-toggle="tab"
                    href="#Analytics"
                    role="tab"
                    aria-controls="purchas"
                    aria-selected="true"
                  >
                    Analytics
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="returns-tab"
                    data-toggle="tab"
                    href="#Drivers"
                    role="tab"
                    aria-controls="returns"
                    aria-selected="false"
                  >
                    Delivery man of the month{" "}
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="returns-tab"
                    data-toggle="tab"
                    href="#Drop"
                    role="tab"
                    aria-controls="returns"
                    aria-selected="false"
                  >
                    Drop by authentification{" "}
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="returns-tab"
                    data-toggle="tab"
                    href="#accept"
                    role="tab"
                    aria-controls="returns"
                    aria-selected="false"
                  >
                    My Deliveries{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <Button variant="contained" color="primary" className="m-2">
              <FontAwesomeIcon icon={["far", "bell"]} />
              <span className="ml-3 badge badge-warning">
                <b>23</b> New
              </span>
            </Button>

            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Analytics"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                <Deliveryman_stats />
              </div>

              <div
                className="tab-pane fade"
                id="Drivers"
                role="tabpane2"
                aria-labelledby="returns-tab"
              >
                <CustomerFavoriteDrivers />
              </div>

              <div
                className="tab-pane fade"
                id="Drop"
                role="tabpane3"
                aria-labelledby="returns-tab"
              >
                <Degiral_sign />
              </div>

              <div
                className="tab-pane fade"
                id="accept"
                role="tabpane4"
                aria-labelledby="returns-tab"
              >
                {console.log(props.dm.img)}
                {a === 4 && <Disco dm={props.dm} />}
                {a === 3 && <Deliveryman_stats />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
