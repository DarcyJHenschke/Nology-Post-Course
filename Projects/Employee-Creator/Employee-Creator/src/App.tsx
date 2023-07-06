import styles from "./App.module.scss";
import "./App.css";
import EmployeeList from "./Containers/EmployeeList/EmployeeList";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeDetails from "./Containers/EmployeeDetails/EmployeeDetails";
import EditPage from "./Containers/EditPage/EditPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EmployeeList />} />
                <Route path="/AddEmployee" element={<EmployeeDetails />} />
                <Route path="/EditEmployee" element={<EditPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
