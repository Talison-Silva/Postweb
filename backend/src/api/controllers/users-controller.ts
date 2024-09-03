import {apiForApplication,applicationForApi} from '@/api/mappers/users.ts';
import ServicesUsers from '@/api/services/infra-users.ts';
import { Request,Response } from 'express';


/* .....

{ apiForApplication, applicationForApi } .. Mappers
{ Request, Response } .. Dependencies
{ InfraUsers } .. Infra Users

*/// .....



export const get=async(req:Request,res:Response)=>
{
	var filter=JSON.parse(req.query.filter || '{}');
    var response=apiForApplication( await ServicesUsers.geted(req.token,filter) );

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
    var response=await ServicesUsers.authenticate(req.body)

    switch (typeof response) {
      case "number":
        res.status(response).send()
        break;
      default:
        res.status(200).send({
          client:apiForApplication([response.client]),
          token:response.token          
        })
        break
    }
}




export const register=async(req:Request,res:Response)=>
{
	var params=applicationForApi({...req.body,...req.files})
    var response=await ServicesUsers.register(params)
    res.status(response).send()
}




export const myAccount=async(req:Request,res:Response)=>
{	
    var response=apiForApplication( await ServicesUsers.myAccount(req.token) )
    
    switch (typeof response) {
      case "number":
        res.status(response).send()
        break;
      default:
        res.status(200).send(response)
        break
    }
}