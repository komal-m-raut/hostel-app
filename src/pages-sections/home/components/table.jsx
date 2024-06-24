import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import styled from "@mui/material/styles/styled";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import React from "react";
import useMuiTable from "hooks/useMuiTable"; // CUSTOM ICON COMPONENT
import PropTypes from "prop-types";

import Scrollbar from "components/Scrollbar";
import TableHeader from "./table-head";

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

const DataListTable = ({ dataList, tableHeading }) => {
  const { order, orderBy, handleRequestSort } = useMuiTable({
    listData: dataList,
  });

  return (
    <Scrollbar>
      <TableContainer>
        <Table>
          <TableHeader
            order={order}
            orderBy={orderBy}
            heading={tableHeading}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {dataList.map((floor) =>
              floor.rooms.map((room) =>
                room.beds.map((bed, index) => (
                  <StyledTableRow
                    key={`${floor.floorNo}-${room.roomNo}-${bed}`}
                  >
                    {index === 0 && (
                      <StyledTableCell
                        align="center"
                        rowSpan={room.beds.length}
                      >
                        {floor.floorNo}
                      </StyledTableCell>
                    )}
                    {index === 0 && (
                      <StyledTableCell
                        align="center"
                        rowSpan={room.beds.length}
                      >
                        {room.roomNo}
                      </StyledTableCell>
                    )}
                    <StyledTableCell align="center">{bed}</StyledTableCell>
                  </StyledTableRow>
                ))
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Scrollbar>
  );
};

export default DataListTable;

DataListTable.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ).isRequired,
  tableHeading: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool]))
  ).isRequired,
};
