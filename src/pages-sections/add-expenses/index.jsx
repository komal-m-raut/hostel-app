'use client';

import React from 'react';
import { Box } from '@mui/material';
import Header from 'components/header';
import AddExpensesView from './add-expenses-view';

const AddExpenses = () => (
  <Box bgcolor="background.paper" minHeight="100vh">
    <Header />
    <Box maxWidth={1280} margin="auto">
      <AddExpensesView />
    </Box>
  </Box>
);

export default AddExpenses;
