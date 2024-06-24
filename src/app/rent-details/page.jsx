import React from 'react';
import { keywords } from 'utils/constants';
import RentDetails from '../../pages-sections/rent-details';

export const metadata = {
  title: 'Rent Details',
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

const IndexPage = () => <RentDetails />;

export default IndexPage;
