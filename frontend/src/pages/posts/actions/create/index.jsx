import React from "react";

import { useNavigate } from "react-router-dom";

import {useCookies} from 'react-cookie';
import styled from 'styled-components';
import {Hook} from "@/app/hook/hook.ts";
import Historic from '@/UI/components/historic/index.jsx';
import {Formik,Form} from 'formik';

import Input from '@/UI/components/formik/input/index.jsx'
import Editor from '@/UI/components/formik/editor/index.jsx'
import Photography from '@/UI/components/formik/photography/index.jsx'

import Carrossel from '@/UI/components/carrossel/index.tsx';
import Steps from './steps/index.ts';

const Container=styled.section`
    position:relative;
    padding: 100px 50px 100px 50px;
    min-width:min-content;
    height:min-content;
    overflow:hidden;    
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
`//

const Button=styled.button`
    color:white;
    font-family:'Ubuntu mono',monospace;
    text-transform:uppercase;
`

export default () => 
{

    const submit = async (values,setSubmitting) =>
    {        
        await Hook.push('/new-posts/').post(values);
        navigate('/postweb/posts/');

        setSubmitting(false);
    }


    const [cookies,setCookies] = useCookies([`postagens-created`]);
    const navigate = useNavigate();
    
    return (
        <Container>            
            <Formik
                onSubmit={submit}
                initialValues={{
                    title:cookies['title']?cookies['title']:"",
                    description:cookies['description']?cookies['description']:"",
                    content:cookies['content']?cookies['content']:"",
                }}
            >
                {({setFieldValue,values})=>(
                    <Form className="min-w-min min-h-min flex flex-col justify-between">
                        <Carrossel steps={Steps}/>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

/*

<Right>
    <Sections className="p-5">
        <Input name="title" cookie={setCookies} label="digite o titulo adequado para o conteudo com a postagem"/>
        <Input name="description" cookie={setCookies} label="faça uma breve descrisão do conteudo da postagem"/>
        <Photography name="emphasis" set={setFieldValue}/>
    </Sections>
    <Sections>
        <Editor name="content" cookie={setCookies}/>
    </Sections>
</Right>
<Submit>
    <Button onClick={()=>{navigate('/posts/')}}>voltar</Button>
    <Button type="submit">adicionar</Button>
</Submit>

*/