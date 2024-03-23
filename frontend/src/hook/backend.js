import axios from 'axios';
import {Service} from 'axios-middleware'

const api=axios.create({
    baseURL:'http://localhost:3005',
    headers:{
        "Content-Type":"multipart/form-data",
        "authorization":`Bearer ${localStorage.getItem("token")}`
    }
})

export default api;
