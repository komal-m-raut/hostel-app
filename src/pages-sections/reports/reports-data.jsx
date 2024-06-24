import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import DataListTable from "./components/Table";
import getExpense from "../../firebase/expenses/get-expenses";

const ReportsData = () => {
  const [dataList, setDataList] = useState([]);
  const [viewOption, setViewOption] = useState("daily-reports");

  const tableHeading = [
    {
      id: "1",
      label: "Date",
      alignCenter: true,
    },
    {
      id: "2",
      label: "Electricity Bill",
      alignCenter: true,
    },
    {
      id: "3",
      label: "Water Bill",
      alignCenter: true,
    },
    {
      id: "4",
      label: "Municipal Tax",
      alignCenter: true,
    },
    {
      id: "5",
      label: "Bank EMI",
      alignCenter: true,
    },
    {
      id: "6",
      label: "Salary",
      alignCenter: true,
    },
    {
      id: "7",
      label: "Maintenance",
      alignCenter: true,
    },
    {
      id: "8",
      label: "Laundry",
      alignCenter: true,
    },
    {
      id: "9",
      label: "Miscellaneous",
      alignCenter: true,
    },
    {
      id: "10",
      label: "Remark",
      alignCenter: true,
    },
    {
      id: "11",
      label: "Total",
      alignCenter: true,
    },
  ];

  useEffect(() => {
    const ExpenseData = async () => {
      try {
        const response = await getExpense();
        if (response.status === 200) {
          setDataList(response.data);
        } else {
          console.log("Error in getting expenses", response.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    ExpenseData();
  }, []);

  const toggleViewOption = (option) => {
    setViewOption(option);
  };
  return (
    <Container>
      <Button
        onClick={() => toggleViewOption("daily-reports")}
        variant={viewOption === "daily-reports" ? "contained" : ""}
        sx={{ marginRight: "8px" }}
      >
        Daily Reports
      </Button>
      <Button
        onClick={() => toggleViewOption("monthly-reports")}
        variant={viewOption === "monthly-reports" ? "contained" : ""}
        sx={{ marginRight: "8px" }}
      >
        Monthly Reports
      </Button>
      <Button
        onClick={() => toggleViewOption("yearly-reports")}
        variant={viewOption === "yearly-reports" ? "contained" : ""}
      >
        Yearly Reports
      </Button>
      <Box component="hr" mt={1} mb={2} />{" "}
      {viewOption === "daily-reports" && (
        <DataListTable
          datalist={dataList}
          tableHeading={tableHeading}
          viewOption="daily-reports"
        />
      )}
      {viewOption === "monthly-reports" && (
        <DataListTable
          datalist={dataList}
          tableHeading={tableHeading}
          viewOption="monthly-reports"
        />
      )}
      {viewOption === "yearly-reports" && (
        <DataListTable
          datalist={dataList}
          tableHeading={tableHeading}
          viewOption="yearly-reports"
        />
      )}
    </Container>
  );
};
export default ReportsData;
