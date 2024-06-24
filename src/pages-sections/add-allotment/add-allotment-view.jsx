import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import AddAllotmentForm from './add-allotment-form';
import { H3 } from '../../components/Typography';
import getBedBookingData from '../../firebase/bookAbed/get-booking';
import addAllotment from '../../firebase/allotment/add-allotment';

const AddAllotmentView = () => {
  const router = useRouter();
  const [residents, setResidents] = useState('');

  const INITIAL_VALUES = {
    name: '',
    bedNo: '',
    startDate: new Date(),
    dueDate: new Date(),
    deposit: 0,
    paymentMethod: '',
    status: 'live',
  };

  useEffect(() => {
    const GetAllResidents = async () => {
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
    GetAllResidents();
  }, []);
  const handleFormSubmit = async values => {
    console.log(values, 'Add allotment data');
    try {
      const response = await addAllotment(values);
      if (response.status === 200) {
        console.log('Allotment data is added', response.data);
        router.push('/rent-details');
      } else {
        console.log('Error in getting allotments', response.message);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        AddAllotment
      </H3>
      <AddAllotmentForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
        residents={residents}
      />
    </Container>
  );
};
export default AddAllotmentView;
