import axios from 'axios';

const api=axios.create({
    baseURL:'https://localhost:3005'
})

export default api;