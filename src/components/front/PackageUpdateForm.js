import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { queryServerApi } from "../../utils/queryServerApi";
import { useFormik } from "formik";
import Select from "react-select";
import { useServerApi } from "../../hooks/useServerApi";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { marker } from "leaflet";

export default function PackagesForm(props) {
  let { id } = useParams();
  const history = useHistory();
  const [pa] = useServerApi("package/" + id);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const formik = useFormik({
    initialValues: {
      id: id,
      note: pa?.note,
      dimension: {
        Length: pa?.dimension.Length,
        Height: pa?.dimension.Height,
        Width: pa?.dimension.Width,
      },
      type: pa?.type,
      weight: pa?.weight,
    },
    onSubmit: async (values) => {
      console.log(values);
      setShowLoader(false);
      const [, err] = await queryServerApi(
        "package/edit",
        values,
        "PUT",
        false
      );
      if (err) {
        setShowLoader(false);
        setError({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else history.push("/CustomerInterface");
    },
  });
  const options = [
    { value: "Dangerous", label: "Dangerous" },
    { value: "Safe", label: "Safe" },
    { value: "Brittle", label: "Brittle" },
  ];
  return (
    <section className="sign_in_area bg_color sec_pad">
      <div className="container">
        <div className="sign_info">
          <div className="row">
            <div className="col-lg-6">
              <div className="sign_info_content">
                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">
                  Update your Package
                </h3>
                <h2 className="f_p f_400 f_size_30 mb-30">
                  Fill out the Form <br /> please update your package <br />
                  <span className="f_700">Before</span> the delivery begins
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_info">
                <form onSubmit={formik.handleSubmit}>
                  <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
                    New Package
                  </h2>
                  <div className="form-group text_box">
                    {error.visible && <p>{error.message}</p>}
                  </div>
                  <div className="form-group text_box">
                    <label className="f_p text_c f_400">Type of package</label>
                    <div className="row">
                      <div className="col-lg-12">
                        <Select
                          label="Choose type"
                          options={options}
                          onChange={(value) => {
                            formik.setFieldValue("type", value.value);
                          }}
                          placeholder={pa?.type}
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-3">
                        <input
                          type="text"
                          name="dimension.Length"
                          onChange={formik.handleChange}
                          placeholder={pa?.dimension.Length}
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          type="text"
                          name="dimension.Height"
                          placeholder={pa?.dimension.Height}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          type="text"
                          name="dimension.Width"
                          placeholder={pa?.dimension.Width}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="col-md-3">
                        <input
                          type="text"
                          placeholder={pa?.weight}
                          name="weight"
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          placeholder={pa?.note}
                          name="note"
                          onChange={formik.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                    <button type="submit" className="btn_three">
                      Update package
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
