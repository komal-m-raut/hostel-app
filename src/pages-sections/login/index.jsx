'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import LoginView from './login-view';

const Login = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <LoginView />
    </Box>
  </Box>
);

export default Login;
