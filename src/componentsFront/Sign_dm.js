import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Form from "../components/front/form_deliveryman/Form";

import Join_form from "./Join_form";
import { queryServerApi } from "../utils/queryServerApi";

export default function Sign_dm(props) {
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const history = useHistory();
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-4">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                  Allready have an account?
                </h3>
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Login now and
                  <br /> starting using our <br />
                  <span className="f_700">amazing</span> products
                </h2>
                <ul className="list-unstyled mb-0">
                  <li>
                    <i className="ti-check"></i> Premium Access to all Products
                  </li>
                  <li>
                    <i className="ti-check"></i> Free Testing Tools
                  </li>
                  <li>
                    <i className="ti-check"></i> Unlimited User Accounts
                  </li>
                </ul>
                <button
                  type="submit"
                  className="btn_three sign_btn_transparent"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="login_info">
                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                <Form
                  onSubmit={async (values) => {
                    console.log(values);
                    setShowLoader(false);
                    const [, err] = await queryServerApi(
                      "delivery/add",
                      values,
                      "POST",
                      false
                    );
                    if (err) {
                      setShowLoader(false);
                      setError({
                        visible: true,
                        message: JSON.stringify(err.errors, null, 2),
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
