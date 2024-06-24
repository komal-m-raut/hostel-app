'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from 'components/header';
import RentDetailsView from './rent-details-view';

const RentDetails = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <RentDetailsView />
    </Box>
  </Box>
);

export default RentDetails;
