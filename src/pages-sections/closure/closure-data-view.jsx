import { Container } from '@mui/material';
import React from 'react';
import { H3 } from '../../components/Typography';
import ClosureData from './closure-data';

const ClosureDataView = () => (
  <Container sx={{ mt: 12, position: 'relative' }}>
    <H3 align="center" mb={2}>
      LEAVING THE ROOM?
    </H3>
    <ClosureData />
  </Container>
);

export default ClosureDataView;
