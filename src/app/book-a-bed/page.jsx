import React from 'react';
import { keywords } from 'utils/constants';
import BookABed from 'pages-sections/book-a-bed';

export const metadata = {
  title: 'Book a Bed',
  description: `Form to book a bed in the hostel.`,
  authors: [
    {
      name: 'Vedavrat Patwardhan',
      url: 'https://www.linkedin.com/in/vedavrat/',
    },
  ],
  viewport: 'width=device-width, initial-scale=1',
  keywords,
};

const BookABedIndex = () => <BookABed />;

export default BookABedIndex;
