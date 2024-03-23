import UsersSchema from '../api/models/users/index.js';
import UsersInfra from '../api/infra/users.js';
import jwt from 'jsonwebtoken';

async function UsersServices(sequelize){
    const publico={};

    await new UsersSchema(sequelize);
    publico.infra=await new UsersInfra(sequelize);


    async function geted(filters,token){
        return await jwt.verify(token,process.env.SECRET,async(err,decode)=>{
            if(err){
                console.log("ops! um erro camarada - user")
                switch(err.name){
                    case "TokenExpiredError":
                        return({status:401,data:[]})
                        break
                    default:
                        console.log(err.name)
                        return({status:500,err:err,data:[]})
                }
            }else{
                console.log("oba!! deu certo menos dor de cabeça - user")
                if(filters){
                    console.log('choicen-id')
                    return await publico.infra.get(filters)
                }
                console.log('not-choicen-id')
                return await publico.infra.get()
            }
        })
    }
    async function post(data){
        return await publico.infra.post(data)
    }
    async function put(data){
        return await publico.infra.put(data)
    }
    async function deleted(id){
        return await publico.infra.delete(id)
    }
    async function authenticate(data){
        return await publico.infra.authenticated(data)
    }

    async function getedME(token){
        return await jwt.verify(token,process.env.SECRET,async(err,decode)=>{
            if(err){
                console.log("ops! um erro camarada - user")
                switch(err.name){
                    case "TokenExpiredError":
                        return({status:401,data:[]})
                        break
                    default:
                        console.log(err.name)
                        return({status:500,err:err,data:[]})
                }
            }else{
                console.log("oba!! deu certo menos dor de cabeça - user")
                return await publico.infra.get(["id",decode.sub])
            }
        })
    }

    return{
        geted,
        getedME,
        post,
        put,
        deleted,
        authenticate
    }
}

export default UsersServices;
