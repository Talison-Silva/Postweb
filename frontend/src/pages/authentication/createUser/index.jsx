import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import api from '@/app/hook/backend.js'
import {useState,useRef} from 'react';
import styled from 'styled-components';

import Input from '@/UI/components/formik/input/index.jsx';
import Photo from '@/UI/components/formik/photo/index.jsx';
import Description from '@/UI/components/formik/description/index.jsx';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';


const Container=styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 40px;
    flex-direction: column;
    justify-content: space-between;
    background-color: #080808;
`

const Rows=styled.div`
    width:100%;
    min-height: min-content;

    display: grid;
    grid-template-columns:20% 80%;
    grid-gap:0px;
`

const Columns=styled.div`
    width:100%;
    min-height: min-content;

    display: flex;
    flex-direction:column;
    gap:20px;
`

const Submit=styled.button`
    margin-top:10px;
    width:100%;
    height:60px;
    border-radius:15px;
    background-color:white;
    color:black;
    font-family:'Ubuntu mono',monospace;
    text-transform:uppercase;
`


const validationSchema=Yup.object({
    username:Yup.string().required('este campo é obrigatório'),
    email:Yup.string().email('o email deve conter um @exemple.com').required('este campo é obrigatório'),
    password:Yup.string().required('este campo é obrigatório'),
    me:Yup.string().required('este campo é obrigatório')        
})


function createUser(){

    const submit=async(values,{setSubmitting})=>
    {
        try
        {
            var response=await api.post('/users/register',{...values,photo:filei})
        }
        catch(err)
        {
            console.error(err)
        }

        setSubmitting(false)
    }


    const [visibility,setVisibility]=useState(true);
    const [status,setStatus]=useState(undefined);
    const {register,handleSubmit}=useForm();
    const [filei,setFilei]=useState(null);
    const navigate= useNavigate();
    const file= useRef(null);


    return(
        <Container>
            <Formik
                onSubmit={submit}
                initialValues={{
                    username:'',
                    email:'',
                    password:'',
                    me:'',
                    photo:''
                }}
                validationSchema={validationSchema}
            >
                {(value,isSubmitting)=>(
                    <Form className="w-full h-full flex flex-col gap-5">
                        <Rows>
                            <Photo fileRef={file} name="photo" change={(file2)=>{
                                setFilei(file2)
                            }}/>
                            <Input name="username" required/>
                        </Rows>
                        
                        <Input name="email" required/>
                        <Input name="password" type="password" required/>
                        <Description name="me" required/>
                        
                        <Submit
                                type="submit"
                        >Criar Usuario</Submit>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default createUser;
