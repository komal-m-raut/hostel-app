import TableRow from '@mui/material/TableRow';
import styled from '@mui/material/styles/styled';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import React from 'react';

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

const TableData = ({ datalist, tableHeading }) => {
  const TotalValueHandler = id => {
    try {
      const document = datalist.find(item => item.data.expenseId === id);
      const total =
        Number(document.data.eBill) +
        Number(document.data.wBill) +
        Number(document.data.municipalTax) +
        Number(document.data.bankEmi) +
        Number(document.data.salary) +
        Number(document.data.maintenance) +
        Number(document.data.laundry) +
        Number(document.data.miscellaneous);
      return total;
    } catch (error) {
      console.error('Error in TotalValueHandler:', error);
      return 0; // Provide a default value or handle the error appropriately
    }
  };

  const totalSum = datalist.reduce(
    (acc, item) => acc + TotalValueHandler(item.data.expenseId),
    0,
  );
  return (
    <TableBody>
      {datalist && datalist.length > 0 ? (
        datalist.map(item => (
          <StyledTableRow key={item.id}>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.currentDate}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.eBill}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.wBill}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.municipalTax}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.bankEmi}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.salary}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.maintenance}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.laundry}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.miscellaneous}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {item.data.remark}
            </StyledTableCell>
            <StyledTableCell align="center" rowSpan={1}>
              {TotalValueHandler(item.data.expenseId)}
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
      <StyledTableRow
        style={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}
        key="total-row"
      >
        <StyledTableCell align="center" colSpan={1}>
          Overall Total
        </StyledTableCell>
        <StyledTableCell align="center" colSpan={10}>
          {totalSum}
        </StyledTableCell>
      </StyledTableRow>
    </TableBody>
  );
};

export default TableData;
