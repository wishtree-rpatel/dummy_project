import React from 'react'
import { TextField } from '@mui/material'
import { useController, useForm } from 'react-hook-form'
const Input = ({control, name,myHelper,placeholder,rules,onBlur,multiline}) => {
    const {
        field : {onChange, value, ref},
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: rules,
        defaultValue: ""
    })
    // console.log("error on text inputs: ",error)
  return (
    <TextField
      id={name}
      className={`input-field ${error && 'input-error'}`}
      placeholder={placeholder}
      onChange={onChange} // send value to hook form 
      onBlur={onBlur} // notify when input is touched/blur
      value={value} // input value
      inputRef={ref} // send input ref, so we can focus on input when error appear
      helperText={
        error ? myHelper[name][error.type] : " "
      }
      variant="outlined"
    />
  )
}

export default Input