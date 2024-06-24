import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import DataListTable from "./components/Table";
import useDataList from "../../hooks/useDataList";

const ResidentsData = () => {
  const {
    allotmentData,
    bookingData,
    rentDetailsData,
    fetchBookingData,
    fetchAllotmentData,
    fetchRentDetailsData,
  } = useDataList();

  const [liveDataList, setLiveDataList] = useState([]);
  const [leftDataList, setLeftDataList] = useState([]);
  const [leftResidents, setLeftResidents] = useState([]);
  const [liveResidents, setLiveResidents] = useState([]);
  const [leftWithoutPaying, setLeftWithoutPaying] = useState([]);
  const [viewOption, setViewOption] = useState("live");
  const liveTableHeading = [
    {
      id: "1",
      label: "ID No",
      alignCenter: true,
    },
    {
      id: "2",
      label: "Name",
      alignCenter: true,
    },
    {
      id: "3",
      label: "Room",
      alignCenter: true,
    },
    {
      id: "4",
      label: "Resident Details",
      alignCenter: true,
    },
  ];

  const leftTableHeading = [
    {
      id: "1",
      label: "ID No",
      alignCenter: true,
    },
    {
      id: "2",
      label: "Name",
      alignCenter: true,
    },
    {
      id: "3",
      label: "Room",
      alignCenter: true,
    },
    {
      id: "4",
      label: "Resident Details",
      alignCenter: true,
    },
    {
      id: "5",
      label: "Transactional Details",
      alignCenter: true,
    },
  ];

  const mergeDocuments = (
    mergingBookingData,
    filteredData,
    mergingRentDetailsData
  ) =>
    filteredData.map((filter) => {
      const booking = mergingBookingData.find(
        (a) => a.id === filter.data.name.split("-")[1]
      );
      const rentDetails = mergingRentDetailsData.find(
        (r) => r.data.idNo.split("-")[1] === filter.data.name.split("-")[1]
      );

      return {
        ...booking?.data,
        ...filter?.data,
        ...rentDetails?.data,
      };
    });

  useEffect(() => {
    fetchBookingData();
    fetchAllotmentData();
    fetchRentDetailsData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      const response = allotmentData.filter(
        (item) => item.data.status === "live"
      );
      setLiveResidents(response);
    };
    filterData();
  }, [allotmentData]);

  useEffect(() => {
    const filterData = () => {
      const response = allotmentData.filter(
        (item) => item.data.status === "left"
      );
      setLeftResidents(response);
    };
    filterData();
  }, [allotmentData]);

  useEffect(() => {
    if (
      bookingData.length > 0 &&
      leftResidents.length > 0 &&
      rentDetailsData.length > 0
    ) {
      const merged = mergeDocuments(
        bookingData,
        leftResidents,
        rentDetailsData
      );
      setLeftDataList(merged);
    }
  }, [bookingData, leftResidents, rentDetailsData]);

  useEffect(() => {
    if (
      bookingData.length > 0 &&
      liveResidents.length > 0 &&
      rentDetailsData.length > 0
    ) {
      const merged = mergeDocuments(
        bookingData,
        liveResidents,
        rentDetailsData
      );
      setLiveDataList(merged);
    }
  }, [bookingData, liveResidents, rentDetailsData]);

  useEffect(() => {
    const DataWithoutPaid = () => {
      const result = leftDataList.filter((item) => {
        const totalAmount =
          Number(item.deposit) +
          Number(item.monthlyRent) +
          Number(item.miscellaneous);
        const amountPaid =
          Number(item.paidAmount) + Number(item.advanceDeposit);
        const receivable = totalAmount - amountPaid;
        return receivable > 0;
      });
      setLeftWithoutPaying(result);
    };
    DataWithoutPaid();
  }, [leftDataList]);

  const handleToggleView = (option) => {
    setViewOption(option);
  };
  return (
    <Container>
      <Button
        variant={viewOption === "live" ? "contained" : ""}
        onClick={() => handleToggleView("live")}
        sx={{ marginRight: "8px" }}
      >
        Show Live Residents
      </Button>
      <Button
        variant={viewOption === "left" ? "contained" : ""}
        onClick={() => handleToggleView("left")}
        sx={{ marginRight: "8px" }}
      >
        Show Left Residents
      </Button>
      <Button
        variant={viewOption === "leftWithoutPaying" ? "contained" : ""}
        onClick={() => handleToggleView("leftWithoutPaying")}
      >
        Show Left Without Paying Residents
      </Button>
      <Box component="hr" my={1} />{" "}
      {viewOption === "live" && (
        <DataListTable
          datalist={liveDataList}
          tableHeading={liveTableHeading}
          viewOption="live"
        />
      )}
      {viewOption === "left" && (
        <DataListTable
          datalist={leftDataList}
          tableHeading={leftTableHeading}
          viewOption="left"
        />
      )}
      {viewOption === "leftWithoutPaying" && (
        <DataListTable
          datalist={leftWithoutPaying}
          tableHeading={leftTableHeading}
          viewOption="leftWithoutPaying"
        />
      )}
    </Container>
  );
};
export default ResidentsData;
