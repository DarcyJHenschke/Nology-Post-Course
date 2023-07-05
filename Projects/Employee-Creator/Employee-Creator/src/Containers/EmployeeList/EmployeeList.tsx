import React from "react";
import styles from "./EmployeeList.module.scss";
import Data from "./../../backend/employees.js";
import ListItem from "../../Components/ListItem/ListItem";
const EmployeeList = () => {
    return (
        <div className={styles.EmployeeList}>
            <div className={styles.HeadingWrapper}>
                <h1 className={styles.Heading}>Employee List</h1>
            </div>
            <div className={styles.AddEmployee}>
                <p className={styles.EditDescription}>
                    Please click on "edit" to find more details of each employee
                </p>
                <button className={styles.AddEmployeeButton}>
                    Add Employee
                </button>
            </div>

            {Data.map((x) => (
                <ListItem
                    name={x.firstName + " " + x.lastName}
                    contract={x.phoneNumber}
                    email={x.emailAddress}
                />
            ))}
        </div>
    );
};

export default EmployeeList;
