import axios from "axios";

const url: string = "http://localhost:5000/todo-list";

export const getData = async () => {
    return await axios.get(url);
}

export const addData = async (text: string) => {
    try {
        const data = await axios.post(url, { text });
    } catch (error) {
        
    }
}

export const updateData = async (text: string, id: string) => {
    return axios.put(`${url}/${id}`, text);
}

export const deleteData = async (id: string) => {
    try {
        const deleteDatafromMongoDb = await axios.delete(`${url}/${id}`);
    } catch (error) {
        
    }
}