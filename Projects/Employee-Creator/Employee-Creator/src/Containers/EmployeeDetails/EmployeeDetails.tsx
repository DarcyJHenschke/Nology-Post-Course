import React from "react";
import styles from "./EmployeeDetails.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const EmployeeDetails = () => {
    const { register, handleSubmit } = useForm();
    const nameValidation = {
        required: true,
        maxLength: 20,
    };
    const phoneValidation = {
        minLength: 10,
        maxLength: 10,
    };

    const requiredValidation = {
        required: true,
    };
    return (
        <div className={styles.EmployeeDetailsContainer}>
            <div>
                <Link to="/">
                    <button className={styles.BackButton}>Back</button>
                </Link>
                <h1>Employee Details</h1>
            </div>
            <div>
                <h2 className={styles.FormHeading}>Personal Information</h2>
                <form
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                    })}
                    className={styles.AddEmployeeForm}
                >
                    <label for="firtName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        placeholder="Darcy"
                        {...(register("firstName"), nameValidation)}
                        className={styles.PersonalInfoForm}
                        type="text"
                    ></input>

                    <label for="middleName">Middle Name (if Applicable)</label>
                    <input
                        id="middleName"
                        name="middleName"
                        placeholder="James"
                        {...(register("middleName"), nameValidation)}
                        type="text"
                        className={styles.PersonalInfoForm}
                    ></input>

                    <label for="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        placeholder="Henschke"
                        {...(register("lastName"), nameValidation)}
                        type="text"
                        className={styles.PersonalInfoForm}
                    ></input>

                    <label for="emailAddress">Email Address</label>
                    <input
                        id="emailAddress"
                        name="emailAddress"
                        placeholder="dhenschke25@gmail.com"
                        {...register("emailAddress")}
                        className={styles.EmailForm}
                        type="email"
                    ></input>
                    <label for="phoneNumber">Phone Number</label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="0402171205"
                        {...register("phoneNumber", phoneValidation)}
                        className={styles.TelForm}
                        type="tel"
                    ></input>
                    <label for="address">Residential Address</label>
                    <input
                        id="address"
                        name="address"
                        placeholder="10 Smith street, Brunswick, Victoria"
                        {...register("address", requiredValidation)}
                        className={styles.AddressForm}
                        type="text"
                    ></input>
                    <label for="contractType">What is Contract Type</label>
                    <select
                        id="contractType"
                        name="contractType"
                        {...register("contractType", requiredValidation)}
                        className={styles.ContractForm}
                    >
                        <option value="permanent">Permanent</option>
                        <option value="contract">Contract</option>
                    </select>
                    <label for="startDate">Start Date</label>
                    <input
                        id="startDate"
                        name="startDate"
                        {...register("startDate", requiredValidation)}
                        className={styles.DateForm}
                        type="date"
                    ></input>
                    <label for="endDate">End Date</label>
                    <input
                        id="endDate"
                        name="endDate"
                        {...register("endDate", requiredValidation)}
                        className={styles.DateForm}
                        type="date"
                    ></input>
                    <label for="ongoing">
                        Ongoing
                        <input
                            id="ongoing"
                            name="ongoing"
                            {...register("ongoing?")}
                            className={styles.OngoingForm}
                            type="checkbox"
                            value="ongoing"
                        ></input>
                    </label>
                    <input
                        className={styles.SubmitButton}
                        type="submit"
                    ></input>
                </form>
            </div>
        </div>
    );
};

export default EmployeeDetails;
