import logo from "./logo.svg";
import "./App.css";
import TableComponent from './Table/TableComponent'
import { v4 as uuidv4 } from "uuid";
import DynamicForm from './DynamicForm/DynamicForm.js'
import MemberList from "./Member/MemberList";
import YupValidationForm from "./DynamicForm/YupValidationForm";
import MuiForm from "./muiform/MuiForm";

function App() {
  return (
    <div>
      <MemberList/>
      {/* <YupValidationForm/> */}
      {/* <DynamicForm/> */}
      {/* <MuiForm/> */}
    </div>
  );
}

export default App;
