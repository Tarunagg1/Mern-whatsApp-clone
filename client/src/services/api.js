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


export const getConversation = async (data)=>{
    try {
        let resp =  await axios.post(`${_baseURL}/conversatation/get`,data);
        return resp;
    } catch (error) {
    }
}


export const createMessage = async (data)=>{
    try {
        let resp =  await axios.post(`${_baseURL}/message/add`,data);
        return resp;
    } catch (error) {
        toast.error(error.message);
    }
}


export const getMessages = async (id)=>{
    try {
        let {data} =  await axios.get(`${_baseURL}/message/get/${id}`);
        return data;
    } catch (error) {
        toast.error(error.message);
    }
}



