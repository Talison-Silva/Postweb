import Cookies from 'universal-cookie';
import api from './backend.js';



export class Hook{
    static route:string="";

    static push(url:string){
        this.route=url
        return this;
    }

    static refreshCookie(){
        return new Cookies(null, { path: '/' });
    }

    static async get(params:any){
        try
        {        
            if(params)
            {            
                return await api.get(this.route,{params})
            }
            else
            {
                return await api.get(this.route,params)
            }            
        }
        catch(err)
        {
            const cookies=this.refreshCookie();
            
            if(!cookies.get('token.auth'))
        	{
        		window.location.href='/signIn'
        	}

            switch(err?.response?.status){
                case 401:
                    window.location.href='/signIn'
                    break
                default:
                    console.error(err)
            }
        }
    }

    static async post(data:any={}){
        try
        {
            return await api.post(this.route,{...data})
        }
        catch(err)
        {
            const cookies=this.refreshCookie();
            
            if(!cookies.get('token.auth'))
        	{
        		window.location.href='/signIn'
        	}

            switch(err?.response?.status){
                case 401:
                    window.location.href='/signIn'
                    break
                default:
                    console.error(err)
            }
        }
    }

    static async put(data:any={}){
        try
        {
            return await api.put(this.route,{...data})
        }
        catch(err)
        {
            const cookies=this.refreshCookie();
            
            if(!cookies.get('token.auth'))
        	{
        		window.location.href='/signIn'
        	}

            switch(err?.response?.status){
                case 401:
                    window.location.href='/signIn'
                    break
                default:
                    console.error(err)
            }
        }
    }

    static async delete(){
        try
        {
            return await api.delete(this.route);
        }
        catch(err)
        {
            const cookies=this.refreshCookie();
            
            if(!cookies.get('token.auth'))
        	{
        		window.location.href='/signIn'
        	}
            
            switch(err?.response?.status){
                case 401:
                    window.location.href='/signIn'
                    break
                default:
                    console.error(err)
            }
        }
    }
}