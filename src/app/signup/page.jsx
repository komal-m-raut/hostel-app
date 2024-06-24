import React from 'react';
import { keywords } from 'utils/constants';
import Signup from '../../pages-sections/signup';

export const metadata = {
  title: 'Signup in hostel management app',
  description: `Hostel Management platform for hostel owners.`,
  authors: [
    {
      name: 'Vedavrat Patwardhan',
      url: 'https://www.linkedin.com/in/vedavrat/',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  keywords,
};

const IndexPage = () => <Signup />;

export default IndexPage;
