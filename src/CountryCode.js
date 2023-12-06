import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const CountryCode = () => {
  const { control, watch, setValue, setError, handleSubmit } = useForm({
    defaultValues: {
      code: "",
    },
  });
  return (
    <div>
      <Controller
        control={control}
        name="code"
        render={({ field }) => (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={["+91", "+98", "+45", "+404", "+123", "+93"]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        )}
      />
      <TextField placeholder="holder"/>
      {/* <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={["+91", "+98", "+45", "+404", "+123", "+93"]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      /> */}
      {/* <Controller
        control={control}
        name="code"
        render={({ field }) => (
          <Autocomplete rollNavigation onChange={field.onChange}>
            <AutoCompleteInput
              variant="filled"
              onChange={field.onChange}
              value={field.value}
              placeholder="Search..."
              defaultValue={field.value}
            />
            <AutoCompleteList>
              {options.map((option, oid) => (
                <AutoCompleteItem
                  key={`option-${oid}`}
                  value={option}
                  textTransform="capitalize"
                >
                  {option}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          </AutoComplete>
        )}
      /> */}
    </div>
  );
};

export default CountryCode;
