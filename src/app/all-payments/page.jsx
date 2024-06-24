import React from 'react';
import { keywords } from 'utils/constants';
import AllPayments from '../../pages-sections/all-payments';

export const metadata = {
  title: 'All Payments',
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

const IndexPage = () => <AllPayments />;

export default IndexPage;
