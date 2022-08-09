import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('required').min(8,'password length should greater than 8').max(32,'less than 32'),
  cnfPwd: yup.string().min(8).max(15).required('required').oneOf([yup.ref('password')],'Password does not match')
});

const YupValidationForm = () => {
  const customuseForm = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = customuseForm
  const onSubmitHandler = (data) => {
    console.log(data );
    reset();
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmitHandler)}
      style={{ marginLeft: "5px" }}
    >
      <h2>Lets sign you in.</h2>
      <br />

      <input {...register("email")} placeholder="email" type="email" required />
      <p>{errors.email?.message}</p>
      <br />

      <input
        {...register("password")}
        placeholder="password"
        type="password"
        required
      />
      <p>{errors.password?.message}</p>
      <br />
      <input
        {...register('cnfPwd')}
        placeholder="Confirm Password"
        type='password'
        required
      />
      <br/>
      <span>{errors.cnfPwd?.message}</span>
      <br/>
      <label>Accept Terms</label>
      <input type='checkbox' {...register('isAccept')} />
      <p></p>
      <br/>

      <button type="submit">Sign in</button>
    </form>
  );
};

export default YupValidationForm;
