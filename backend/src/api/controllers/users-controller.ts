// ---| Dependencies
import { Request,Response } from 'express';
// ---||-----------------------------------

// ---| Utilities
import { packing } from '@/utils/packing.ts';
import { InfraUsers } from '@/api/services/infra-users.ts';
// ---||---------------------------------------------------

// ---| Mappers
import {apiForApplication,applicationForApi} from '@/api/mappers/users.ts';
// ---||------------------------------------------------------------------------------

const servicesUsers=new InfraUsers();


export const get=async(req:Request,res:Response)=>
{
	var filter=JSON.parse(req.query.filter || '{}');
    var response=apiForApplication( await servicesUsers.geted(req.token,filter) );

    switch (typeof response) {
      case "number":
        res.status(response).send()
        break;
      default:
        res.status(200).send(response)
        break
    }    
}


export const authenticate=async(req:Request,res:Response)=>
{
    var response=await servicesUsers.authenticate(req.body)

    switch (typeof response) {
      case "number":
        res.status(response).send()
        break;
      default:
        res.status(200).send(response)
        break
    }
}


export const register=async(req:Request,res:Response)=>
{
	var params=applicationForApi({...req.body,...req.files})	
    var response=await servicesUsers.register(params)
    res.status(response).send()
}


export const myAccount=async(req:Request,res:Response)=>
{	
    var response=apiForApplication( await servicesUsers.myAccount(req.token) )
    
    switch (typeof response) {
      case "number":
        res.status(response).send()
        break;
      default:
        res.status(200).send(response)
        break
    }
}
