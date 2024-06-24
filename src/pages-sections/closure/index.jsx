'use client';

import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/header';
import ClosureDataView from './closure-data-view';

const ClosureData = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <ClosureDataView />
    </Box>
  </Box>
);

export default ClosureData;
