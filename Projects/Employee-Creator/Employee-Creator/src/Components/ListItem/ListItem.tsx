import React from "react";
import styles from "./ListItem.module.scss";
import { Link } from "react-router-dom";

interface listInfo {
    name: string;
    contract: string;
    email: string;
}
const ListItem = ({ name, contract, email }: listInfo) => {
    return (
        <div className={styles.ListItemContainer}>
            <div className={styles.EmployeeInfo}>
                <p className={styles.Name}>{name}</p>
                <p className={styles.OtherInfo}>{contract}</p>
                <p className={styles.OtherInfo}>{email}</p>
            </div>
            <div className={styles.UpdateEmployee}>
                <Link to="/EditEmployee">
                    <span className={styles.Edit}>Edit</span>
                </Link>
                <span> | </span>
                <span className={styles.Remove}>Remove</span>
            </div>
        </div>
    );
};

export default ListItem;
