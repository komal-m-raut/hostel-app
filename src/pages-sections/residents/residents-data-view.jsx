import React from 'react';
import { Container } from '@mui/material';
import ResidentsData from './residents-data';
import { H3 } from '../../components/Typography';

const ResidentsDataView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      Residents Details
    </H3>
    <ResidentsData />
  </Container>
);

export default ResidentsDataView;
