import React from "react";
import styles from "./ListItem.module.scss";

interface listInfo {
    name: string;
    contract: string;
    email: string;
}
const ListItem = ({ name, contract, email }: listInfo) => {
    return (
        <div className={styles.ListItemContainer}>
            <div className={styles.EmployeeInfo}>
                <p>{name}</p>
                <p>{contract}</p>
                <p>{email}</p>
            </div>
            <div className={styles.UpdateEmployee}>
                <span>Edit</span>
                <span>|</span>
                <span>Remove</span>
            </div>
        </div>
    );
};

export default ListItem;
