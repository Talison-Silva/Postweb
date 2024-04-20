import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import api from '@/app/hook/backend.js'
import {useState,useRef} from 'react'
import Input from "@/ui/components/formik/logging/index.jsx"
import {Formik,Form} from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import State from '@/ui/components/state/index.jsx'


const Submit=styled.button`
    margin-top:10px;
    width:100%;
    height:60px;
    border-radius:15px;
    background-color:white;
    color:black;
    text-transform:uppercase;
`

const Container=styled.section`
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    font-family:'Ubuntu mono',monospace;
`

const Title=styled.div`
    width:100%;
    height:64px;
    background-color:#080808;
    padding:0 24px 0 24px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const LogUp=styled.pre`
    width:100%;
    height: 56px;
    background-color: #080808;
    color:white;
    font-weight:600;
    display:flex;
    justify-content:center;
    align-items:center;
`


const validationSchema=Yup.object({
    username:Yup.string().required('este campo é obrigatório'),
    email:Yup.string().email('adicione um @exemple.com').required('este campo é obrigatório'),
    password:Yup.string().min(4,'o minimo são 8 carateres').required('este campo é obrigatório'),
})


const IN=()=>
{
    const submit=async(value,{setSubmitting})=>
    {
        try
        {
            const {data}=await api.post("/users/authenticate",value)
            localStorage.setItem("token",data.token)            
            setStatus(200)

            setTimeout(()=>
            {
                navigate("/me")
            }
            ,1000)
        }
        catch(err)
        {
            setStatus(500)
        }
        setSubmitting(false)
    }


    const {register,handleSubmit}=useForm()
    const [status,setStatus]=useState(0)
    const navigate= useNavigate();


    return(
        <Container>
            <State status={status}/>
            <Formik
                onSubmit={submit}
                initialValues={{
                    username:"",
                    email:"",
                    password:""
                }}
                validationSchema={validationSchema}                
            >
                {(value,isSubmitting)=>(
                    <Form className="w-full flex flex-col gap-5 p-6">
                        <Input name="username" required/>
                        <Input name="email" required/>
                        <Input name="password" type="password" required/>                            
                        <Submit
                            type="submit"
                        >authentificar</Submit>
                    </Form>
                )}
            </Formik>
            <LogUp>
                voçê não possui uma conta? <a href="/registrar" className="text-blue-500">click aqui</a>
            </LogUp>
        </Container>
    )
}


export default IN;
