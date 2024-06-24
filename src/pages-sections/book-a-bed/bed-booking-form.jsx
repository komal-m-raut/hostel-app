import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import * as yup from "yup"; // GLOBAL CUSTOM COMPONENTS
import PropTypes from "prop-types";
import { MenuItem } from "@mui/material";

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().required("Name is required"),
  age: yup
    .number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .min(12, "Age must be greater than 12")
    .max(100, "Age must be less than 100"),
  apartmentDetails: yup.string().required("Apartment details are required"),
  streetAddress: yup.string().required("Street address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  pinCode: yup.number().required("Pin code is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  personalContactNo: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Invalid personal contact number")
    .required("Personal contact number is required"),
  emergencyContactNo: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Invalid emergency contact number")
    .required("Emergency contact number is required"),
  validationDocumentType: yup
    .string()
    .required("Validation document type is required"),
  validationDocumentNo: yup
    .string()
    .required("Validation document number is required"),
});

const BedBookingForm = (props) => {
  const { initialValues, handleFormSubmit } = props;

  return (
    <Card
      sx={{
        p: 6,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  color="info"
                  size="medium"
                  placeholder="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="age"
                  label="Age"
                  color="info"
                  size="medium"
                  placeholder="Age"
                  value={values.age}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.age && !!errors.age}
                  helperText={touched.age && errors.age}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="apartmentDetails"
                  label="Apartment Details"
                  color="info"
                  size="medium"
                  placeholder="Apartment Details"
                  value={values.apartmentDetails}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                    !!touched.apartmentDetails && !!errors.apartmentDetails
                  }
                  helperText={
                    touched.apartmentDetails && errors.apartmentDetails
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  rows={3}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="streetAddress"
                  label="Street Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Street Address"
                  value={values.streetAddress}
                  error={!!touched.streetAddress && !!errors.streetAddress}
                  helperText={touched.streetAddress && errors.streetAddress}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  color="info"
                  size="medium"
                  placeholder="City"
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  color="info"
                  size="medium"
                  placeholder="State"
                  value={values.state}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.state && !!errors.state}
                  helperText={touched.state && errors.state}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="pinCode"
                  label="Pin Code"
                  color="info"
                  size="medium"
                  placeholder="Pin Code"
                  value={values.pinCode}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.pinCode && !!errors.pinCode}
                  helperText={touched.pinCode && errors.pinCode}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  label="Email"
                  color="info"
                  size="medium"
                  placeholder="Email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="personalContactNo"
                  color="info"
                  size="medium"
                  label="Personal Contact No"
                  placeholder="Personal Contact No"
                  onBlur={handleBlur}
                  value={values.personalContactNo}
                  onChange={handleChange}
                  error={
                    !!touched.personalContactNo && !!errors.personalContactNo
                  }
                  helperText={
                    touched.personalContactNo && errors.personalContactNo
                  }
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="emergencyContactNo"
                  color="info"
                  size="medium"
                  label="Emergency Contact No"
                  placeholder="Emergency Contact No"
                  onBlur={handleBlur}
                  value={values.emergencyContactNo}
                  onChange={handleChange}
                  error={
                    !!touched.emergencyContactNo && !!errors.emergencyContactNo
                  }
                  helperText={
                    touched.emergencyContactNo && errors.emergencyContactNo
                  }
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  color="info"
                  size="medium"
                  name="validationDocumentType"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.validationDocumentType}
                  label="Select Document"
                  error={
                    !!touched.validationDocumentType &&
                    !!errors.validationDocumentType
                  }
                  helperText={
                    touched.validationDocumentType &&
                    errors.validationDocumentType
                  }
                >
                  <MenuItem value="aadhaarCard">Aadhaar Card</MenuItem>
                  <MenuItem value="drivingLicense">Driving License</MenuItem>
                  <MenuItem value="collegeId">College ID</MenuItem>
                </TextField>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="validationDocumentNo"
                  color="info"
                  size="medium"
                  onBlur={handleBlur}
                  value={values.validationDocumentNo}
                  label="Enter Document No"
                  onChange={handleChange}
                  placeholder="Enter Document No"
                  error={
                    !!touched.validationDocumentNo &&
                    !!errors.validationDocumentNo
                  }
                  helperText={
                    touched.validationDocumentNo && errors.validationDocumentNo
                  }
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Book a Bed
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default BedBookingForm;

BedBookingForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    apartmentDetails: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    pinCode: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    personalContactNo: PropTypes.number.isRequired,
    emergencyContactNo: PropTypes.number.isRequired,
    validationDocumentType: PropTypes.string.isRequired,
    validationDocumentNo: PropTypes.string.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};
