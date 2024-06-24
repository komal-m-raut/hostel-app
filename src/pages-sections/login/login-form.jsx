import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Card, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';

const VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Incorrect email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = props => {
  const { initialValues, handleFormSubmit } = props;
  return (
    <Card
      sx={{
        p: 6,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
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
                  name="password"
                  label="Password"
                  color="info"
                  size="medium"
                  placeholder="Password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Typography variant="body2">
                  {`Don't`} have an account?{' '}
                  <Link href="/signup">Go to signup</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};
