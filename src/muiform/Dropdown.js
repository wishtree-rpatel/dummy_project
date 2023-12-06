import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { useController } from "react-hook-form";
function Dropdown({ control, name, myHelper, placeholder, rules, options }) {
  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  return (
    <FormControl>
      <Select
        displayEmpty
        value={value}
        placeholder={placeholder}
        onChange={onChange} // send value to hook form
        onFocus={(e) => setShowPlaceholder(false)}
        inputRef={ref}
      >
        <MenuItem
          selected
          value=""
          sx={{
            display: !showPlaceholder && "none",
          }}
        >
          {placeholder}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {console.log("error: ", error)}
        {error ? myHelper[name][error.type] : " "}
      </FormHelperText>
    </FormControl>
  );
}

export default Dropdown;
