import { Container } from '@mui/material';
import React from 'react';
import { H3 } from '../../components/Typography';
import ReportsData from './reports-data';

const ReportsDataView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Reports Data
    </H3>
    <ReportsData />
  </Container>
);

export default ReportsDataView;
