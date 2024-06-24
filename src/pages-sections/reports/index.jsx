'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import ReportsDataView from './reports-data-view';

const ReportsPage = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <ReportsDataView />
    </Box>
  </Box>
);

export default ReportsPage;
