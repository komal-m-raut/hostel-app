import React from 'react';
import { keywords } from 'utils/constants';
import ClosureData from '../../pages-sections/closure';

export const metadata = {
  title: 'Closure Details',
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

const IndexPage = () => <ClosureData />;

export default IndexPage;
