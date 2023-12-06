import "./App.css";
import TableComponent from './Table/TableComponent'
import { v4 as uuidv4 } from "uuid";
import DynamicForm from './DynamicForm/DynamicForm.js'
import MemberList from "./Member/MemberList";
import YupValidationForm from "./DynamicForm/YupValidationForm";
import MuiForm from "./muiform/MuiForm";
import ToasterTester from "./components/ToasterTester";
import AutoComplete from "./AutoComplete";
import CountryCode from "./CountryCode.js"
import SearchTextBox from "./SearchTextBox.js"

function App() {
  return (
    <div>
      {/* <MemberList/> */}
      {/* <YupValidationForm/> */}
      {/* <DynamicForm/> */}
      <MuiForm/>
      {/* <SearchTextBox/> */}
      {/* <CountryCode/> */}
      {/* <AutoComplete/> */}
      {/* <ToasterTester/> */}
    </div>
  );
}

export default App;
