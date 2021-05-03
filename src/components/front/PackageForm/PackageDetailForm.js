import React from 'react'
import Select from "react-select";
export default function PackageDetailForm(props) {
    const options = [
        { value: "Dangerous", label: "Dangerous" },
        { value: "Safe", label: "Safe" },
        { value: "Brittle", label: "Brittle" },
      ];
    return (
        <>
        <h2 className="f_p f_600 f_size_24 t_color3 mb_40">
         Package Details
      </h2>
          <div className="row">
            <div className="col-lg-12">
            <label className="f_p text_c f_400">Type</label>
              <Select
                label="Choose type"
                options={options}
                value={props.formik.getFieldProps("package.0.type").value}
                onChange={(value) => {
                  props.formik.setFieldValue("package.0.type", value.value)
                }}
              />
            </div>
          </div>
          <label className="f_p text_c f_400 mt-2">Dimension</label>
          <div className="row mt-2">
            <div className="col-md-3">
              <input
                type="text"
                name="package.0.dimension.Length"
                id="package.0.dimension.Length"
                onChange={props.formik.handleChange}
                placeholder="Length"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="package.0.dimension.Height"
                id="package.0.dimension.Height"
                onChange={props.formik.handleChange}
                placeholder="Height"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="package.0.dimension.Width"
                onChange={props.formik.handleChange}
                placeholder="Width"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Weight"
                name="package.0.weight"
                onChange={props.formik.handleChange}
              />
            </div>
          </div>
          <label className="f_p text_c f_400 mt-2">Note</label>
          <div className="row mt-2">
            <div className="col-lg-12">
              <input
                type="text"
                placeholder="Note"
                name="package.0.note"
                onChange={props.formik.handleChange}
              />
            </div>
          </div>
        </>
      );
}
