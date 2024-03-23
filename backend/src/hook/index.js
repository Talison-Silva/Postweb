import postagensSchema from './api/models/postagens/index.js';
import usersSchema from './api/models/users/index.js';
import mongoose from 'mongoose';
import mariadb from 'mariadb';
import {Sequelize} from 'sequelize';
import {exists} from '../utils/functions.js'

class MongoDB{
    constructor(){
        this.getAll;
        this.getId;
        this.getAdd;
        
        this.mongodb=this.connection()
    }


    async connection(){
        var sequelize=new Sequelize('postweb','root','talison2005',{
            host:'127.0.0.1',
            dialect:'mariadb'
        })
        
        try{
            var db=await sequelize.authenticate()
            console.log(
                'mariadb::connection:=>: sucess'
            )
        }catch(err){
            console.log(
                'mariadb::connection:=>: error:',err
            )
        }
        finally{
            await this.models(sequelize);
            return(sequelize)
        }

    }

    async models(sequelize){
        this.postagens=await new postagensSchema(sequelize);
        this.users=await new usersSchema(sequelize);
    }

    async authenticate(data){
        var user=await this.users.users.findAll({where:{email:await data.email}})
        
        if(user && user[0].password===data.password){
            await this.users.users.update({
                token:'talison'
            },{
                where:{id:user[0].id}
            })
            

            return({msm:'acertou!!!',code:200})
        }

        return({msm:'errrou!!!',code:500})
    }

    async createUser(data){
        this.users.users.create({            
            email: data.email,
            password: data.password,
            username: data.username
        }).then(()=>{
            return({msm:'o novo cadastro foi bem sucedido',code:200})
        }).catch(()=>{
            return({msm:'o novo cadastro foi mal sucedido',code:500})
        })
    }

    async post(data){
        return await this.postagens.postagens.create({
            title: data.title,
            description: data.description,
            content: data.content
        }).then(()=>{
            return({msm:'o novo cadastro foi bem sucedido',code:200})
        }).catch(()=>{
            return({msm:'o novo cadastro foi mal sucedido',code:500})
        })
    }

    provisorio(id){
        if(id){
            return ({where:{id:id}})
        }
    }

    mahoraga(data){
        var retorno={};

        if(data.title){retorno.title=data.title}
        if(data.description){retorno.description=data.description}
        if(data.content){retorno.content=data.content}

        return retorno
    }

    async get(id){
        return await this.postagens.postagens.findAll(await this.provisorio(id))
    }

    async put(data){
        return await this.postagens.postagens.update(await this.mahoraga(data),{
            where:{id:data.id}
        }).then(()=>{
            return({msm:'a edição do cadastro foi bem sucedido',code:200})
        }).catch(()=>{
            return({msm:'a edição do cadastro foi mal sucedido',code:500})
        })
    }

    async delete(id){
        return await this.postagens.postagens.destroy({where:{id:id}}).then(()=>{
            return({msm:'o cadastro foi deletado com sucesso',code:200})
        }).catch(()=>{
            return({msm:'o cadastro não foi deletado com sucesso',code:500})
        })
    }
}

export default MongoDB;
