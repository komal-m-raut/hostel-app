import React from 'react';
import { keywords } from 'utils/constants';
import AddExpenses from '../../pages-sections/add-expenses';

export const metadata = {
  title: 'Add Expenses',
  description: `Form to add transactions in hostel.`,
  authors: [
    {
      name: 'Vedavrat Patwardhan',
      url: 'https://www.linkedin.com/in/vedavrat/',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  keywords,
};

const IndexPage = () => <AddExpenses />;
export default IndexPage;
