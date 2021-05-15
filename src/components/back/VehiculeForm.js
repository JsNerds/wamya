import React, { Fragment, useState, useEffect } from "react";
import clsx from "clsx";
import Select from "react-select";

import {
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Card,
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Divider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { useFormik } from "formik";
import { queryServerApi } from "../../utils/queryServerApi";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

const LivePreviewExample = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState({ visible: false, message: "" });
  const [markers, setMarkers] = useState([]);
  const [drivers, setDrivers] = useState([]);

  const [values, setValues] = React.useState({
    registrationNumber: "",
    model: "",
    weightCapacity: 0,
    trunkVolume: 0,
    weightLeft: 0,
    volumeLeft: 0,
    driver: "",
  });
  useEffect(() => {
    getDrivers();
  }, []);
  const getDrivers = async () => {
    try {
      const Delivery = await axios
        .get("http://localhost:3000/deliveryman/getdev")
        .then(function(doc) {
          console.log(doc.data);

          let docs = doc.data?.filter((driver) => {
            return driver.Type === "DeliveryManE";
          });
          docs.map((driver) =>
            drivers.push({ label: driver.FullName, value: driver._id })
          );
        });
      // set State
    } catch (err) {
      console.error(err.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      registrationNumber: "",
      model: "",
      driver: "",
      weightCapacity: 0,
      trunkVolume: 0,
      weightLeft: 0,
      volumeLeft: 0,
    },
    onSubmit: async (values) => {
      console.log(values);
      setShowLoader(false);
      const [, err] = await queryServerApi(
        "vehicle/add",
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
      } else history.push("/Vehicules");
    },
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <form onSubmit={formik.handleSubmit}>
            <Card className="p-4 mb-4">
              <div className="font-size-lg font-weight-bold">Add vehicle</div>
              <Divider className="my-4" />
              <div>
                <div style={{ marginBottom: "20px" }} className="ml-2">
                  <label className="f_p text_c f_400">Driver:</label>
                  <Select
                    label="Choose type"
                    options={drivers}
                    onChange={(driver) => {
                      formik.setFieldValue("driver", driver.value);
                      console.log(driver.value);
                    }}
                  />
                </div>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-registration-number">
                    Registration number
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-registration-number"
                    name="registrationNumber"
                    onChange={formik.handleChange}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={130}
                  />
                </FormControl>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-model">
                    Model
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-model"
                    name="model"
                    onChange={formik.handleChange}
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={50}
                  />
                </FormControl>

                <FormControl
                  className={clsx(classes.margin)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-weight">
                    Weight Capacity
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    name="weightCapacity"
                    onChange={formik.handleChange}
                    endAdornment={
                      <InputAdornment position="end">Kg</InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={110}
                  />
                </FormControl>
                <FormControl
                  className={clsx(classes.margin)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-volume">
                    Trunk Volume
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-volume"
                    name="trunkVolume"
                    onChange={formik.handleChange}
                    endAdornment={
                      <InputAdornment position="end">m²</InputAdornment>
                    }
                    startAdornment={
                      <InputAdornment position="start"></InputAdornment>
                    }
                    labelWidth={90}
                  />
                </FormControl>
              </div>
              <Button
                className="m-2 flex-end float-right"
                variant="contained"
                color="primary"
                type="submit"
              >
                Add Vehicule
              </Button>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LivePreviewExample;
