import axios from "axios";

export const getEmployees = async () => {
    const response = await axios.get("http://localhost:8080/employee");
    return response.data;
};

export const getEmployeeById = async (id: number) => {
    const response = await axios.get(`http://localhost:8080/employee/${id}`);
    return response.data;
};

export const deleteEmployee = async (id: number) => {
    const response = await axios.delete(`http://localhost:8080/employee/${id}`);
    return response.data;
};

export const createEmployee = async (formData: object) => {
    const response = await axios({
        method: "post",
        url: "http://localhost:8080/employee",
        data: formData,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.data;
};

export const updateEmployee = async (formData: object, id: number) => {
    const respone = await axios({
        method: "put",
        url: `http://localhost:8080/employee/${id}`,
        data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
