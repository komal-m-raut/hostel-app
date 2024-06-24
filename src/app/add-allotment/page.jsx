import React from 'react';
import { keywords } from 'utils/constants';
import AddAllotment from '../../pages-sections/add-allotment';

export const metadata = {
  title: 'Add Allotment',
  description: `Allotment data of resident on hostel.`,
  authors: [
    {
      name: 'Vedavrat Patwardhan',
      url: 'https://www.linkedin.com/in/vedavrat/',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  keywords,
};

const IndexPage = () => <AddAllotment />;

export default IndexPage;
