'use client';

import React from 'react';
import { Box } from '@mui/material';
import AllPaymentsView from './all-payments-view';
import Header from '../../components/header';

const AllPayments = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <AllPaymentsView />
    </Box>
  </Box>
);

export default AllPayments;
