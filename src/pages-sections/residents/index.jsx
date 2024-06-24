'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import ResidentsDataView from './residents-data-view';

const Residents = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <ResidentsDataView />
    </Box>
  </Box>
);

export default Residents;
