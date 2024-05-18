import { emitNotification } from '@/app/contexts/NotificationContext';
import Cookies from 'universal-cookie';
import api from './backend.js';

export class Hook{
    static route:string="";

    static good:any=null;
    static bad:any=null;
    static logout:any=null;

    static push(url:string){
        this.route=url
        return this;
    }

    static notify(notify:any){        
        Object.entries(notify).forEach(entry => {
            const [state,content] = entry;
            this[state]=content;            
        })

        return this;
    }

    static refreshCookie(){
        return new Cookies(null, { path: '/' });
    }

    static async get(params:any){
        let response;
        try
        {
            if(params)
            {
                response = await api.get(this.route,{params});
                if(this.good){ emitNotification(this.good) }
                return response;
            }
            else
            {
                response = await api.get(this.route,params);
                if(this.good){ emitNotification(this.good) }
                return response;
            }
        }
        catch(err)
        {
            const cookies=this.refreshCookie();
            
            if(!cookies.get('token.auth'))
        	{
                emitNotification({logout:{type:'logout',notify:{
                    title:'Not authorized. No token',
                    message:'you do not have a registered authorization token.'
                }}})
                
        		window.location.href='/signIn'
        	}

            switch(err?.response?.status){
                case 401:
                    emitNotification({logout:{type:'logout',notify:{
                        title:'Not authorized. Invalid token',
                        message:'you do not have a valid authorization token. probably because it is already expired.'
                    }}})

                    window.location.href='/signIn'
                    break
                default:
                    console.error(err)
            }
        }
    }

    static async post(data:any={}){        
        let response;
        try
        {
            response = await api.post(this.route,{...data});
            if(this.good){ emitNotification(this.good) }
            return response;
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
        let response;
        try
        {
            response = await api.put(this.route,{...data});
            if(this.good){ emitNotification(this.good) }
            return response;
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
        let response;
        try
        {
            response = await api.delete(this.route);
            if(this.good){ emitNotification(this.good) }
            return response;
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