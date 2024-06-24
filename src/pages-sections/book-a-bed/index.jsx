'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from 'components/header';
import BedBookingPageView from './bed-booking';

const BookABed = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <BedBookingPageView />
    </Box>
  </Box>
);

export default BookABed;
