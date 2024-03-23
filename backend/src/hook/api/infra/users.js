import {exists} from '../../../utils/functions.js'
import jwt from 'jsonwebtoken'

class UsersInfra{
    constructor(sequelize){
        this.users=sequelize.models.Users
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
            var user=await this.users.findAll(filters)

            let users=[];
            Object.entries(user).map(([i,v])=>{
                users.push({
                    email: v.email,
                    username: v.username,
                    photo: v.photo,
                    me: v.me,
                    createdAt:v.createdAt
                })
            })

            return({status:200,users:users})
        }catch(err){
            return({status:500,users:{err:err}})
        }
    }

    async post(data){
        try{
            const e = await this.users.findOne({where:{username:await data.username}})
            
            if(!e){
              if(data.photo){
                /*
                var name=Date.now() + "." + data.photo.name.split('.')[(data.photo.name.split('.')).length-1]
                const path = join(__dirname,'../../../') + "uploads/" + name;

                await data.photo.mv(path, (err) => {
                console.log(err)
                });
                */
              }else{
                return({msm: 'a foto de perfil não foi up...'})
              }
              console.log('process-one')
              await this.users.create(exists(data))
              console.log('process-two')
              return({msm: 'conta criada com sucesso...'})
            }else{
              return({msm:'conta já existe...'})
            }
        }catch(err){
            return({code:500,msm:err})   
        }
    }

    async put(data){
        try{
            await this.users.update(await exists(data),{
                where:{id:data.id}
            })
            return({code:200})
        }catch(err){
            return({code:500})
        }
    }

    async delete(id){
        try{
            await this.users.destroy({where:{id:id}})
            return({code:200})
        }catch(err){
            return({code:500})
        }
    }

    async authenticated(data){
        let users,tokenjwt;
        try{
            users = await this.users.findAll({where:{email:await data.email}})

            if(users[0] && users[0].password===data.password){
                tokenjwt=await jwt.sign({
                    sub: users[0].id,
                },process.env.SECRET,{ expiresIn: '3600s' })
                return({token:tokenjwt})
            }
            return({code:300})
        }catch(err){
            return({code:500})
        }
    }
}

export default UsersInfra;
