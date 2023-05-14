import React from "react";
import {useState} from "react";
import {useForm} from 'react-hook-form';

//import loading
import Loading from "../../components/loading/index.js";

//backend connection
import api from "../../hook/backend.js";

//navigate
import { useNavigate } from "react-router-dom";

//import stylings
import '../../styles/pages/post/style.scss';



const Post=()=>{
    //FUÑÇÕES------------------------------------------------------------------------------------------------

    const SubmitForm=(data)=>{
        console.log('data: \n'+data);
        api.post('/resources/add',data).then(()=>{
            console.log('add deu certo')
        }).catch((error)=>{
            console.log(error)
        })

        //desviar a rota devolta para o feed :)
        navigate('/');
    }

    //DEFINIÇÕES----------------------------------------------------------------------------------------------

    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()

    //--------------------------------------------------------------------------------------------------------
    return (
        <main>
            <form onSubmit={handleSubmit(SubmitForm)}>

                <h1>Adicionar Postagem</h1>

                <section>
                    <div>
                        <label className="titulo">
                            <p>inserir o titulo da Postagem: </p>
                            <input type="text" name="title" {...register('title')} placeholder="titulo..." />                        
                        </label>
                    </div>

                    <div>
                        <label className="descricao">
                            <p>inserir a descricao da Postagem: </p>
                            <input type="text" name="description" {...register('description')} placeholder="descricao..." />
                        </label>
                    </div>

                    <div>
                        <label className="conteudo">
                            <p>inserir o conteudo da Postagem: </p>
                            <textarea type="text" name="content" {...register('content')}/>
                        </label>
                    </div>
                </section>

                <button type="submit">Adicionar Postagem</button>
                
            </form>
        </main>
    );
}

export default Post;