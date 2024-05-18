import axios from "axios";


export const api =  axios.create({
    baseURL:'http://52.67.38.246:5000/'
    // baseURL:'http://localhost:5000'
})