import React, {
  Fragment,
  useEffect,
  useState,
  Component,
  useCallback,
} from "react";
import Modal from "react-bootstrap/Modal";

import Deliveryman_stats from "./Deliveryman_stats";
import CustomerFavoriteDrivers from "./CustomerFavoriteDrivers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Feed from "./Dm_inter/Feed";
import { Button, Tooltip } from "@material-ui/core";
import Degiral_sign from "./Dm_comp/Digital_sign";
import Disco from "./Dm_inter/Disco";
import axios from "axios";
import { useServerApi } from "../../hooks/useServerApi";
import Wheel from "./Dm_comp/Wheel";
import Wheels from "./Dm_comp/Wheels";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center>
          <h4>Good job !</h4>
          <Wheels></Wheels>
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Deliveryman_Body(props) {
  const [dlv, err, reload] = useServerApi(
    "delivery/delivsfordv/" + localStorage.getItem("id")
  );
  var toRender2 = dlv;

  const [toRender3, settoRender2] = useState(props.deliveries);
  const [delivs, setdelivs] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const getdelivs = async () => {
    try {
      const userPosts = await axios.get(
        "http://localhost:3000/delivery/delivsfordv/" +
          localStorage.getItem("id")
      );
      setdelivs(userPosts.data); // set State
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getdelivs();
    const interval = setInterval(() => {
      getdelivs();
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  function reget() {
    settoRender2(toRender2);
  }

  return (
    <section className="faq_area bg_color sec_pad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 pr_50">
            <div className="faq_tab">
              <h4 className="f_p t_color3 f_600 f_size_22 mb_40">
                Quick Navigation
              </h4>

              {props.mile.badges - 1 === 0 && (
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  You earned a wheel try
                </Button>
              )}

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
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
                    My milestones
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="returns-tab"
                    data-toggle="tab"
                    href="#Feed"
                    role="tab"
                    aria-controls="returns"
                    aria-selected="false"
                  >
                    Feedback{" "}
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
                    Deliveryman of the month{" "}
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
                    My Deliveries
                    <ul>
                      {delivs.map((dell) => (
                        <li key={dell._id}>
                          From {dell.sourceAddress.City} To{" "}
                          {dell.destinationAddress[0].City}
                        </li>
                      ))}
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content faq_content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Analytics"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                <Deliveryman_stats mile={props.mile} />
              </div>
              <div
                className="tab-pane fade show active"
                id="Feed"
                role="tabpanel"
                aria-labelledby="purchas-tab"
              >
                <Feed />
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
                <Disco dm={props.dm} delivs={delivs} mile={props.mile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
