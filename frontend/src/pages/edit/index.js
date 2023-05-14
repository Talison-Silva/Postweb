//import react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//import hook-form
import {useForm} from 'react-hook-form';

//import loading
import Loading from "../../components/loading/index.js";

//backend connection
import api from "../../hook/backend.js";



const Edit=()=>{
    //FUNÇÕES------------------------------------------------------------------------------------
    
    const SubmitForm=(data)=>{
        //formatando o objct data
        data._id=id
        data.title=editor.title
        data.description=editor.description
        data.content=editor.content
        //------------------------------------------
        api.post('/resources/edit',data).then(()=>{
            console.log('add deu certo')
        }).catch((error)=>{
            console.log(error)
        })
        //------------------------------------------

        //desviar a rota devolta para o feed :)
        navigate('/');
    }
    

    const Data=async()=>{
        await api.get(`/resources/id/${id}`).then((response)=>{
            setEditor(response.data)
        }).catch((error)=>console.log(error));

        setLoading(false)
    }

    //DEFINIÇÕES----------------------------------------------------------------------------------

    //params
    const {id}=useParams()
    //useForm
    const {register,handleSubmit}=useForm()
    //state
    const [loading,setLoading]=useState(true)
    const [editor,setEditor]=useState({})
    //useNavigate
    const navigate=useNavigate()

    //--------------------------------------------------------------------------------------------

    //userEffect
    useEffect(()=>{
        Data()
    },[])

    //--------------------------------------------------------------------------------------------
    return (
        <main>
            {!loading && 
                <>
                    <form onSubmit={handleSubmit(SubmitForm)}>
                        <h1>Editar Postagem</h1>

                        <section>
                            <div>
                                <label className="titulo">
                                    <p>inserir o titulo da Postagem: </p>
                                    <input type="text" name="title" {...register('title')} value={editor.title} onChange={(input)=>{
                                        setEditor({title:input.target.value})
                                    }} />                                    
                                </label>
                            </div>

                            <div>
                                <label className="descricao">
                                    <p>inserir a descricao da Postagem: </p>
                                    <input type="text" name="description" {...register('description')} value={editor.description} onChange={(input)=>{
                                        setEditor({description:input.target.value})
                                    }}/>                                
                                </label>
                            </div>

                            <div>
                                <label className="conteudo">
                                    <p>inserir o conteudo da Postagem: </p>
                                    <textarea type="text" name="content" {...register('content')} value={editor.content} onChange={(input)=>{
                                        setEditor({content:input.target.value})
                                    }}/>                                    
                                </label>    
                            </div>
                        </section>

                        <button type="submit">Editar Postagem</button>
                    </form>
                </>}
            {loading && <Loading/>}
            
        </main>
    );
}

export default Edit;