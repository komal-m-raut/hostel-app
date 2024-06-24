import Container from '@mui/material/Container'; // MUI ICON COMPONENTS

import LinkedIn from '@mui/icons-material/LinkedIn';
import Facebook from '@mui/icons-material/Facebook';
import Favorite from '@mui/icons-material/Favorite';
import Instagram from '@mui/icons-material/Instagram'; // CUSTOM COMPONENT
import React from 'react';
import { FlexBox } from 'components/flex-box';

const iconList = [
  {
    icon: Facebook,
    url: 'https://www.facebook.com/logicnsk/',
  },
  {
    icon: LinkedIn,
    url: 'www.linkedin.com/in/logicsystems',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/logicsystemsnashik/',
  },
];
const Footer = () => (
  <Container
    sx={{
      py: '4rem',
    }}
  >
    <FlexBox justifyContent="space-between" flexWrap="wrap">
      <FlexBox className="flex" alignItems="center">
        Developed with{' '}
        <Favorite
          fontSize="small"
          color="primary"
          sx={{
            mx: '0.5rem',
            fontSize: '16px',
          }}
        />{' '}
        & Care by &nbsp;{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vedavrat/"
          rel="noreferrer"
        >
          Logic Systems
        </a>
      </FlexBox>

      <FlexBox className="flex">
        {iconList.map((item, ind) => (
          <a href={item.url} target="_blank" rel="noreferrer" key={item.url}>
            <span aria-label={`icon-${ind}`}>
              <item.icon
                color="inherit"
                sx={{
                  mx: '0.5rem',
                  fontSize: '1.25rem',
                  transition: '0.2s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              />
            </span>
          </a>
        ))}
      </FlexBox>
    </FlexBox>
  </Container>
);

export default Footer;
