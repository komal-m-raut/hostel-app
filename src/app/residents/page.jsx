import React from 'react';
import { keywords } from 'utils/constants';
import Residents from '../../pages-sections/residents';

export const metadata = {
  title: 'Residents Details',
  description: `Residents details in hostel.`,
  authors: [
    {
      name: 'Vedavrat Patwardhan',
      url: 'https://www.linkedin.com/in/vedavrat/',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  keywords,
};

const IndexPage = () => <Residents />;
export default IndexPage;
