import { ErrorSharp } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const myHelper = {
  memberCompany: {
    required: "Enter Member Company",
    maxLength: "max char limit exceed",
  },
  email:{
    required: "Enter EmailId",
    maxLength: "max char limit exceed"
  },
  pwd:{
    required: "Enter Password",
    minLength: "min 6 char",
    maxLength: "max 15 char",
    pattern: "Invalid format"
  },
  cnfPwd:{
    required: "Enter Password",
    minLength: "min 6 char",
    maxLength: "max 15 char",
    pattern: "Invalid format",
    validate: "password mismatch"
  }
};

const MuiForm = () => {
  const { control, watch, handleSubmit } = useForm({
    defaultValues: {
      memberCompany: "",
      email: "",
      pwd: "",
      cnfPwd: "",
      companyType: "external",
    },
  });
  const onSubmit = (data) => {
    console.log("onSubmit");
    console.log(data);
  };
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
                    <Controller
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
                    />
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group flex-between">
                    <label htmlFor="email">
                      Email <span className="mandatory">*</span>
                    </label>
                    <Controller
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
                    />
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group">
                    <label htmlFor="pwd">
                      Password <span className="mandatory">*</span>
                    </label>
                    <Controller
                      name="pwd"
                      rules={{required: true, maxLength: 15, minLength: 2, pattern: /^(?=.*[A-Z])[A-Za-z0-9]+$/}}
                      control={control}
                      render={({ field, fieldState: {error} }) => (
                        <TextField
                          {...field}
                          className={`input-field ${error && 'input-error'}`}
                          id="outlined-basic"
                          placeholder="Password"
                          variant="outlined"
                          helperText={error ? myHelper.pwd[error.type]: " "}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="card-form-field">
                  <div className="form-group">
                    <label htmlFor="cnfPwd">
                      Confirm Password <span className="mandatory">*</span>
                    </label>
                    <Controller
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
