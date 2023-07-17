import React, { useEffect, useState } from "react";
import styles from "./EditPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface props {
    editEmployee: Function;
    employees: any;
}

const EditPage = ({ editEmployee, employees }: props) => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        middleName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        address: "",
        contractType: "Permanent",
        startDate: "",
        endDate: "",
        ongoing: false,
    });
    // const [updatePost, setUpdatePost] = useState({
    //     firstName: "",
    //     middleName: "",
    //     lastName: "",
    //     emailAddress: "",
    //     phoneNumber: "",
    //     address: "",
    //     contractType: "Permanent",
    //     startDate: "",
    //     endDate: "",
    //     ongoing: false,
    // });

    useEffect(() => {
        setEmployee(employees.find((employee) => employee.id == id));
        console.log(employee);
    }, []);

    const handleInput = (event) => {
        setEmployee({ ...employee, [event.target.id]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { id, ...updatePost } = employee;
        editEmployee(updatePost, id);
    };
    const schema = yup
        .object({
            firstName: yup.string().required().max(13),
            middleName: yup.string().required().max(13),
            lastName: yup.string().required().max(13),
            phoneNumber: yup.string().required().max(10),
            emailAddress: yup.string().email().required(),
            address: yup.string().required(),
            contractType: yup.string().required(),
            startDate: yup.date().required(),
            endDate: yup.date(),
            ongoing: yup.boolean(),
        })
        .required();

    const {
        register,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    return (
        <div className={styles.EmployeeDetailsContainer}>
            <div>
                <Link to="/">
                    <button className={styles.BackButton}>Back</button>
                </Link>
                <h1>Update Your Details</h1>
            </div>
            <div>
                <h2 className={styles.FormHeading}>Personal Information</h2>
                <form onSubmit={onSubmit} className={styles.AddEmployeeForm}>
                    <label for="firtName">First Name</label>
                    <input
                        id="firstName"
                        placeholder="Darcy"
                        {...register("firstName")}
                        onChange={handleInput}
                        className={styles.PersonalInfoForm}
                        type="text"
                        value={employee.firstName}
                    ></input>

                    <label for="middleName">Middle Name (if Applicable)</label>
                    <input
                        id="middleName"
                        placeholder="James"
                        {...register("middleName")}
                        onChange={handleInput}
                        type="text"
                        className={styles.PersonalInfoForm}
                        value={employee.middleName}
                    ></input>

                    <label for="lastName">Last Name</label>
                    <input
                        id="lastName"
                        placeholder="Henschke"
                        {...register("lastName")}
                        onChange={handleInput}
                        type="text"
                        className={styles.PersonalInfoForm}
                        value={employee.lastName}
                    ></input>

                    <label for="emailAddress">Email Address</label>
                    <input
                        id="emailAddress"
                        placeholder="dhenschke25@gmail.com"
                        {...register("emailAddress")}
                        onChange={handleInput}
                        className={styles.EmailForm}
                        type="email"
                        value={employee.emailAddress}
                    ></input>
                    <label for="phoneNumber">Phone Number</label>
                    <input
                        id="phoneNumber"
                        placeholder="0402171205"
                        {...register("phoneNumber")}
                        onChange={handleInput}
                        className={styles.TelForm}
                        type="tel"
                        value={employee.phoneNumber}
                    ></input>
                    <label for="address">Residential Address</label>
                    <input
                        id="address"
                        placeholder="10 Smith street, Brunswick, Victoria"
                        {...register("address")}
                        onChange={handleInput}
                        className={styles.AddressForm}
                        type="text"
                        value={employee.address}
                    ></input>
                    <label for="contractType">What is Contract Type</label>
                    <select
                        id="contractType"
                        {...register("contractType")}
                        onChange={handleInput}
                        className={styles.ContractForm}
                        value={employee.contractType}
                    >
                        <option value="permanent">Permanent</option>
                        <option value="contract">Contract</option>
                    </select>
                    <label for="startDate">Start Date</label>
                    <input
                        id="startDate"
                        {...register("startDate")}
                        onChange={handleInput}
                        className={styles.DateForm}
                        type="date"
                        value={employee.startDate.slice(0, 10)}
                    ></input>
                    <label for="endDate">End Date</label>
                    <input
                        id="endDate"
                        {...register("endDate")}
                        onChange={handleInput}
                        className={styles.DateForm}
                        type="date"
                        value={employee.endDate.slice(0, 10)}
                    ></input>
                    <label for="ongoing">
                        Ongoing
                        <input
                            id="ongoing"
                            {...register("ongoing")}
                            onChange={handleInput}
                            className={styles.OngoingForm}
                            type="checkbox"
                            value={employee.ongoing}
                        ></input>
                    </label>
                    <input
                        className={styles.SubmitButton}
                        type="submit"
                        value={"Update"}
                    ></input>
                </form>
            </div>
        </div>
    );
};

export default EditPage;
