'use client';

import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import styled from '@mui/material/styles/styled';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import React, { useEffect, useState } from 'react';
import useMuiTable from 'hooks/useMuiTable';
import PropTypes from 'prop-types';

import Scrollbar from 'components/Scrollbar';
import { Button } from '@mui/material';
import TableHeader from '../../home/components/table-head';
import updateAllotmentById from '../../../firebase/allotment/update-allotment-by-id';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 13,
  paddingTop: 16,
  fontWeight: 600,
  paddingBottom: 16,
  color: theme.palette.grey[600],
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  ':first-of-type': {
    paddingLeft: 24,
  },
}));

const StyledTableRow = styled(TableRow)({
  ':last-child .MuiTableCell-root': {
    border: 0,
  },
});

const DataListTable = ({ datalist, tableHeading, fetchAllotmentData }) => {
  const [filteredDataList, setFilteredDataList] = useState([]);
  const { order, orderBy, handleRequestSort } = useMuiTable({
    listData: datalist,
  });

  useEffect(() => {
    const filteredData = datalist.filter(item => item.data.status === 'live');
    setFilteredDataList(filteredData);
  }, [fetchAllotmentData]);

  const handleClose = async id => {
    console.log(id, 'Id is id');
    try {
      const response = await updateAllotmentById(id);
      if (response.status === 200) {
        fetchAllotmentData();
        console.log(response.data);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
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
            {filteredDataList && filteredDataList.length > 0 ? (
              filteredDataList.map(item => (
                <StyledTableRow key={item.data.bedNo}>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.bedNo}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.name.split('-')[0]}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.startDate}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.dueDate}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.deposit}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    {item.data.paymentMethod}
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={1}>
                    <Button onClick={() => handleClose(item.data.name)}>
                      Close
                    </Button>
                  </StyledTableCell>
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
      ]),
    ),
  ).isRequired,
  tableHeading: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.bool])),
  ).isRequired,
};
