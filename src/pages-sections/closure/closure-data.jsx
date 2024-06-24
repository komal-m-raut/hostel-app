import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import DataListTable from './components/Table';
import useAllotmentData from '../../hooks/useAllotmentData';

const ClosureData = () => {
  const { allotmentData, fetchAllotmentData } = useAllotmentData();
  const tableHeading = [
    {
      id: '1',
      label: 'Bed No',
      alignCenter: true,
    },
    {
      id: '2',
      label: 'Name',
      alignCenter: true,
    },
    {
      id: '3',
      label: 'Start Date',
      alignCenter: true,
    },
    {
      id: '4',
      label: 'Due Date',
      alignCenter: true,
    },
    {
      id: '5',
      label: 'Deposit',
      alignCenter: true,
    },
    {
      id: '6',
      label: 'Payment Method',
      alignCenter: true,
    },
    {
      id: '7',
      label: 'Action',
      alignCenter: true,
    },
  ];

  useEffect(() => {
    fetchAllotmentData();
  }, [useAllotmentData]);

  return (
    <Container>
      <DataListTable
        datalist={allotmentData}
        tableHeading={tableHeading}
        fetchAllotmentData={fetchAllotmentData}
      />
    </Container>
  );
};
export default ClosureData;
