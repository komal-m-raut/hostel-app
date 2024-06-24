import { Container } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from './login-form';
import { H3 } from '../../components/Typography';
import signIn from '../../firebase/auth/signin';

const LoginView = () => {
  const router = useRouter();
  const INITIAL_VALUES = {
    email: '',
    password: '',
  };

  const handleFormSubmit = async values => {
    try {
      const response = await signIn(values);
      if (response.status === 200) {
        console.log('Login successful', response.data);
        router.push('/');
      } else {
        console.error('Login failed', response.message);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };
  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        Login
      </H3>
      <LoginForm
        initialValues={INITIAL_VALUES}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
};

export default LoginView;
