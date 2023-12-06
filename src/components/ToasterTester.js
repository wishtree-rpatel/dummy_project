import React, { useState } from "react";
import useCallbackState from "../utils/UseCallBackState";
import SetErrorToaster from "./setErrorToaster";
import Toaster from "./Toasters";

const ToasterTester = () => {
  const myRef = React.useRef({});
  const [toasterDetails, setToasterDetails] = useCallbackState({
    titleMessage: "Alert!",
    descriptionMessage: "Role marked as inactive, from today onward all the sub admin to assigned this role would no lon",
    messageType: "error"
  })
  // const [isInactive, setIsInActive] = useState(false)
  const onClickHandler = () => {
    const error = {
      response :{
        data:{
          error: "got it my way"
        }
      }
    }
    // setToasterDetails({
    //   titleMessage: "Sucess",
    //   descriptionMessage: "role created successfully!",
    //   messageType: "success"
    // },() =>  myRef.current())
   
  }
  const onClickTestHandler = () => {
    setToasterDetails({titleMessage:"Success",descriptionMessage:"New Role Updated",messageType:"success"})
  }
  const onClickTestHandler1 = () =>{  
    setToasterDetails({titleMessage:"Success",descriptionMessage:"Role marked as inactive, from today onward all the sub admin to assigned this role would no longer access the system!",messageType:"error"})
    
  }
  // console.log("isInactive",isInactive)
  return (
    <div>
      <Toaster
      myRef={myRef}
      titleMessage={toasterDetails.titleMessage}
      descriptionMessage={toasterDetails.descriptionMessage}
      messageType={toasterDetails.messageType}
      />
      {/* {console.log("render toaster tester")} */}
      <button onClick={onClickHandler} className="mr-10">Show Toast !</button>
      {/* <button onClick={onClickTestHandler} className="mr-10">Test!</button> */}
      {/* <button onClick={onClickTestHandler1}>Test1!</button> */}
    </div>
  );
};

export default ToasterTester;
