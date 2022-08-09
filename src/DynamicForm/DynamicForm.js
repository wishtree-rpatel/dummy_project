import { Grid } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";
import { useForm } from "react-hook-form";
// import { Watch } from "@mui/icons-material";

export default function DynamicForm() {
  const customuseForm = useForm({
    criteriaMode : 'all',
    shouldUseNativeValidation : false
  })
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = customuseForm
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (obj1,str1) => (data) => console.log("On Submit",data,'obj1',obj1,'str1',str1);
  const onChangeHandler = (e) => {
    // console.log('value of e: ',e)
    console.log('change hua hai bhai',e.target.value)
  }
  const obj1 = {
     name : "rajkumar",
     email : 'patel@gmail.com'
  }
  return (
    <form onSubmit={handleSubmit(onSubmit(obj1,'rajkumar patel is software engineer'))}>
      <Grid container m={5}>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <label htmlFor="firstName">First Name</label>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: 'Required', minLength: {value: 10, message:'Invalid field'},  onChange: (e) =>{ onChangeHandler(e)} })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <span>{errors.firstName?.message}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <label htmlFor="lastName">Last Name</label>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <label htmlFor="email">Email</label>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <input id="email" {...register("email",{required:'This field is required',maxLength:{value : 10, message: 'Email can not exceed from length 10'}})} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <span className="">{errors.email?.message}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <label htmlFor="pwd">Password</label>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <input id="pwd" {...register("password",{required:'This field is required'})} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <span className="">{errors.password?.message}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <label htmlFor="cnfPwd">Confirm Password</label>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <input id="cnfPwd" {...register("confirmPassword",{required:'This field is required',validate: (value) => {
                if(watch('password') !== value) return 'password does not match'
              }})} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <span className="">{errors.confirmPassword?.message}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <Grid item>
            <label htmlFor="cars">Choose a car</label>
          </Grid>
          <Grid item>
            <select
              name="cars"
              id="cars"
              {...register("car", { required: true })}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <label htmlFor="terms">Accept Terms</label>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}
            <input type="checkbox"  id="terms" name="AcceptTerms" {...register('isAceept')}/>
            {/* <input type="checkbox" id="company" name="Infosys" value="infosys"/> */}
            {/* <input type="checkbox" id="company" name="Wishtree" value="wishtree"/> */}
              {/* <input id="email" {...register("email",{required:'This field is required',maxLength:{value : 10, message: 'Email can not exceed from length 10'}})} /> */}
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <span className="">{errors.email?.message}</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} my={2}>
          <input type="submit" />
        </Grid>
      </Grid>
    </form>
  );
}
