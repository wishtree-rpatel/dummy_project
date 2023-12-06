import { ErrorSharp } from "@mui/icons-material";
import {
  Autocomplete,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Dropdown from "./Dropdown";
import Input from "./Input";

const myHelper = {
  memberCompany: {
    required: "Enter Member Company",
    maxLength: "max char limit exceed",
    pattern: "Invalid format",
  },
  email: {
    required: "Enter EmailId",
    maxLength: "max char limit exceed",
  },
  pwd: {
    required: "Enter Password",
    minLength: "min 6 char",
    maxLength: "max 15 char",
    pattern: "Invalid format",
  },
  cnfPwd: {
    required: "Enter Password",
    minLength: "min 6 char",
    maxLength: "max 15 char",
    pattern: "Invalid format",
    validate: "password mismatch",
  },
  category: {
    required: "Required field",
  },
};

const MuiForm = () => {
  const [city, setCity] = useState("")
  const { control, watch, setValue, setError, handleSubmit } = useForm({
    defaultValues: {
      memberCompany: "",
      email: "",
      pwd: "",
      cnfPwd: "",
      companyType: "external",
      category: "",
      age: 10,
      code: "",
      countryCode: "",
    },
  });
  const onCityChangeHandler = (e) => {setCity(e.target.value)}
  const onSubmit = (data) => {
    console.log("category: ", data.category);
    console.log("onSubmit");
    console.log(data);
  };
  console.log("city: ",city)
  return (
    <div className="page-wrapper">
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="card-wrapper">
              <div className="flex-between">
                <div className="card-form-field">
                  <div className="form-group">
                    <label htmlFor="membercompany">
                      Member Company <span className="mandatory">*</span>
                    </label>
                    <Input
                      control={control}
                      name="memberCompany"
                      myHelper={myHelper}
                      rules={{
                        required: true,
                        maxLength: 50,
                        pattern: /^[A-Za-z]+[A-Za-z ]*$/,
                      }}
                      placeholder="Enter member company"
                    />
                    {/* <Controller
                      name="memberCompany"
                      rules={{ required: true, maxLength: 50 }}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <TextField
                          {...field}
                          // className="input-field input-error"
                          className={`input-field ${error && 'input-error'}`}
                          id="outlined-basic"
                          placeholder="Enter member company"
                          helperText={
                            error ? error.type : " "
                          }
                          variant="outlined"
                        />
                      )}
                    /> */}
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group flex-between">
                    <label htmlFor="email">
                      Email <span className="mandatory">*</span>
                    </label>
                    <Input
                      control={control}
                      name="email"
                      myHelper={myHelper}
                      rules={{ required: true, maxLength: 50 }}
                      placeholder="Enter Email"
                      onBlur={(e) => setValue("email", e.target.value.trim())}
                    />

                    {/* <Controller
                      name="email"
                      rules={{required : true , maxLength:  50 }}
                      control={control}
                      render={({ field , fieldState: {error} }) => (
                        <TextField
                          {...field}
                          className={`input-field ${error && 'input-error'}`}
                          id="outlined-basic"
                          placeholder="Enter Email"
                          helperText={
                            error ? myHelper.email[error.type] : " "
                          }
                          variant="outlined"
                        />
                      )}
                    /> */}
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group">
                    <label htmlFor="pwd">
                      Password <span className="mandatory">*</span>
                    </label>
                    <Input
                      control={control}
                      name="pwd"
                      myHelper={myHelper}
                      rules={{
                        required: true,
                        maxLength: 15,
                        minLength: 2,
                        pattern: /^(?=.*[A-Z])[A-Za-z0-9]+$/,
                      }}
                      placeholder="Enter Password"
                    />
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group">
                    <label htmlFor="cnfPwd">
                      Confirm Password <span className="mandatory">*</span>
                    </label>
                    <Input
                      control={control}
                      name="cnfPwd"
                      myHelper={myHelper}
                      placeholder="Enter Confirm Password"
                      rules={{
                        required: true,
                        maxLength: 15,
                        minLength: 2,
                        pattern: /^(?=.*[A-Z])[A-Za-z0-9]+$/,
                        validate: (value) => {
                          if (value !== watch("pwd")) {
                            return "password mismatch";
                          }
                        },
                      }}
                    />
                    {/* <Controller
                      name="cnfPwd"
                      rules={{required: true, maxLength: 15, minLength: 2, pattern: /^(?=.*[A-Z])[A-Za-z0-9]+$/, validate: (value) => {
                        if(value !== watch('pwd')){
                          return 'password mismatch'
                        }
                      }}}
                      control={control}
                      render={({ field ,fieldState: {error}}) => (
                        <TextField
                          {...field}
                          // value={error?.type}
                          className={`input-field ${error && 'input-error'}`}
                          id="outlined-basic"
                          placeholder="Confirm Password"
                          variant="outlined"
                          helperText={error ? myHelper.cnfPwd[error.type] : " "}
                        />
                      )}
                    /> */}
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group dropdown-field">
                    <label htmlFor="category">
                      Category <span className="mandatory">*</span>
                    </label>
                    <Dropdown
                      control={control}
                      rules={{ required: true }}
                      myHelper={myHelper}
                      name="category"
                      placeholder="Select Category"
                      options={["Manufacrer", "FMCG", "Retailar", "Nothing"]}
                    />
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group">
                    <label htmlFor="company-type">Company Type</label>
                    <div className="radio-btn-field">
                      <Controller
                        name="companyType"
                        rules={{ required: "Required Field" }}
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            {...field}
                            aria-labelledby="demo-radio-buttons-group-label"
                            // defaultValue="external"
                            name="radio-buttons-group"
                            className="radio-btn"
                          >
                            <FormControlLabel
                              value="internal"
                              control={<Radio />}
                              label="Internal"
                            />
                            <FormControlLabel
                              value="external"
                              control={<Radio />}
                              label="External"
                            />
                          </RadioGroup>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="card-form-field">
                  <div className="form-group">
                    <Autocomplete
                      sx={{ width: 200 }}
                      options={["+91", "+92", "+98", "+404", "+95"]}
                      name="countryCode"
                      autoHighlight
                      placeholder="Select country code"
                      getOptionLabel={(country) => country}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{
                            "& > img": {
                              mr: 2,
                              flexShrink: 0,
                            },
                          }}
                          {...props}
                        >
                          {option}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <Controller
                          control={control}
                          // name="countryCode"
                          render={({ field, fieldState: { error } }) => (
                            <TextField
                              {...field}
                              {...params}
                              inputProps={{
                                ...params.inputProps,
                                // autoComplete: "", // disable autocomplete and autofill
                              }}
                              autoComplete={false}
                              placeholder={"Select country code"}
                              // helperText={
                              //   error.countryCode
                              //     ? error?.countryCode.message
                              //     : " "
                              // }
                            />
                          )}
                        />
                      )}
                    />
                  </div>
                </div> */}
                <div className="card-form-field">
                  <div className="form-group">
                    <Controller
                      control={control}
                      name="code"
                      render={({ field }) => (
                        <Autocomplete
                          {...field}
                          disablePortal
                          autoComplete
                          freeSolo
                          id="combo-box-demo"
                          options={["+91", "+98", "+45", "+404", "+123", "+93"]}
                          // getOptionLabel={(option) => option}
                          sx={{ width: 300 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                // type: 'search'
                              }}
                              placeholder="Select code"
                            />
                          )}
                          // onChange={(e) => console.log("Value", e.target.value)}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group">
                    <Autocomplete
                      
                      id="free-solo-demo"
                      freeSolo
                      options={["Paris","London","New york"]}
                      renderInput={(params) => (
                        <>
                        {/* {console.log("params: ",params)} */}
                        <TextField  {...params} name="city" value={city} onChange={onCityChangeHandler}/>
                        </>
                      )}
                    />
                  </div>
                </div>
                <div className="form-btn flex-between add-members-btn">
                  <button type="reset" className="secondary-button mr-10">
                    Cancel
                  </button>
                  <button type="submit" className="primary-button add-button">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MuiForm;
