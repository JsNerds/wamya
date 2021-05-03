import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Fileget from "./Fileget";
import validate from "../../../validation/validation";
import FormInput from "../FormInput";
import { Multiselect, DropdownList } from "react-widgets";
import { upper, aadhaar, pan, salary } from "../../../validation/normalize";
import { Button, Card, CardBody, Col, FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { regionOptions } from "../data";
import { Toggle } from "react-toggle";
import Test from "./Test";

const customFileInput = (field) => {
  delete field.input.value;
  return <input type="file" id="file" {...field.input} />;
};

const adaptFileEventToValue = (delegate) => (e) => delegate(e.target.files[0]);

const FileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};
const renderToggleInput = (field) => (
  <Toggle
    checked={field.input.value}
    onChange={field.input.onChange}
    icons={false}
  />
);
const RenderSelectInput = ({ input, reg, name, id }) => (
  <Select
    {...input}
    onBlur={() => input.onBlur()}
    defaultValue={[regionOptions[2], regionOptions[3]]}
    isMulti
    name="region"
    options={regionOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
const PersonalDetailsForm = (props) => {
  const { handleSubmit, previousPage } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Col sm="12">
        <Card className="card-border">
          <CardBody>
            <Field
              name="address"
              type="textarea"
              component={FormInput}
              label="Address *"
              inputPlaceHolder="Enter Address"
            />
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="fullname"
                  type="text"
                  component={FormInput}
                  label="full name"
                  inputPlaceHolder="full name"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="phone"
                  type="number"
                  component={FormInput}
                  label="Phone"
                  inputPlaceHolder="Enter phone number"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Label>Ragion</Label>
                <Field name="region" component={RenderSelectInput} />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="plan"
                  type="text"
                  component={FormInput}
                  label="Annual Income"
                  inputPlaceHolder="Enter Annual Income"
                  normalize={salary}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Field
                  name="Licence"
                  type="text"
                  component={FormInput}
                  label="licence No *"
                  inputPlaceHolder="Enter licence number"
                  normalize={(upper, pan)}
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="cin"
                  type="text"
                  component={FormInput}
                  label="cinNo *"
                  inputPlaceHolder="Enter cin number"
                  normalize={aadhaar}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label>Gender</Label>
                  </Col>
                  <Col xs="6" lg="12">
                    <FormGroup check className="radio">
                      <div>
                        <label>
                          <Field
                            name="gender"
                            component="input"
                            type="radio"
                            value="male"
                          />{" "}
                          Male
                        </label>
                        <br></br>
                        <label>
                          <Field
                            name="gender"
                            component="input"
                            type="radio"
                            value="female"
                          />
                          Female
                        </label>
                      </div>
                    </FormGroup>

                    <FormGroup check className="radio"></FormGroup>
                  </Col>
                </FormGroup>
              </Col>
              <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label htmlFor="file-input">Upload Visitor Image</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Field name="pdp" component={FileInput} type="file" />
                  </Col>
                </FormGroup>
              </Col>
            </FormGroup>
          </CardBody>
          <div style={{ paddingBottom: 30 }}>
            <Button
              color="primary"
              className="btn-pill pull-left"
              onClick={previousPage}
              style={{ marginLeft: "20px" }}
            >
              <i className="fa fa-chevron-left" />
              &nbsp; Previous
            </Button>
            <Button
              color="primary"
              className="btn-pill pull-right"
              type="submit"
              style={{ marginRight: "20px" }}
            >
              Next &nbsp;
              <i className="fa fa-chevron-right" />
            </Button>
          </div>
        </Card>
      </Col>
    </form>
  );
};

PersonalDetailsForm.propTypes = {
  handleSubmit: PropTypes.func,
  previousPage: PropTypes.func,
};

export default reduxForm({
  form: "wizardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(PersonalDetailsForm);
