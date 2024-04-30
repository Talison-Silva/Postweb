// ---| Dependencies
import { Request,Response } from 'express';
// ---||-----------------------------------

// ---| Utilities
import { InfraPosts } from '@/api/services/infra-posts.ts';
// ---||---------------------------------------------------

// ---| Mappers 
import {apiForApplication,applicationForApi} from '@/api/mappers/posts.ts';
// ---||-------------------------------------------------------------------

const servicesPosts=new InfraPosts();



export const get=async(req:Request,res:Response)=>
{
    var filter=JSON.parse(req.query.filter || '{}');
    var response=apiForApplication(await servicesPosts.geted(req.token,filter))

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
   	var response=await servicesPosts.posted(req.token,params)

   	res.status(response).send()
}


export const deleted=async(req:Request,res:Response)=>
{
    var response=await servicesPosts.deleted(req.token,req.params.id);
    res.status(response).send();
}


export const put=async(req:Request,res:Response)=>
{
    const params=applicationForApi(req.body)
    var response=await servicesPosts.puted(req.token,params)
    res.status(response).send();
}