import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const FlexRowCenter = ({ children, ...props }) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>
);

export default FlexRowCenter;

FlexRowCenter.propTypes = {
  children: PropTypes.node.isRequired,
};
