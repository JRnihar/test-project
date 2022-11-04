import axios from "axios";


export const getAllList = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/list`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};

export const getListDetail = async (id) => {
  
    try {
        
        const response = await axios.get(`http://localhost:5000/api/v1/list/${id}`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};
export const getCutomerCard = async (email) => {
  
    try {
        
        const response = await axios.get(`http://localhost:5000/api/v1/test/${email}`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};
export const deleteCutomerCard = async (id) => {
  
    try {
        
        const response = await axios.delete(`http://localhost:5000/api/v1/allList/${id}`);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};
export const postCutomerCard = async (allValues) => {
  
    try {
        
        const response = await axios.post(`http://localhost:5000/api/v1/test`,allValues);
        return { data: response?.data };
    } catch (error) {
        return error;
    }
};