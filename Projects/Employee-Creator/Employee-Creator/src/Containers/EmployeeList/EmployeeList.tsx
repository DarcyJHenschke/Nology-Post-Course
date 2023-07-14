import React from "react";
import styles from "./EmployeeList.module.scss";
import Data from "../../backend/employees.js";
import ListItem from "../../Components/ListItem/ListItem";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../Services/services";

interface props {
    employees: Array;
    deleteEmployees: Function;
}

const EmployeeList = ({ employees, deleteEmployees }: props) => {
    return (
        <div className={styles.EmployeeList}>
            <div className={styles.HeadingWrapper}>
                <h1 className={styles.Heading}>Employee List</h1>
            </div>
            <div className={styles.AddEmployee}>
                <Link to="/AddEmployee">
                    <button className={styles.AddEmployeeButton}>
                        Add Employee
                    </button>
                </Link>
            </div>

            {employees.map((x, index) => (
                <ListItem
                    key={index}
                    id={x.id}
                    name={x.firstName + " " + x.lastName}
                    phoneNumber={x.phoneNumber}
                    email={x.emailAddress}
                    deleteEmployees={deleteEmployees}
                />
            ))}
        </div>
    );
};

export default EmployeeList;
