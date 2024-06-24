'use client';

import React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import * as yup from 'yup'; // GLOBAL CUSTOM COMPONENTS
import PropTypes from 'prop-types';

const VALIDATION_SCHEMA = yup.object().shape({
  eBill: yup.number().required('Electricity bill is required'),
  wBill: yup.number().required('Water bill is required'),
  municipalTax: yup.number().required('Municipal tax is required'),
  bankEmi: yup.number().required('Bank emi is required'),
  salary: yup.number().required('Salary is required'),
  maintenance: yup.number().required('Maintenance is required'),
  laundry: yup.number().required('Laundry is required'),
  miscellaneous: yup.number().required('Miscellaneous is required'),
  remark: yup.string().required('Remark is required'),
});

const ExpensesForm = props => {
  const { initialValues, handleFormSubmit } = props;
  return (
    <Card
      sx={{
        p: 6,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
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
                  type="number"
                  name="eBill"
                  label="eBill"
                  color="info"
                  size="medium"
                  placeholder="Electricity Bill"
                  value={values.eBill}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.eBill && !!errors.eBill}
                  helperText={touched.eBill && errors.eBill}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="wBill"
                  label="wBill"
                  color="info"
                  size="medium"
                  placeholder="Water Bill"
                  value={values.wBill}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.wBill && !!errors.wBill}
                  helperText={touched.wBill && errors.wBill}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="municipalTax"
                  label="municipalTax"
                  color="info"
                  size="medium"
                  placeholder="Municipal Tax"
                  value={values.municipalTax}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.municipalTax && !!errors.municipalTax}
                  helperText={touched.municipalTax && errors.municipalTax}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="bankEmi"
                  label="bankEmi"
                  color="info"
                  size="medium"
                  placeholder="Bank Emi"
                  value={values.bankEmi}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.bankEmi && !!errors.bankEmi}
                  helperText={touched.bankEmi && errors.bankEmi}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="salary"
                  label="salary"
                  color="info"
                  size="medium"
                  placeholder="Salary"
                  value={values.salary}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.salary && !!errors.salary}
                  helperText={touched.salary && errors.salary}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="maintenance"
                  label="maintenance"
                  color="info"
                  size="medium"
                  placeholder="Maintenance"
                  value={values.maintenance}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.maintenance && !!errors.maintenance}
                  helperText={touched.maintenance && errors.maintenance}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="laundry"
                  label="laundry"
                  color="info"
                  size="medium"
                  placeholder="Laundry"
                  value={values.laundry}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.laundry && !!errors.laundry}
                  helperText={touched.laundry && errors.laundry}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="miscellaneous"
                  label="miscellaneous"
                  color="info"
                  size="medium"
                  placeholder="Miscellaneous"
                  value={values.miscellaneous}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.miscellaneous && !!errors.miscellaneous}
                  helperText={touched.miscellaneous && errors.miscellaneous}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="string"
                  name="remark"
                  label="remark"
                  color="info"
                  size="medium"
                  placeholder="Remark"
                  value={values.remark}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.remark && !!errors.remark}
                  helperText={touched.remark && errors.remark}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Add Expenses
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default ExpensesForm;

ExpensesForm.propTypes = {
  initialValues: PropTypes.shape({
    eBill: PropTypes.number.isRequired,
    wWill: PropTypes.number.isRequired,
    municipalTax: PropTypes.number.isRequired,
    bankEmi: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    maintenance: PropTypes.number.isRequired,
    laundry: PropTypes.number.isRequired,
    miscellaneous: PropTypes.number.isRequired,
    remark: PropTypes.string.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};
