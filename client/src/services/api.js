import axios from 'axios';
import { toast } from "react-toastify";

const _baseURL = "http://localhost:4000";

export const adduser = async (body) => {
    try {
        return await axios.post(`${_baseURL}/add`,body)
    } catch (error) {
        toast.error(error.message);
    }
}


export const getusers = async () => {
    try {
        let resp =  await axios.get(`${_baseURL}/users`);
        return resp;
    } catch (error) {
        toast.error(error.message);
    }
}


export const setConversation = async (data)=>{
    try {
        let resp =  await axios.post(`${_baseURL}/conversatation/add`,data);
        return resp;
    } catch (error) {
        toast.error(error.message);
    }
}

