import axios from 'axios';
import {Service} from 'axios-middleware'

const api=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL_API,
    headers:{
        "Content-Type":"multipart/form-data",
        "authorization":`Bearer ${localStorage.getItem("token")}`
    }
})

// "authorization":`Bearer ${localStorage.getItem("token")}`

api.interceptors.request.use(
	config =>{
		if(localStorage.getItem("token")){
			config.headers.authorization=`Bearer ${localStorage.getItem("token")}`
		}
		console.log(config.headers.authorization)
		return config
	},
	error=>{
		return Promise.reject(error)
	}
)

export default api;
