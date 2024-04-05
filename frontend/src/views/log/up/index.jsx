import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import api from '@/hook/backend.js'
import {useState,useRef} from 'react';
import styled from 'styled-components';

import Input from '@/components/formik/logging/index.jsx';
import Photo from '@/components/formik/photo/index.jsx';
import Description from '@/components/formik/description/index.jsx';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';


// w-full h-full flex flex-col justify-between
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


function UP(){
    const {register,handleSubmit}=useForm()
    const [visibility,setVisibility]=useState(true);
    const [status,setStatus]=useState(undefined)
    const navigate= useNavigate();
    const validationSchema=Yup.object({
        username:Yup.string().required('este campo é obrigatório'),
        email:Yup.string().email('o email deve conter um @exemple.com').required('este campo é obrigatório'),
        password:Yup.string().required('este campo é obrigatório'),
        me:Yup.string().required('este campo é obrigatório')        
    })
    const file= useRef(null);
    const [filei,setFilei]=useState(null);

    const handlesubmit=async(values,{setSubmitting})=>
    {
        try
        {
            var response=await api.post('/users/register',{...values,photo:filei})
        }
        catch(err)
        {
            console.log(err)
        }
        finally
        {
            console.log(response)
        }

        setSubmitting(false)
    }

    return(
        <Container>
                <Formik
                    onSubmit={handlesubmit}
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

export default UP;
