import { Container } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import SignupForm from './signup-form';
import { H3 } from '../../components/Typography';
import signUp from '../../firebase/auth/signup';

const SignupView = () => {
  const router = useRouter();
  const INITIAL_VALUES = {
    email: '',
    password: '',
  };

  const handleFormSubmit = async values => {
    try {
      const response = await signUp(values);
      if (response.status === 200) {
        console.log('Signup successful', response.data);
        router.push('/login');
      } else {
        console.error('Signup failed', response.message);
      }
    } catch (error) {
      console.error('Error during signup', error);
    }
  };
  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        Signup
      </H3>
      <SignupForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default SignupView;
