import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; // Import Button component from MUI

import { H2 } from "components/Typography";
import DataListTable from "./components/table";
import { bedData } from "../../utils/constants";
import getAllotment from "../../firebase/allotment/get-allotment";
import { CircularProgress } from "@mui/material";

const AvailabilityTable = () => {
  const [allotmentData, setAllotmentData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filteredBeds, setFilteredBeds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch allotment data
    const fetchAllotmentData = async () => {
      try {
        const response = await getAllotment();
        if (response.status === 200) {
          setAllotmentData(response.data);
        } else {
          console.log("Error in getting allotment data", response.message);
        }
      } catch (error) {
        console.error("Error", error.message);
      }
    };
    fetchAllotmentData();
  }, []);

  // Set default values for the current day and one month later
  useEffect(() => {
    const today = new Date();
    const nextMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      today.getDate()
    );
    setStartDate(today.toISOString().split("T")[0]);
    setDueDate(nextMonth.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    applyFilters(startDate, dueDate);
  }, [startDate, dueDate]);

  const applyFilters = (start, end) => {
    setLoading(true); // Set loading to true when filters are applied
    const filteredData = allotmentData.filter(
      (item) =>
        new Date(item.data.startDate) <= new Date(start) &&
        new Date(start) <= new Date(item.data.dueDate)
    );

    const beds = filteredData.flatMap((item) => {
      const parts = item.data.bedNo.split("-");
      return parts.slice(2).join("-");
    });

    const filteredRooms = bedData.map((floor) => ({
      floorNo: floor.floorNo,
      rooms: floor.rooms.map((room) => ({
        roomNo: room.roomNo,
        beds: room.beds.filter((bed) => {
          const bedNumber = `${room.roomNo}-${bed.split("-")[1]}`;
          return !beds.includes(bedNumber);
        }),
      })),
    }));

    setFilteredBeds(filteredRooms);
    setLoading(false); // Set loading to false when filtering is done
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleApplyFilters = () => {
    applyFilters(startDate, dueDate);
  };

  const tableHeading = [
    {
      id: "floorNo",
      label: "Floor No",
      alignCenter: true,
    },
    {
      id: "roomNo",
      label: "Room No",
      alignCenter: true,
    },
    {
      id: "bedNo",
      label: "Bed No",
      alignCenter: true,
    },
  ];

  return (
    <Box
      id="get"
      sx={{
        backgroundColor: "grey.100",
      }}
    >
      <Container
        sx={{
          py: 18,
        }}
      >
        <H2
          mb={8}
          fontSize={28}
          textAlign="center"
          fontWeight="700"
          color="secondary.main"
          textTransform="uppercase"
        >
          Use the filters to check available rooms
        </H2>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mb: 6,
          }}
        >
          <TextField
            id="startDate"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="dueDate"
            label="Due Date"
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" disabled={loading} onClick={handleApplyFilters}>
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Filter"
            )}
          </Button>{" "}
        </Box>
        <DataListTable dataList={filteredBeds} tableHeading={tableHeading} />
      </Container>
    </Box>
  );
};

export default AvailabilityTable;
