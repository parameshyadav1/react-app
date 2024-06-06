import React from 'react';
import { TextField, Box } from '@mui/material';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Box mt={2}>
      <TextField
        fullWidth
        label="Search"
        variant="outlined"
        onChange={e => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
