import React from 'react';
import { keywords } from 'utils/constants';
import ReportsPage from '../../pages-sections/reports';

export const metadata = {
  title: 'Reports Data',
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

const IndexPage = () => <ReportsPage />;

export default IndexPage;
