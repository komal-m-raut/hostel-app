import styled from '@mui/material/styles/styled';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel'; // CUSTOM ICON COMPONENT
import React from 'react';
import UpDown from 'icons/UpDown'; // STYLED COMPONENT
import PropTypes from 'prop-types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  padding: '12px 16px',
  color: theme.palette.grey[900],
  ':first-of-type': {
    paddingLeft: 24,
  },
}));

const IconComponent = () => (
  <UpDown
    sx={{
      fontSize: 14,
      ml: 1,
      color: 'grey.600',
    }}
  />
);

const TableHeader = props => {
  const { heading, orderBy, order, onRequestSort } = props;
  return (
    <TableHead
      sx={{
        backgroundColor: 'grey.200',
      }}
    >
      <TableRow>
        {heading.map(headCell => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.alignCenter ? 'center' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              onClick={() => onRequestSort(headCell.id)}
              direction={orderBy === headCell.id ? order : 'asc'}
              sx={{
                '& .MuiTableSortLabel-icon': {
                  opacity: 1,
                },
              }}
              IconComponent={IconComponent}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

TableHeader.propTypes = {
  heading: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      alignCenter: PropTypes.bool,
    }),
  ).isRequired,
  onRequestSort: PropTypes.func.isRequired,
  orderBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};
