'use client';

import Box from '@mui/material/Box';
import React from 'react';
import WelcomeScreen from './welcome-screen';
import AvailabilityTable from './availability-table';
import Footer from './footer';

const IndexPageView = () => (
  <Box id="top" overflow="hidden" bgcolor="background.paper">
    <WelcomeScreen />
    <AvailabilityTable />
    <Footer />
  </Box>
);

export default IndexPageView;
