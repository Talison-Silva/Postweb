import PostagensServices from '../../hook/services/postagens.js';
import UsersServices from '../../hook/services/users.js';
import { starting } from '../../app/conection.js';

const servicesPostagens=await PostagensServices(await starting())
const servicesUsers=await UsersServices(await starting())

export default {
    GetedPOSTAGENS:async(req,res)=>{
        var {status,postagens}=await servicesPostagens.geted(req.query.filter,req.token)

        let mappers=[],users;
        if(status!==500){
        // --| Desenvolver um mappers simples |-----------------------------------||
        for(const [i,v] of Object.entries(postagens)){
            users=await servicesUsers.geted(["id",v.userID],req.token)
            mappers.push({
                id:v.id,
                title:v.title,
                description:v.description,
                content:v.content,
                createdAt:v.createdAt,
                user:{photo:users.users[0].photo,username:users.users[0].username}
            })
        }
        // --|   |================================================================||
        }

        res.status(status).send(mappers)
    },
    PostedPOSTAGENS:async(req,res)=>{
        var msm=await servicesPostagens.post(req.body,req.token)
        res.status(msm.status).send(msm.data)
    },
    DeletedPOSTAGENS:async(req,res)=>{
        var msm=await servicesPostagens.deleted(req.params.id,req.token)
        res.status(msm.status).send(msm.data)
    },
    PutedPOSTAGENS:async(req,res)=>{
        var msm=await servicesPostagens.put(req.body,req.token)
        res.status(msm.status).send(msm.data)
    },



    GetedUSERS:async(req,res)=>{
        var msm=await servicesUsers.geted(null,req.token)
        console.log(msm)
        res.status(msm.status).send(msm.users)
    },
    authenticated:async(req,res)=>{
        var msm=await servicesUsers.authenticate(req.body);
        res.json(msm)
    },
    register:async(req,res)=>{
        var msm=await servicesUsers.post(await {
          ...req.body,
          photo: req.files.photo
        });
        res.json(msm)
    },
    me:async(req,res)=>{
        console.log("me-filter",req.params.filter)
        //var msm=await servicesUsers.geted(req.params.filter,req.token);
        var msm=await servicesUsers.getedME(req.token)
        res.status(msm.status).send(msm.users)
    }
}
