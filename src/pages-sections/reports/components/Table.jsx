"use client";

import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import React, { useEffect, useState } from "react";
import useMuiTable from "hooks/useMuiTable"; // CUSTOM ICON COMPONENT
import PropTypes from "prop-types";

import Scrollbar from "components/Scrollbar";
import { Box, MenuItem, TextField } from "@mui/material";
import TableHeader from "../../home/components/table-head";
import TableData from "./TableData";
import { FlexBox } from "../../../components/flex-box";

const DataListTable = ({ datalist, tableHeading, viewOption }) => {
  const { order, orderBy, handleRequestSort } = useMuiTable({
    listData: datalist,
  });

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [dailyReportsData, setDailyReportsData] = useState([]);
  const [monthlyReportsData, setMonthlyReportsData] = useState([]);
  const [yearlyReportsData, setYearlyReportsData] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = datalist.filter(
          (item) => item.data.currentDate === selectedDate
        );
        setDailyReportsData(response);
      } catch (error) {
        console.log("Error", error);
      }
    };
    FetchData();
  }, [selectedDate]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        if (selectedMonth && selectedYear) {
          const monthNumber = new Date(
            `${selectedYear}-${selectedMonth}-01`
          ).getMonth();

          const response = datalist.filter((item) => {
            const itemDate = new Date(item.data.currentDate);
            return (
              itemDate.getMonth() === monthNumber &&
              itemDate.getFullYear() === parseInt(selectedYear, 10)
            );
          });

          setMonthlyReportsData(response);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    FetchData();
  }, [selectedMonth, selectedYear, datalist]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        if (selectedYear) {
          const response = datalist.filter((item) => {
            const itemDate = new Date(item.data.currentDate);
            return itemDate.getFullYear() === parseInt(selectedYear, 10);
          });

          setYearlyReportsData(response);
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    FetchData();
  }, [selectedYear, datalist]);

  return (
    <Scrollbar>
      {viewOption === "daily-reports" && (
        <>
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ marginBottom: "16px" }}
          >
            <span>Date:</span>
            <TextField
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{
                shrink: false,
              }}
            />
          </Box>

          <TableContainer>
            <Table>
              <TableHeader
                order={order}
                orderBy={orderBy}
                heading={tableHeading}
                onRequestSort={handleRequestSort}
              />
              <TableData
                datalist={dailyReportsData}
                tableHeading={tableHeading}
              />
            </Table>
          </TableContainer>
        </>
      )}

      {viewOption === "monthly-reports" && (
        <>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            sx={{ marginBottom: "16px" }}
          >
            <TextField
              select
              fullWidth
              name="month"
              label="Month"
              color="info"
              size="medium"
              placeholder="Month"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <MenuItem value="January">January</MenuItem>
              <MenuItem value="February">February</MenuItem>
              <MenuItem value="March">March</MenuItem>
              <MenuItem value="April">April</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="June">June</MenuItem>
              <MenuItem value="July">July</MenuItem>
              <MenuItem value="August">August</MenuItem>
              <MenuItem value="September">September</MenuItem>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="December">December</MenuItem>
            </TextField>
            <TextField
              fullWidth
              name="year"
              label="Year"
              color="info"
              size="medium"
              placeholder="Year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            />
          </Box>
          <TableContainer>
            <Table>
              <TableHeader
                order={order}
                orderBy={orderBy}
                heading={tableHeading}
                onRequestSort={handleRequestSort}
              />
              <TableData
                datalist={monthlyReportsData}
                tableHeading={tableHeading}
              />
            </Table>
          </TableContainer>
        </>
      )}
      {viewOption === "yearly-reports" && (
        <>
          <TextField
            width='50%'
            name="year"
            label="Year"
            color="info"
            size="medium"
            placeholder="Year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            sx={{ marginBottom: "16px" }}
          />
          <TableContainer>
            <Table>
              <TableHeader
                order={order}
                orderBy={orderBy}
                heading={tableHeading}
                onRequestSort={handleRequestSort}
              />
              <TableData
                datalist={yearlyReportsData}
                tableHeading={tableHeading}
              />
            </Table>
          </TableContainer>
        </>
      )}
    </Scrollbar>
  );
};

export default DataListTable;

DataListTable.propTypes = {
  datalist: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date),
      ])
    )
  ).isRequired,
  tableHeading: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
  ).isRequired,
};
