import React, { useState } from 'react'
import useCallbackState from '../utils/UseCallBackState'

const SetErrorToaster = (error,ref) => {
    const [toasterDetails, setToasterDetails] = useCallbackState({
        titleMessage: "",
      descriptionMessage: "",
      messageType: "success"
    })
    console.log("inside set Error Toaster")
    setToasterDetails({
        titleMessage: "Error",
          descriptionMessage:
            error?.response?.data?.error &&
            typeof error.response.data.error === "string"
              ? error.response.data.error
              : "Something Went Wrong!",
          messageType: "error",
    },() => ref.current())
}

export default SetErrorToaster