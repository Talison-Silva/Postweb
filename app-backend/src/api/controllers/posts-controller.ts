import {apiForApplication,applicationForApi} from '@/api/mappers/posts.ts';
import ServicesPosts from '@/api/services/infra-posts.ts';
import { Request,Response } from 'express';


/* .....

{ apiForApplication, applicationForApi } .. Dependencies
{ Request, Response } .. Infra Posts
{ InfraPosts } .. Mappers
 
*/// .....



export const get=async(req:Request,res:Response)=>
{
    var filter=JSON.parse(req.query.filter || '{}');
    var response=apiForApplication(await ServicesPosts.geted(req.token,filter))

    switch (typeof response) {
      case "number":
        res.status(response).send()
        break;
      default:
        res.status(200).send(response)
        break
    }
}




export const post=async(req:Request,res:Response)=>
{
    var params=applicationForApi({...req.body,...req.files})	
   	var response=await ServicesPosts.posted(req.token,params)

   	res.status(response).send()
}




export const deleted=async(req:Request,res:Response)=>
{
    var response=await ServicesPosts.deleted(req.token,req.params.id);
    res.status(response).send();
}




export const put=async(req:Request,res:Response)=>
{    
    const params=applicationForApi({...req.body,...req.files})
    var response=await ServicesPosts.puted(req.token,params)
    res.status(response).send();
    //return res.status(204).send();
}