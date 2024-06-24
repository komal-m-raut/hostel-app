'use client';

import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Button, Card, Grid, MenuItem, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { bedData } from '../../utils/constants';

const VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().min(2).required('Name is required'),
  bedNo: yup.string().required('Bed no is required'),
  startDate: yup.date().required('Start date is required'),
  dueDate: yup
    .date()
    .required('Due date is required')
    .min(yup.ref('startDate'), 'Due date must be after start date'),
  deposit: yup.number().required('Deposit is required'),
  paymentMethod: yup.string().required('Payment method is required'),
  status: yup.string().required('Status is required'),
});
const AddAllotmentForm = props => {
  // const [allotmentData, setAllotmentData] = useState([]);

  // useEffect(() => {
  //   const AllAllotmentData = async () => {
  //     try {
  //       const response = await getAllotment();
  //       if (response.status === 200) {
  //         setAllotmentData(response.data);
  //       } else {
  //         console.log('Error in getting allotment data', response.message);
  //       }
  //     } catch (error) {
  //       console.error('Error', error.message);
  //     }
  //   };
  //   AllAllotmentData();
  // }, []);

  // const bedsToBeFiltered = allotmentData.map(item => item.data.bedNo);

  // const filteredBeds = bedData.map(floor => ({
  //   floorNo: floor.floorNo,
  //   rooms: floor.rooms.map(room => ({
  //     roomNo: room.roomNo,
  //     beds: room.beds.filter(bed => {
  //       const bedNumber = `${floor.floorNo}-floor-${room.roomNo}-${bed.split('-')[1]}`;
  //       return !bedsToBeFiltered.includes(bedNumber);
  //     }),
  //   })),
  // }));

  const { initialValues, handleFormSubmit, residents } = props;

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
                  select
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
                >
                  {residents &&
                    residents.map(resident => (
                      <MenuItem
                        key={resident.id}
                        value={`${resident.data.name}-${resident.id}`}
                      >
                        {resident.data.name}-{resident.id}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  name="bedNo"
                  label="bedNo"
                  color="info"
                  size="medium"
                  placeholder="Bed No"
                  value={values.bedNo}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.bedNo && !!errors.bedNo}
                  helperText={touched.bedNo && errors.bedNo}
                >
                  {bedData &&
                    bedData.map(floor =>
                      floor.rooms.map(room =>
                        room.beds.map((bed, index) => (
                          <MenuItem
                            key={index}
                            value={`${floor.floorNo}-floor-${bed}`}
                          >
                            {`${floor.floorNo}-floor-${bed}`}
                          </MenuItem>
                        )),
                      ),
                    )}
                </TextField>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="startDate"
                  label="startDate"
                  type="date"
                  color="info"
                  size="medium"
                  placeholder="Start Date"
                  value={values.startDate}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleChange}
                  error={!!touched.startDate && !!errors.startDate}
                  helperText={touched.startDate && errors.startDate}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="dueDate"
                  label="dueDate"
                  type="date"
                  color="info"
                  size="medium"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Due Date"
                  value={values.dueDate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.dueDate && !!errors.dueDate}
                  helperText={touched.dueDate && errors.dueDate}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="deposit"
                  label="deposit"
                  color="info"
                  size="medium"
                  placeholder="Deposit"
                  value={values.deposit}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.deposit && !!errors.deposit}
                  helperText={touched.deposit && errors.deposit}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  name="paymentMethod"
                  label="paymentMethod"
                  color="info"
                  size="medium"
                  placeholder="Payment Method"
                  value={values.paymentMethod}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.paymentMethod && !!errors.paymentMethod}
                  helperText={touched.paymentMethod && errors.paymentMethod}
                >
                  <MenuItem value="cash">Cash</MenuItem>
                  <MenuItem value="upi">UPI</MenuItem>
                  <MenuItem value="creditCard">Credit Card</MenuItem>
                  <MenuItem value="debitCard">Debit Card</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  AddAllotment
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default AddAllotmentForm;

AddAllotmentForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bedNo: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    dueDate: PropTypes.instanceOf(Date).isRequired,
    deposit: PropTypes.number.isRequired,
    paymentMethod: PropTypes.string.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};
