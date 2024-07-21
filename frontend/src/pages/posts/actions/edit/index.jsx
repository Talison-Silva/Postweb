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

import Input from '@/UI/components/formik/input/index.jsx';
import Editor from '@/UI/components/formik/editor/index.jsx';
import Photography from '@/UI/components/formik/photography/index.jsx';

import Carrossel from '@/UI/components/carrossel/index.tsx';
import Steps from './steps/index.ts';


const Container=styled.section`
    position:relative;
    padding: 100px 50px 100px 50px;
    min-width:min-content;
    height:min-content;
    overflow:hidden;    
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
        navigate('/postweb/posts/');
    }

    //
    const fetchPostagem=async()=>
    {
        const { data } = await Hook.push('/new-posts/').get({filter: JSON.stringify({id:id})});
        setInitial({description:data[0].description,content:data[0].content,title:data[0].title,emphasis:data[0].emphasis});

        setTimeout(() => {setLoading(false)},1000);
    }


    const [initial,setInitial]=useState({title:'',description:'',content:'',emphasis:''});
    const [cookies,setCookies]= useCookies([`postagens-edit`]);
    const [loading,setLoading]=useState(true);
    const navigate=useNavigate();
    const {id}=useParams();


    useEffect(()=>{fetchPostagem()},[])    

    /*

    {
        title:cookies['title'+id]?cookies['title'+id]:"",
        description:cookies['description'+id]?cookies['description'+id]:"",
        content:cookies['content'+id]?cookies['content'+id]:"",
    }

    */

    if(!loading)
    {
        return(
            <Container>                
                <Formik
                    onSubmit={submit}
                    initialValues={initial}
                >
                    {({setFieldValue,values})=>(
                        <Form className="min-w-min min-h-min flex flex-col justify-between">
                            <Carrossel steps={Steps} id={id}/>
                        </Form>
                    )}
                </Formik>
            </Container>
        )
    }
    else { return <Loading/> }
}