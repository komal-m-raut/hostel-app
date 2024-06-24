import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { H3 } from '../../components/Typography';
import DataListTable from './components/Table';
import useDataList from '../../hooks/useDataList';

const AllPaymentsView = () => {
  const {
    allotmentData,
    bookingData,
    rentDetailsData,
    fetchBookingData,
    fetchAllotmentData,
    fetchRentDetailsData,
  } = useDataList();
  const [dataList, setDataList] = useState([]);
  const [selectedRentId, setSelectedRentId] = useState('');
  const tableHeading = [
    {
      id: '1',
      label: 'Name',
      alignCenter: true,
    },
    {
      id: '2',
      label: 'ID No',
      alignCenter: true,
    },
    {
      id: '3',
      label: 'Contact No',
      alignCenter: true,
    },
    {
      id: '4',
      label: 'Bed No',
      alignCenter: true,
    },
    {
      id: '5',
      label: 'Start Date',
      alignCenter: true,
    },
    {
      id: '6',
      label: 'Due Date',
      alignCenter: true,
    },
    {
      id: '7',
      label: 'Monthly Rent',
      alignCenter: true,
    },
    {
      id: '8',
      label: 'Amount Paid',
      alignCenter: true,
    },
    {
      id: '9',
      label: 'Miscellaneous',
      alignCenter: true,
    },
    {
      id: '10',
      label: 'Remark',
      alignCenter: true,
    },
    {
      id: '11',
      label: 'Receivable',
      alignCenter: true,
    },
    {
      id: '12',
      label: 'Update Payment',
      alignCenter: true,
    },
    {
      id: '13',
      label: 'Payment Reminder',
      alignCenter: true,
    },
    {
      id: '14',
      label: 'Details',
      alignCenter: true,
    },
  ];

  const mergeDocuments = (
    mergingBookingData,
    mergingAllotmentData,
    mergingRentDetailsData,
  ) =>
    mergingBookingData.map(booking => {
      const allotment = mergingAllotmentData.find(
        a => a.data.name.split('-')[1] === booking.id,
      );
      const rentDetails = mergingRentDetailsData.find(
        r => r.data.idNo.split('-')[1] === booking.id,
      );

      return {
        ...booking?.data,
        ...allotment?.data,
        ...rentDetails?.data,
      };
    });

  useEffect(() => {
    fetchBookingData();
    fetchAllotmentData();
    fetchRentDetailsData();
  }, [selectedRentId]);

  useEffect(() => {
    if (
      bookingData.length > 0 &&
      allotmentData.length > 0 &&
      rentDetailsData.length > 0
    ) {
      const merged = mergeDocuments(
        bookingData,
        allotmentData,
        rentDetailsData,
      );
      setDataList(merged);
    }
  }, [bookingData, allotmentData, rentDetailsData, selectedRentId]);

  return (
    <Container sx={{ mt: 12, position: 'relative' }}>
      <H3 align="center" mb={2}>
        All Payments
      </H3>
      <DataListTable
        datalist={dataList}
        tableHeading={tableHeading}
        selectedRentId={selectedRentId}
        setSelectedRentId={setSelectedRentId}
      />
    </Container>
  );
};

export default AllPaymentsView;
