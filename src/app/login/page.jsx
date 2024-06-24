import React from 'react';
import { keywords } from 'utils/constants';
import Login from '../../pages-sections/login';

export const metadata = {
  title: 'Login in hostel management app',
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

const IndexPage = () => <Login />;

export default IndexPage;
