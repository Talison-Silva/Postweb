import React from "react";
import {useState} from "react";
import {useForm} from 'react-hook-form';

import {marked} from "marked";
//import loading
import Loading from "@/ui/components/loading/index.jsx";

//backend connection
import api from "@/app/hook/backend.js";

//navigate
import { useNavigate } from "react-router-dom";

import {useCookies} from 'react-cookie';
import styled from 'styled-components';
import Historic from '@/ui/components/historic/index.jsx';
import {Formik,Form} from 'formik';

import Input from '@/ui/components/formik/logging/index.jsx'
import Editor from '@/ui/components/formik/editor/index.jsx'
import Photography from '@/ui/components/formik/photography/index.jsx'


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

const Created=()=>{

    const submit=async(values,setSubmitting)=>
    {
        try
        {
            const {data}=await api.post('/application/',values);
        }
        catch(err)
        {
            console.error(err)
        }
        finally
        {
            navigate('/postagens/')
        }
        setSubmitting(false)
    }


    const [cookies,setCookies,removeCookies]= useCookies([`postagens-created`]);
    const [editor,setEditor]=useState({title:'',description:'',content:''})
    const {register,handleSubmit}=useForm()
    const navigate=useNavigate()

    
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


export default Created;