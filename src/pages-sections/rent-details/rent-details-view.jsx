import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { H3 } from '../../components/Typography';
import RentDetailsForm from './rent-details-form';
import addRent from '../../firebase/rent-details/add-rent';
import getBedBookingData from '../../firebase/bookAbed/get-booking';

const RentDetailsView = () => {
  const router = useRouter();
  const [residents, setResidents] = useState('');
  const initialValues = {
    idNo: '',
    bedNo: '',
    advanceDeposit: 0,
    dueDate: new Date(),
    monthlyRent: 0,
    miscellaneous: 0,
    remark: '',
    paidAmount: 0,
  };

  useEffect(() => {
    const AllResidents = async () => {
      try {
        const response = await getBedBookingData();
        if (response.status === 200) {
          setResidents(response.data);
        } else {
          console.log('Error', response.message);
        }
      } catch (error) {
        console.log('Error', error);
      }
    };
    AllResidents();
  }, []);
  const handleFormSubmit = async values => {
    console.log(values);
    try {
      const response = await addRent(values);
      if (response.status === 200) {
        console.log('Rent details added successfully', response.data);
        router.push('/');
      } else {
        console.log('Error in adding rent details', response.message);
      }
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };
  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        Rent Details
      </H3>
      <RentDetailsForm
        initialValues={initialValues}
        handleFormSubmit={handleFormSubmit}
        residents={residents}
      />
    </Container>
  );
};
export default RentDetailsView;
