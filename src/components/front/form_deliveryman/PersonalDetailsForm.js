import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import validate from "../../../validation/validation";
import FormInput from "../FormInput";
import { Multiselect, DropdownList } from "react-widgets";
import { upper, aadhaar, pan, salary } from "../../../validation/normalize";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Select from "react-select";
import Regions from "../Region_option";
import { change as changeFieldValue } from "redux-form";
import { colourOptions } from "../data";
const customFileInput = (field) => {
  delete field.input.value; // <-- just delete the value property
  return <input type="file" id="file" {...field.input} />;
};
var reg = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
];

const renderMultiselect = ({ input, data, valueField, textField }) => (
  <Multiselect
    {...input}
    onChange={(value) => input.onChange(value)}
    onBlur={() => input.onBlur()}
    options={data}
    displayValue="label"
  />
);

var regions = [
  "Bardo",
  "petite ariana",
  "mourouj",
  "rades",
  "tunis centre ville",
  "ariana",
  "ennaser",
];

const renderDropdownList = ({ input, data, valueField, textField }) => (
  <DropdownList
    {...input}
    data={data}
    valueField={valueField}
    textField={textField}
    onChange={input.onChange}
  />
);
const RenderSelectInput = ({ input, reg, name, id }) => (
  <Select
    {...input}
    onBlur={() => input.onBlur()}
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
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
                  name="full name"
                  type="text"
                  component={FormInput}
                  label="full name"
                  inputPlaceHolder="full name"
                />
              </Col>
              <Col xs="12" lg="6">
                <Field
                  name="qualification"
                  type="text"
                  component={FormInput}
                  label="Qualifications"
                  inputPlaceHolder="Enter Qualifications"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <Label>Ragion</Label>
                <Field
                  name="region"
                  component={RenderSelectInput}
                  reg={[
                    { value: "one", label: "One" },
                    { value: "two", label: "Two" },
                  ]}
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="income"
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
                  name="pan"
                  type="text"
                  component={FormInput}
                  label="PAN No *"
                  inputPlaceHolder="Enter PAN number"
                  normalize={(upper, pan)}
                />
              </Col>

              <Col xs="12" lg="6">
                <Field
                  name="aadhaar"
                  type="text"
                  component={FormInput}
                  label="Aadhaar No *"
                  inputPlaceHolder="Enter Aadhaar number"
                  normalize={aadhaar}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label>Martial Status</Label>
                  </Col>
                  <Col xs="6" lg="12">
                    <FormGroup check className="radio">
                      <Input
                        className="form-check-input"
                        component={FormInput}
                        type="radio"
                        id="radio1"
                        name="radios"
                        value="option1"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="radio1"
                      >
                        Single
                      </Label>
                    </FormGroup>

                    <FormGroup check className="radio">
                      <Input
                        className="form-check-input"
                        component={FormInput}
                        type="radio"
                        id="radio2"
                        name="radios"
                        value="option2"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="radio2"
                      >
                        Married
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
              <Col xs="12" lg="6">
                <FormGroup row>
                  <Col xs="12" lg="6">
                    <Label htmlFor="file-input">Upload Visitor Image</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Field
                      name="file"
                      type="file"
                      component={customFileInput}
                    />
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
