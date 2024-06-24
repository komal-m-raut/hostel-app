import { useEffect, useState } from 'react';
import getAllotment from '../firebase/allotment/get-allotment';

const useAllotmentData = () => {
  const [allotmentData, setAllotmentData] = useState([]);

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

  useEffect(() => {
    fetchAllotmentData();
  }, []);

  return { allotmentData, setAllotmentData, fetchAllotmentData };
};

export default useAllotmentData;
