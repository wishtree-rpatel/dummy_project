import React from "react";
import { TextField, MenuItem } from '@mui/material'

const AutoComplete = () => {
  let data = ["apple", "orange", "banana", "pineapple"];
  return (
    <div>
      <TextField
        select
        size="small"
        fullWidth
        SelectProps={{ MenuProps: { sx: { maxHeight: 247 } } }}
      >
        {data.map((text) => (
          <MenuItem value={text}>{text}</MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default AutoComplete;
