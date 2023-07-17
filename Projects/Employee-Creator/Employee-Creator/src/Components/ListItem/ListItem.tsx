import React from "react";
import styles from "./ListItem.module.scss";
import { Link } from "react-router-dom";

interface props {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    deleteEmployees: Function;
}
const ListItem = ({ name, phoneNumber, email, id, deleteEmployees }: props) => {
    return (
        <div className={styles.ListItemContainer}>
            <div className={styles.EmployeeInfo}>
                <p className={styles.Name}>{name}</p>
                <p className={styles.OtherInfo}>{phoneNumber}</p>
                <p className={styles.OtherInfo}>{email}</p>
            </div>
            <div className={styles.UpdateEmployee}>
                <Link to={`/EditEmployee/${id}`}>
                    <span className={styles.Edit}>Edit</span>
                </Link>
                <span> | </span>
                <span
                    onClick={() => deleteEmployees(id)}
                    className={styles.Remove}
                >
                    Remove
                </span>
            </div>
        </div>
    );
};

export default ListItem;
