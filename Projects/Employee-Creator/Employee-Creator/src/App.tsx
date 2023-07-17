import styles from "./App.module.scss";
import "./App.css";
import EmployeeList from "./Containers/EmployeeList/EmployeeList";
import { ReactDOM, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeDetails from "./Containers/EmployeeDetails/EmployeeDetails";
import EditPage from "./Containers/EditPage/EditPage";
import {
    createEmployee,
    deleteEmployee,
    getEmployees,
    updateEmployee,
} from "./Services/services";

function App() {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState();

    const callEmployees = async () => {
        const employees = await getEmployees();
        setEmployees(employees);
        console.log(employees);
    };
    useEffect(() => {
        callEmployees();
    }, []);

    const deleteEmployees = async (id) => {
        await deleteEmployee(id);
        callEmployees();
    };

    const addEmployee = async (formData) => {
        await createEmployee(formData);
        callEmployees();
    };

    const editEmployee = async (formData, id) => {
        await updateEmployee(formData, id);
        callEmployees();
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <EmployeeList
                            employees={employees}
                            deleteEmployees={deleteEmployees}
                        />
                    }
                />
                <Route
                    path="/AddEmployee"
                    element={<EmployeeDetails addEmployee={addEmployee} />}
                />
                <Route
                    path="/EditEmployee/:id"
                    element={
                        <EditPage
                            editEmployee={editEmployee}
                            employees={employees}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
