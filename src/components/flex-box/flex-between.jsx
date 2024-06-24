import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const FlexBetween = ({ children, ...props }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    {...props}
  >
    {children}
  </Box>
);

export default FlexBetween;

FlexBetween.propTypes = {
  children: PropTypes.node.isRequired,
};
