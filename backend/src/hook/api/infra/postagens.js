import {exists} from '../../../utils/functions.js';
import jwt from 'jsonwebtoken';
import Userinfra from './users.js'; 

class PostagensInfra{
    constructor(sequelize){
        this.postagens=sequelize.models.Postagens
    }

    provisorio(id){
        if(id){
            return ({where:{id:id}})
        }
    }

    async get(Filters){
        try{
            let filters={where:{}};
            if(Filters){filters.where[Filters[0]]=Filters[1]}
            var response=await this.postagens.findAll(filters)

            let postagens=[];
            Object.entries(response).map(([i,v]) => {
                postagens.push({
                    id:v.id,
                    userID:v.userID,
                    title:v.title,
                    description:v.description,
                    content:v.content,
                    createdAt:v.createdAt
                })
            })

            return({status:200,postagens:postagens})
        }catch(err){
            return({status:500,err:err,postagens:[]})
        }
    }

    async post(data){
        try{
            var response=await this.postagens.create(exists(data))
            return({status:200,data:[]})            
        }catch(err){
            return({status:500,err:err,data:[]})   
        }
    }

    async put(data){
        try{
            await this.postagens.update(await exists(data),{
                where:{id:data.id}
            })
            return({status:200,data:[]})
        }catch(err){
            return({status:500,err:err,data:[]})
        }
  }

    async delete(id){
        try{
            await this.postagens.destroy({where:{id:id}})
            return({status:200,postagens:[]})
        }catch(err){
            return({status:500,err:err,data:[]})
        }
    }
}

export default PostagensInfra;
