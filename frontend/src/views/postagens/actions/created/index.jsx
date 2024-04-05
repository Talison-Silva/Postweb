import React from "react";
import {useState} from "react";
import {useForm} from 'react-hook-form';

import {marked} from "marked";
//import loading
import Loading from "@/components/loading/index.jsx";

//backend connection
import api from "@/hook/backend.js";

//navigate
import { useNavigate } from "react-router-dom";

import {useCookies} from 'react-cookie';
import styled from 'styled-components';
import Historic from '@/components/historic/index.jsx';
import {Formik,Form} from 'formik';

import Input from '@/components/formik/logging/index.jsx'
import Editor from '@/components/formik/editor/index.jsx'
import Photography from '@/components/formik/photography/index.jsx'


const Container=styled.section`
    position:relative;
    min-width:800px;height:680px;
    overflow:hidden;
    background-color:#0b0d0d;
    border: 4px solid #141717;
    display:flex;
    border-radius:20px;
`

const Right=styled.div`
    min-width: 500px;
    height:100%;
    background-color:#090a0a;
    display:flex;
`

const Submit=styled.div`
    width:100%;
    height:52px;
    background-color:#101212;
    border-radius:0 0 20px 20px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Sections=styled.div`
    min-width:500px;
    height:100%;
    display:flex;
    flex-direction:column;
    gap:16px;
`

const Button=styled.button`
    color:white;
    font-family:'Ubuntu mono',monospace;
    text-transform:uppercase;
`

const Post=()=>{
    //FUÑÇÕES------------------------------------------------------------------------------------------------

    const SubmitForm=async(data)=>{
        await api.post('/application/',data).then(()=>{
            console.log('add deu certo')
        }).catch((error)=>{
            console.log(error)
        })

        //desviar a rota devolta para o feed :)
        navigate('/postagens/');
    }

    let response;
    const submit=async(values,setSubmitting)=>
    {
        console.log(values)
        try
        {
            response=await api.post('/application/',values);
            console.log(response.data)
        }
        catch(err)
        {
            console.log(err)
        }
        finally
        {
            navigate('/postagens/')
        }
        setSubmitting(false)
    }

    //DEFINIÇÕES----------------------------------------------------------------------------------------------
    const [cookies,setCookies,removeCookies]= useCookies([`postagens-created`]);
    const [editor,setEditor]=useState({title:'',description:'',content:''})
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()
    // setCookies('title',input.target.value,{path:`/postagens/`,'maxAge':10000})

    //--------------------------------------------------------------------------------------------------------
    return (
        <Container>
            <Historic schema={
                [{
                    name:'title',
                    type:'text',
                    value:cookies['title']
                },{
                    name:'description',
                    type:'text',
                    value:cookies['description']
                },{
                    name:'content',
                    type:'textarea',
                    value:cookies['content']
                }]
            } />
            <Formik
                onSubmit={submit}
                initialValues={{
                    title:'',
                    description:'',
                    content:'',
                }}
            >
                {({setFieldValue,values})=>(
                    <Form className="min-w-min min-h-min flex flex-col justify-between">
                        <Right>
                            <Sections className="p-5">
                                <Input name="title" cookie={setCookies} label="digite o titulo adequado para o conteudo com a postagem"/>
                                <Input name="description" cookie={setCookies} label="faça uma breve descrisão do conteudo da postagem"/>
                                <Photography name="photography" set={setFieldValue}/>
                            </Sections>
                            <Sections>
                                <Editor name="content" cookie={setCookies}/>
                            </Sections>
                        </Right>
                        <Submit>
                            <Button onClick={()=>
                                {
                                    navigate('/postagens/')
                                }
                            }>voltar</Button>
                            <Button type="submit">adicionar</Button>
                        </Submit>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}


/*<section style={{
            minWidth: '800px',
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
                >{cookies['title']}</p>
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
                >{cookies['description']}</p>
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
                    {cookies['content']}
                </div>

                <p className="select-none text-white font-ubuntuMono text-xs opacity-40">estava escrevendo e do nada algo ocorreu?<br/>não se preocupe aqui ficam seus registros</p>
            </article>
            <form class="min-w-min min-h-full flex flex-col justify-between" onSubmit={handleSubmit(SubmitForm)}>
                <div className="min-w-min bg-red-500 flex" style={{height:"571.7px"}}>
                    <div className="h-full bg-[#090a0a] p-8" style={{width:"700px"}}>
                        <div className="flex flex-col gap-6">
                            <label className="text-white">
                                <h1 className="ml-3 mb-1.5 font-ubuntuMono uppercase">titulo:</h1>
                                <input className="w-96 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="title" {...register('title')} placeholder="titulo..." value={editor.title} onChange={async(input)=>{
                                    await setEditor({title:input.target.value})
                                    setCookies('title',input.target.value,{path:`/postagens/`,'maxAge':10000})
                                }}/>
                                <p className="ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">adicione o titulo da postagem</p>
                            </label>

                            <label className="text-white">
                                <h1 className="ml-3 mb-1.5 font-ubuntuMono uppercase">descrisão:</h1>
                                <input className="w-96 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="description" {...register('description')} placeholder="descricao..." value={editor.description} onChange={async(input)=>{
                                    await setEditor({description:input.target.value})
                                    setCookies('description',input.target.value,{path:`/postagens/`,'maxAge':10000})
                                }}/>
                                <p className="ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">descreva o conteudo da postagem</p>
                            </label>

                            <label className="text-white">
                                <h1 className="ml-3 mb-1.5 font-ubuntuMono uppercase">inserir o conteudo da Postagem: </h1>
                                <textarea className="w-96 h-48 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="content" {...register('content')} value={editor.content} onChange={async(input)=>{
                                    await setEditor({content:input.target.value})
                                    setCookies('content',input.target.value,{path:`/postagens/`,'maxAge':10000})
                                }}/>
                                <p className="ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">conte-nos mais</p>
                            </label>
                            </div>
                    </div>

                    <div className="h-full bg-green-500" style={{width:"700px"}}></div>
                </div>
                <div className="w-full h-12 rounded-bl-3xl overflow-hidden flex justify-between items-center">
                    <button type="button" onClick={()=>{
                        navigate('/postagens/')
                    }} class="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">Voltar</button>

                    <button type="submit" class="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">Adicionar</button>
                </div>
            </form>
        </section>*/


// o botão submit está fora do form por isso não funciona

/*
<section
    style={{minWidth:"800px",height:"620px"}}
    className="relative rounded-3xl overflow-hidden bg-[#0b0d0d] border-2 border-solid border-[#141717] flex"
>
    <article 
        className="p-6 h-full flex flex-col justify-between items-center text-white"
        style={{width:"320px"}}
    >
        <h1 
            className="
                font-ubuntuMono 
                select-none                        
                text-white 
                uppercase                        
                text-4xl                 
            "
        >cookies</h1>

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
        >{cookies['title']}</p>
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
        >{cookies['description']}</p>
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
            {cookies['content']}
        </div>

        <p 
            className="
                font-ubuntuMono
                select-none
                opacity-40
                text-white                        
                text-xs                        
            "
        >
            estava escrevendo e do nada algo ocorreu?<br/>não se preocupe aqui ficam seus registros
        </p>
    </article>
    <form
        className="h-full bg-[#090a0a] flex flex-col justify-between"
        onSubmit={handleSubmit(SubmitForm)}
        style={{minWidth:"480px"}}                
    >
        <div
            className="min-w-min h-full bg-red-500 flex"
        >
            <div className="h-full bg-[#090a0a] p-8" style={{width:"450px"}}>
                <div className="flex flex-col gap-6">
                    <label className="text-white">
                        <h1 className="ml-3 mb-1.5 font-ubuntuMono uppercase">titulo:</h1>
                        <input className="w-96 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="title" {...register('title')} placeholder="titulo..." value={editor.title} onChange={async(input)=>{
                            await setEditor({title:input.target.value})
                            setCookies('title',input.target.value,{path:`/postagens/`,'maxAge':10000})
                        }}/>
                        <p className="ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">adicione o titulo da postagem</p>
                    </label>

                    <label className="text-white">
                        <h1 className="ml-3 mb-1.5 font-ubuntuMono uppercase">descrisão:</h1>
                        <input className="w-96 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="description" {...register('description')} placeholder="descricao..." value={editor.description} onChange={async(input)=>{
                            await setEditor({description:input.target.value})
                            setCookies('description',input.target.value,{path:`/postagens/`,'maxAge':10000})
                        }}/>
                        <p className="ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">descreva o conteudo da postagem</p>
                    </label>

                    <label className="text-white">
                        <h1 className="ml-3 mb-1.5 font-ubuntuMono uppercase">inserir o conteudo da Postagem: </h1>
                        <textarea className="w-96 h-48 bg-transparent border-2 border-[#161a1a] border-solid p-3 outline-none rounded-xl font-ubuntuMono" type="text" name="content" {...register('content')} value={editor.content} onChange={async(input)=>{
                            await setEditor({content:input.target.value})
                            setCookies('content',input.target.value,{path:`/postagens/`,'maxAge':10000})
                        }}/>
                        <p className="ml-3 mt-1.5 font-ubuntuMono text-xs text-[#474a4a]">conte-nos mais</p>
                    </label>
                    </div>
            </div>

            <div 
                className="h-full bg-[#090a0a]"
                style={{width:"400px"}}
            >
                <label className="h-full flex flex-col justify-between items-center text-white">
                    <div className="w-full h-14"></div>
                    <textarea 
                        className="p-3 w-80 h-full bg-transparent rounded-xl font-ubuntuMono resize-none outline-none border-2 border-solid border-[#161a1a]"
                        type="text" name="content"
                        value={editor.content} 

                        {...register('content')}

                        onChange={async(input)=>{
                            await setEditor({content:input.target.value})
                            setCookies('content',input.target.value,{path:`/postagens/`,'maxAge':10000})
                            renderPageMarkdown();
                        }}
                    />
                    <div className="w-full h-14"></div>
                </label>
            </div>

            <div id="render-page-markdown" className="h-full bg-white" style={{width:"400px"}}/>
        </div>

        <div 
            className="w-full h-12 rounded-bl-3xl overflow-hidden flex justify-between items-center"
        >
            <button type="button" onClick={()=>{
                navigate('/postagens/')
            }} class="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">Voltar</button>

            <button type="submit" class="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">Adicionar</button>
        </div>
    </form>
</section>
*/

export default Post;
