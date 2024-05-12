//import react
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

//import loading
import Loading from "@/UI/components/loading/index.jsx";

import {useCookies} from 'react-cookie';
import {Hook} from "@/app/hook/hook.ts";

import styled from 'styled-components';

import Historic from '@/UI/components/historic/index.jsx';
import { Formik ,Form } from 'formik';

import Input from '@/UI/components/formik/input/index.jsx'
import Editor from '@/UI/components/formik/editor/index.jsx'
import Photography from '@/UI/components/formik/photography/index.jsx'

const Container=styled.section`
    position:relative;
    min-width:800px;height:680px;
    overflow:hidden;
    background-color:#0b0d0d;
    border: 4px solid #141717;
    display:flex;
    border-radius:20px;
`

const Sections=styled.div`
    min-width:500px;
    height:100%;
    display:flex;
    flex-direction:column;
    gap:16px;
`

const Right=styled.div`
    min-width: 500px;
    height:100%;
    background-color:#090a0a;
    display:flex;
`

const Button=styled.button`
    color:white;
    font-family:'Ubuntu mono',monospace;
    text-transform:uppercase;
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

export default () => 
{
    const submit=async(data)=>
    {
        await Hook.push('/new-posts/').put({id,...data});
        navigate('/posts/');
    }


    const fetchPostagem=async()=>
    {
        const { data } = await Hook.push('/new-posts/').get({filter: JSON.stringify({id:id}) });
        setInitial({description:data[0].description,content:data[0].content,title:data[0].title});

        setTimeout(() => {setLoading(false)},1000);
    }


    const [initial,setInitial]=useState({title:'',description:'',content:''});
    const [cookies,setCookies]= useCookies([`postagens-edit`]);
    const [loading,setLoading]=useState(true);
    const navigate=useNavigate();
    const {id}=useParams();


    useEffect(()=>{fetchPostagem()},[])

    if(!loading)
    {
        return(
            <Container>
                <Historic schema={
                    [{
                        name:'title',
                        type:'text',
                        value:cookies[`title${id}`]
                    },{
                        name:'description',
                        type:'text',
                        value:cookies[`description${id}`]
                    },{
                        name:'content',
                        type:'textarea',
                        value:cookies[`content${id}`]
                    }]
                } />                    
                <Formik
                    onSubmit={submit}
                    initialValues={initial}
                >
                    {({setFieldValue,values})=>(
                        <Form className="min-w-min min-h-min flex flex-col justify-between">
                            <Right>
                                <Sections className="p-5">
                                    <Input name="title" id={id} cookie={setCookies} label="digite o titulo adequado para o conteudo com a postagem"/>
                                    <Input name="description" id={id} cookie={setCookies} label="faça uma breve descrisão do conteudo da postagem"/>
                                    <Photography name="photography" set={setFieldValue}/>
                                </Sections>
                                <Sections>
                                    <Editor name="content" id={id} cookie={setCookies}/>
                                </Sections>
                            </Right>
                            <Submit>
                                <Button onClick={() => navigate('/posts/')}>voltar</Button>
                                <Button type="submit">editar</Button>
                            </Submit>
                        </Form>
                    )}
                </Formik>
            </Container>
        )
    }
    else { return <Loading/> }
}