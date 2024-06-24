import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Button, Card, Grid, MenuItem, TextField } from '@mui/material';
import { bedData } from '../../utils/constants';

const VALIDATION_SCHEMA = yup.object().shape({
  idNo: yup.string().required('Id No is required'),
  bedNo: yup.string().required('Bed No is required'),
  advanceDeposit: yup.number().required('Advance deposit is required'),
  dueDate: yup.date().required('Due date is required'),
  monthlyRent: yup.number().required('Monthly rent is required'),
  miscellaneous: yup.number().required('Miscellaneous is required'),
  remark: yup.string().required('Remark is required'),
  paidAmount: yup.number().required('Paid Amount is required'),
});

const RentDetailsForm = props => {
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
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({
          errors,
          touched,
          values,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  name="idNo"
                  label="IdNo"
                  color="info"
                  size="medium"
                  placeholder="IdNo"
                  value={values.idNo}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.idNo && !!errors.idNo}
                  helperText={touched.idNo && errors.idNo}
                >
                  {residents &&
                    residents.map(resident => (
                      <MenuItem
                        key={resident.id}
                        value={` ${resident.data.name}-${resident.id}`}
                      >
                        {` ${resident.data.name}-${resident.id}`}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  name="bedNo"
                  label="BedNo"
                  color="info"
                  size="medium"
                  placeholder="BedNo"
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
                            {' '}
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
                  name="advanceDeposit"
                  label="AdvanceDeposit"
                  color="info"
                  size="medium"
                  placeholder="AdvanceDeposit"
                  value={values.advanceDeposit}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.advanceDeposit && !!errors.advanceDeposit}
                  helperText={touched.advanceDeposit && errors.advanceDeposit}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="dueDate"
                  label="DueDate"
                  color="info"
                  size="medium"
                  type="date"
                  placeholder="DueDate"
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
                  name="monthlyRent"
                  label="MonthlyRent"
                  color="info"
                  size="medium"
                  placeholder="MonthlyRent"
                  value={values.monthlyRent}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.monthlyRent && !!errors.monthlyRent}
                  helperText={touched.monthlyRent && errors.monthlyRent}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="miscellaneous"
                  label="Miscellaneous"
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
                  name="remark"
                  label="Remark"
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
                <TextField
                  fullWidth
                  name="paidAmount"
                  label="PaidAmount"
                  color="info"
                  size="medium"
                  placeholder="PaidAmount"
                  value={values.paidAmount}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.paidAmount && !!errors.paidAmount}
                  helperText={touched.paidAmount && errors.paidAmount}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Add Rent Details
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default RentDetailsForm;

RentDetailsForm.propTypes = {
  initialValues: PropTypes.shape({
    idNo: PropTypes.string.isRequired,
    bedNo: PropTypes.string.isRequired,
    advanceDeposit: PropTypes.number.isRequired,
    dueDate: PropTypes.instanceOf(Date).isRequired,
    monthlyRent: PropTypes.number.isRequired,
    miscellaneous: PropTypes.number.isRequired,
    remark: PropTypes.string.isRequired,
    paidAmount: PropTypes.number.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};
