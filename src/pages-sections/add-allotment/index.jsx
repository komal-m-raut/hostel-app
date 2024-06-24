'use client';

import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/header';
import AddAllotmentView from './add-allotment-view';

const AddAllotment = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <AddAllotmentView />
    </Box>
  </Box>
);

export default AddAllotment;
