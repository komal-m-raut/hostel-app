import { useEffect, useState } from 'react';
import getAllotment from '../firebase/allotment/get-allotment';
import getRentDetails from '../firebase/rent-details/get-rent-details';
import getBedBookingData from '../firebase/bookAbed/get-booking';

const useDataList = () => {
  const [allotmentData, setAllotmentData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [rentDetailsData, setRentDetailsData] = useState([]);

  const fetchBookingData = async () => {
    try {
      const response = await getBedBookingData();
      if (response.status === 200) {
        setBookingData(response.data);
      }
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };

  const fetchAllotmentData = async () => {
    try {
      const response = await getAllotment();
      if (response.status === 200) {
        setAllotmentData(response.data);
      }
    } catch (error) {
      console.error('Error fetching allotment data:', error);
    }
  };

  const fetchRentDetailsData = async () => {
    try {
      const response = await getRentDetails();
      if (response.status === 200) {
        setRentDetailsData(response.data);
      }
    } catch (error) {
      console.error('Error fetching rent details data:', error);
    }
  };

  useEffect(() => {
    fetchBookingData();
    fetchAllotmentData();
    fetchRentDetailsData();
  }, []);

  return {
    allotmentData,
    setAllotmentData,
    bookingData,
    setBookingData,
    rentDetailsData,
    setRentDetailsData,
    fetchBookingData,
    fetchAllotmentData,
    fetchRentDetailsData,
  };
};
export default useDataList;
