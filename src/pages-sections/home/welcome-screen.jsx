import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link as Scroll } from 'react-scroll';
import { H1, Span } from 'components/Typography';
import { FlexBox } from 'components/flex-box';
import Header from 'components/header';

const WelcomeScreen = () => (
  <div>
    <Header />
    <Container
      id="section-1"
      sx={{
        mt: 12,
        position: 'relative',
      }}
    >
      <Box maxWidth="830px" mx="auto" mb={12} textAlign="center">
        <H1 fontSize="40px" mb={3}>
          <Span>Welcome to Hostel management App</Span>
          {/* <Box color="primary.main" lineHeight={1.2}>
              Hostelite
            </Box> */}
        </H1>
        <FlexBox justifyContent="center" mb={3}>
          <Scroll to="get" duration={400} offset={-72 - 16} smooth>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                m: '0.5rem',
              }}
            >
              Check Availability
            </Button>
          </Scroll>
        </FlexBox>
      </Box>
    </Container>
  </div>
);

export default WelcomeScreen;
