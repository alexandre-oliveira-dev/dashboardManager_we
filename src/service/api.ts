import axios from "axios";


export const api =  axios.create({
    baseURL:'https://dashboard-manager-express-api.vercel.app/'
    // baseURL:'http://localhost:5000'
})