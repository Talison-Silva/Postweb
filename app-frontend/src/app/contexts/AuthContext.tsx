import { createContext,useState,useEffect,useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import api from '@/app/hook/backend.js';

export const AuthContext=createContext({});

interface Auth{
	username:string,
	password:string,
	email:string
}

export const AuthProvider = ({children})=>
{
	const cookies = new Cookies(null, { path: '/' });
	const [isClient,setIsClient]=useState(null);
	const isAutheticate=!!isClient;
	const navigate=useNavigate();

	const authenticate=async({email,password,username}:Auth)=>
	{
		try{						
			const {data:{token,client}} = await api.post("/new-users/authenticate",{password,username,email});			
			console.log('client ::',client)

			cookies.set('token.auth',token,{path:'/',maxAge:3600})			
			setIsClient(client[0])			
		}catch(err){			
			cookies.set('token.auth',"",{path:'/',maxAge:3600})
			setIsClient(null)
		}
	}

	const refreshjwt=async()=>
    {
        try{        	
            const {data}=await api.get("/new-users/myAccount");			
            setIsClient(data[0]);
        }catch(err){			
        	if(!cookies.get('token.auth'))
        	{
        		navigate('/signIn')
        	}

        	if(err?.response?.status)
        	{
        		switch(err?.response?.status)
	        	{
	        		case 401:        		
	        			navigate('/signIn')
	        			break;
	        	}
        	}

            setIsClient(null);
        }
    }

	return(
		<AuthContext.Provider value={{authenticate,refreshjwt,isAutheticate,isClient}}>
			{children}
		</AuthContext.Provider>
	)
}