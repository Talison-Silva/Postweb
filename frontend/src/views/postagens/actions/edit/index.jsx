//import react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//import hook-form
import {useForm} from 'react-hook-form';

//import loading
import Loading from "@/components/loading/index.jsx";

//backend connection
import api from "@/hook/backend.js";

import {useCookies} from 'react-cookie';

import './index.scss'

const Edit=()=>{
    //FUNÇÕES------------------------------------------------------------------------------------

    const SubmitForm=async(data)=>{

        await api.put('/application/',{
            id:id,
            ...data
        }).then((response)=>{
            switch(response.status){
                case 200:
                    console.log(200)
                    break;
                case 203:
                    console.log(203)
                    break;
                default:
                    console.log('???')
            }
        }).catch((error)=>{
            console.log(error)
        })
        //------------------------------------------

        //desviar a rota devolta para o feed :)
        navigate('/postagens/');
    }

    const Data=async()=>{
        await api.get(`/application/?filter={"id":${id}}`).then((response)=>{
            setEditor(response.data[0])
        }).catch((error)=>console.log(error));

        setTimeout(()=>{
            setLoading(false)
        },1000)
    }

    const executor=(callback)=>{
        return(callback())
    }

    const clipcopy=(key)=>{
        navigator.clipboard.writeText(editor[key]);
    }

    //DEFINIÇÕES----------------------------------------------------------------------------------

    //params
    const {id}=useParams()
    //useForm
    const {register,handleSubmit}=useForm()
    //state
    const [loading,setLoading]=useState(true)
    const [editor,setEditor]=useState({title:'',description:'',content:''})
    //useNavigate
    const navigate=useNavigate()

    const [cookies,setCookies,removeCookies]= useCookies([`postagens-edit`]);

    //--------------------------------------------------------------------------------------------

    //userEffect
    useEffect(()=>{
        Data()
    },[])

    //--------------------------------------------------------------------------------------------
    return (
        <>
            {!loading &&
                <>
                    <section style={{
                        width: '800px',
                        minHeight:'400px',
                        display:'grid',
                        gridTemplateColumns:'40% 60%'
                    }} class="relative rounded-3xl overflow-hidden bg-[#0b0d0d] border-2 border-solid border-[#141717]">
                        <article class="p-6 relative w-full h-full bg-[#0b0d0d] flex flex-col justify-between items-center text-white">
                            <h1 className="select-none text-white font-ubuntuMono text-4xl uppercase">cookies</h1>

                            <p                                
                                className="
                                    scroll-hidden
                                    w-full h-14
                                    bg-transparent 
                                    border-2 border-[#161a1a] border-solid 
                                    p-3 
                                    overflow-x-auto
                                    overflow-y-hidden
                                    outline-none 
                                    rounded-xl                                     
                                    font-ubuntuMono
                                "                             
                            >{cookies[`title${id}`]}</p>
                            <p 
                                className="
                                    scroll-hidden
                                    w-full h-14 
                                    bg-transparent 
                                    border-2 border-[#161a1a] border-solid 
                                    p-3 
                                    overflow-x-auto
                                    overflow-y-hidden
                                    outline-none 
                                    rounded-xl 
                                    font-ubuntuMono
                                " 
                            >{cookies[`description${id}`]}</p>                            
                            <div           
                                style={{
                                    width:'270.85px',
                                    height:'192px',
                                    whiteSpace: 'wrap',
                                    wordWrap: 'break-word'
                                }}                     
                                className="
                                    scroll-hidden                
                                    bg-transparent 
                                    border-2 border-[#161a1a] border-solid
                                    p-3 
                                    overflow-x-hidden
                                    overflow-y-auto
                                    outline-none                                     
                                    rounded-xl 
                                    font-ubuntuMono 
                                " 
                            >
                                {cookies[`content${id}`]}
                            </div>

                            <p className="select-none text-white font-ubuntuMono text-xs opacity-40">estava escrevendo e do nada algo ocorreu?<br/>não se preocupe aqui ficam seus registros</p>
                        </article>
                        <form class="w-full h-full flex flex-col justify-between" onSubmit={handleSubmit(SubmitForm)}>
                            <div className="w-full h-full bg-[#090a0a] p-8">
                                <div className="flex flex-col gap-6">
                                    <label className="text-white">
                                        <h1 className="select-none ml-3 mb-1.5 font-ubuntuMono uppercase">titulo:</h1>
                                        <input className="w-96 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="title" {...register('title')} placeholder="titulo..." value={editor.title} onChange={async(input)=>{
                                            await setEditor({title:input.target.value})
                                            setCookies(`title${id}`,input.target.value,{path:`/postagens/`,'maxAge':10000})
                                        }} />
                                        <p className="select-none ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">adicione o titulo da postagem</p>
                                    </label>

                                    <label className="text-white">
                                        <h1 className="select-none ml-3 mb-1.5 font-ubuntuMono uppercase">descrisão:</h1>
                                        <input className="w-96 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="description" {...register('description')} placeholder="descricao..." value={editor.description} onChange={async(input)=>{
                                            await setEditor({description:input.target.value})                                    
                                            setCookies(`description${id}`,input.target.value,{path:`/postagens/`,'maxAge':10000})
                                        }} />
                                        <p className="select-none ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">descreva o conteudo da postagem</p>
                                    </label>

                                    <label className="text-white">
                                        <h1 className="select-none ml-3 mb-1.5 font-ubuntuMono uppercase">inserir o conteudo da Postagem: </h1>
                                        <textarea className="scroll-hidden w-96 h-48 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono resize-none" type="text" name="content" {...register('content')} value={editor.content} onChange={(input)=>{
                                            setEditor({content:input.target.value})
                                            setCookies(`content${id}`,input.target.value,{path:`/postagens/`,'maxAge':10000})
                                        }}/>
                                        <p className="select-none ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">conte-nos mais</p>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full h-12 rounded-bl-3xl overflow-hidden flex justify-between items-center">
                                <button type="button" onClick={()=>{
                                    navigate('/postagens/')
                                }} class="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">Voltar</button>

                                <button type="submit" class="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">Editar</button>
                            </div>
                        </form>
                    </section>
                </>}
            {loading && <Loading/>}

        </>
    );
}
/*
 * <form onSubmit={handleSubmit(SubmitForm)}>
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
*/


export default Edit;
