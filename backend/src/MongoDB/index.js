import mongoose from 'mongoose';
import postagensSchema from './models/postagens/index.js';

class MongoDB{
    constructor(){
        this.getAll;
        this.getId;
        this.getAdd;
        
        this.mongodb=this.connection()
        this.postagens=mongoose.model('postagens',postagensSchema)
    }


    async connection(){
        return(
            await mongoose.connect('mongodb+srv://Admin:T4l1s0n$$@postweb.hyquegk.mongodb.net/?retryWrites=true&w=majority').then(()=>{
                console.log('conexão realizada com sucesso...')
            }).catch((error)=>{
                console.log('ocorreu algum erro na conexão ... '+error)
            })
        );
    }

    async add(data){
        console.log(data);
        await new this.postagens(data).save().then(()=>{
            this.getAdd={code:true}
        }).catch(()=>{
            this.getAdd={code:false}
        })
    }


    async all(){
        await this.postagens.find({}).then((response)=>{
            this.getAll=response;
        }).catch((error)=>{
            console.log(`error: ${error}`);
        })
    }

    async id(data){
        console.log(`data: ${data}`)
        await this.postagens.findOne({_id:data}).then((response)=>{
            console.log(`response: ${response}`)
            this.getId=response;
        }).catch((error)=>{
            console.log(`error: ${error}`);
        })
    }

    async edit(data){
        console.log('data edit:')
        console.log(data)
        await this.postagens.updateOne({_id:data._id},{$set:{
            title:data.title,
            description:data.description,
            content:data.content
        }})
    }

    async delete(data){
        await this.postagens.deleteOne({_id:data})
    }
}

export default MongoDB;