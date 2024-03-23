import PostagensSchema from '../api/models/postagens/index.js';
import PostagensInfra from '../api/infra/postagens.js';
import jwt from 'jsonwebtoken';

async function PostagensServices(sequelize){
    const publico={};
    await new PostagensSchema(sequelize);
    publico.infra=await new PostagensInfra(sequelize);

    async function geted(Filters,token){
        return jwt.verify(token,process.env.SECRET,async(err,decode)=>{
            if(err){
                switch(err.name){
                    case "TokenExpiredError":
                        return({status:401,postagens:[]})
                        break
                    default:
                        console.log(err.name)
                        return({status:500,err:err,data:[]})
                }
            }else{
                if(Filters){
                    console.log("choicen-filters",Filters)
                    const [f,v]=Object.entries(JSON.parse(Filters))[0];
                    return await publico.infra.get([f,v]);
                }
                console.log("choicen-not-filters")
                return await publico.infra.get()
            }
        })
    }


    async function post(data,token){
        return await jwt.verify(token,process.env.SECRET,async (err,decode)=>{
            if(err){
                switch(err.name){
                    case "TokenExpiredError":
                        return({status:401,postagens:[]})
                    default:
                        console.log(err.name)
                }
            }else{
                return await publico.infra.post({...data,userID:decode.sub})
            }
        })
    }
    async function put(data,token){
        return await jwt.verify(token,process.env.SECRET,async(err,decode)=>{
            if(err){
                switch(err.name){
                    case "TokenExpiredError":
                        return({status:401,postagens:[]})
                    default:
                        console.log(err.name)
                }
            }else{
                const {postagens}=await publico.infra.get(["id",data.id]);

                if(postagens[0].userID===decode.sub){
                    return await publico.infra.put(data)
                }else{return({status:203,postagens:[]})}
            }
        })
    }
    async function deleted(id,token){
        return await jwt.verify(token,process.env.SECRET,async(err,decode)=>{
            if(err){
                switch(err.name){
                    case "TokenExpiredError":
                        return({status:401,postagens:[]})
                    default:
                        console.log(err.name)
                }
            }else{
                const {postagens}=await publico.infra.get(["id",id]);

                if(postagens[0].userID===decode.sub){
                    return await publico.infra.delete(id)
                }else{return({status:203,postagens:[]})}
            }
        })
    }

    return{
        geted,
        post,
        put,
        deleted
    }
}

export default PostagensServices;
