'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import SignupView from './signup-view';

const Signup = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <SignupView />
    </Box>
  </Box>
);

export default Signup;
