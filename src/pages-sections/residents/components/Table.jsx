"use client";

import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import styled from "@mui/material/styles/styled";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import React, { useState } from "react";
import useMuiTable from "hooks/useMuiTable"; // CUSTOM ICON COMPONENT
import PropTypes from "prop-types";

import Scrollbar from "components/Scrollbar";
import { Button, Dialog, DialogContentText, DialogTitle } from "@mui/material";
import TableHeader from "../../home/components/table-head";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  paddingTop: 16,
  fontWeight: 600,
  paddingBottom: 16,
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  ":first-of-type": {
    paddingLeft: 24,
  },
}));

const StyledTableRow = styled(TableRow)({
  ":last-child .MuiTableCell-root": {
    border: 0,
  },
});

const SearchContainer = styled("div")({
  marginBottom: "16px",
  "& label": {
    marginRight: "8px",
  },
  "& input": {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "8px",
    minWidth: "200px",
  },
});

const DataListTable = ({ datalist, tableHeading, viewOption }) => {
  const { order, orderBy, handleRequestSort } = useMuiTable({
    listData: datalist,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [requiredDoc, setRequiredDoc] = useState(null);
  const [searchItem, setSearchItem] = useState("");

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleTransactionModalClose = () => {
    setIsTransactionModalOpen(false);
  };

  const handleModalOpen = (idNo) => {
    setIsModalOpen(true);
    const document = datalist.find((item) => item.idNo === idNo);
    console.log(document, "This is doc");
    if (document) {
      setRequiredDoc(document);
    } else {
      console.log("Error in getting document");
    }
  };

  const handleTransactionModalOpen = (idNo) => {
    setIsTransactionModalOpen(true);
    const document = datalist.find((item) => item.idNo === idNo);
    if (document) {
      setRequiredDoc(document);
    } else {
      console.log("Error in getting document");
    }
  };

  console.log(datalist, "Datalist is here");

  const filteredData = datalist.filter((item) =>
    item.name.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <>
      <Scrollbar>
        <SearchContainer>
          <form>
            <span>Search:</span>
            <input
              type="text"
              name="search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              style={{marginLeft: "4px"}}
            />
          </form>
        </SearchContainer>
        <TableContainer>
          <Table>
            <TableHeader
              order={order}
              orderBy={orderBy}
              heading={tableHeading}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((data) => (
                  <StyledTableRow key={data.email}>
                    <StyledTableCell align="center" rowSpan={1}>
                      {data.name.split("-")[1]}
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      {data.name.split("-")[0]}
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      {data.bedNo}
                    </StyledTableCell>
                    <StyledTableCell align="center" rowSpan={1}>
                      <Button onClick={() => handleModalOpen(data.idNo)}>
                        Resident Details
                      </Button>
                    </StyledTableCell>

                    {(viewOption === "left" ||
                      viewOption === "leftWithoutPaying") && (
                      <StyledTableCell align="center" rowSpan={1}>
                        <Button
                          onClick={() => handleTransactionModalOpen(data.idNo)}
                        >
                          Transaction Details
                        </Button>
                      </StyledTableCell>
                    )}
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={tableHeading.length} align="center">
                    No data available
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>
      <Dialog open={isModalOpen} onClose={handleModalClose}>
        <DialogTitle>Resident Details</DialogTitle>
        {requiredDoc && (
          <>
            <DialogContentText>
              Name:{requiredDoc.name.split("-")[0]}
            </DialogContentText>
            <DialogContentText>Age:{requiredDoc.age}</DialogContentText>
            <DialogContentText>
              Personal Contact:{requiredDoc.personalContactNo}
            </DialogContentText>
            <DialogContentText>
              Emergency Contact:{requiredDoc.emergencyContactNo}
            </DialogContentText>
            <DialogContentText>
              Locality:{requiredDoc.locality}
            </DialogContentText>
            <DialogContentText>City:{requiredDoc.city}</DialogContentText>
            <DialogContentText>State:{requiredDoc.state}</DialogContentText>
            <DialogContentText>Email:{requiredDoc.email}</DialogContentText>
            <DialogContentText>
              Validation Document:{requiredDoc.validationDocumentType}
            </DialogContentText>
            <DialogContentText>
              Validation Document No:{requiredDoc.validationDocumentNo}
            </DialogContentText>
          </>
        )}
      </Dialog>
      <Dialog
        open={isTransactionModalOpen}
        onClose={handleTransactionModalClose}
      >
        <DialogTitle>Resident Details</DialogTitle>
        {requiredDoc && (
          <>
            <DialogContentText>Deposit:{requiredDoc.deposit}</DialogContentText>
            <DialogContentText>
              Paid Amount:{requiredDoc.paidAmount}
            </DialogContentText>
            <DialogContentText>
              Advance Deposit:{requiredDoc.advanceDeposit}
            </DialogContentText>
            <DialogContentText>
              Monthly Rent:{requiredDoc.monthlyRent}
            </DialogContentText>
            <DialogContentText>
              Miscellaneous:{requiredDoc.miscellaneous}
            </DialogContentText>
          </>
        )}
      </Dialog>
    </>
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
  viewOption: PropTypes.string.isRequired,
};
