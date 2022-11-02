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