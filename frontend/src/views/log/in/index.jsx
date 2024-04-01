import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import api from '@/hook/backend.js'
import {useState} from 'react'
import Input from "@/components/formik/logging/index.jsx"
import {Formik,Form} from "formik";
import styled from "styled-components";
import * as Yup from "yup";


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


function IN(){
    const {register,handleSubmit}=useForm()
    const [status,setStatus]=useState({status:0,state:3})
    const navigate= useNavigate();

    const validationSchema=Yup.object({
        username:Yup.string().required('este campo é obrigatório'),
        email:Yup.string().email('adicione um @exemple.com').required('este campo é obrigatório'),
        password:Yup.string().min(4,'o minimo são 8 carateres').required('este campo é obrigatório'),
    })

    /*async function submit(fields){        
        await api.post("/users/authenticate",fields).then(({data})=>{                        
            localStorage.setItem("token",data.token)
            setStatus({status:200,state:1})

            setTimeout(()=>{
                navigate("/me")
            },1000)
        }).catch((err)=>{
            setStatus({status:500,state:2})
            console.error(err)
        })
    }*/


    async function handlesubmit(value,{setSubmitting}){
        console.log(value)

        await api.post("/users/authenticate",value).then(({data})=>{
            console.log("data:",data)
            localStorage.setItem("token",data.token)
            setStatus({status:200,state:1})

            setTimeout(()=>{
                navigate("/me")
            },1000)
        }).catch((err)=>{
            setStatus({status:500,state:2})
            console.error(err)
        })

        setSubmitting(false)
    }

    // code - 201
    return(
        <div className="w-full h-full flex flex-col justify-between">
            <section className="px-6 w-full h-32 bg-[#080808] flex justify-between items-center">
                <h1 className="uppercase text-white font-ubuntuMono text-5xl">loggin</h1>
                {(status.state===1) && <h1 className="uppercase font-ubuntuMono text-5xl text-green-600">{status.status}</h1>}
                {(status.state==2) && <h1 className="uppercase font-ubuntuMono text-5xl text-red-600">{status.status}</h1>}
                {(status.state===3) && <h1 className="uppercase font-ubuntuMono text-5xl text-white">{status.status}</h1>}
            </section>
            <section className="p-5 w-full h-full bg-[#080808] flex flex-col justify-between">                
                <Formik
                    onSubmit={handlesubmit}
                    initialValues={{username:"",email:"",password:""}}
                    validationSchema={validationSchema}
                >
                    {(value,isSubmitting)=>(
                        <Form className="w-full flex flex-col gap-5">
                            <Input name="username" required/>
                            <Input name="email" required/>
                            <Input name="password" type="password" required/>                            
                            <Submit
                                type="submit"
                            >authentificar</Submit>
                        </Form>
                    )}
                </Formik>
            </section>            
            <section className="w-full h-14 bg-[#080808] flex justify-center items-center">
                <p className="font-ubuntuMono text-white"> Voçê não possui uma conta? <a href="/registrar" className="text-blue-500">click aqui</a>, são só alguns minutinhos</p>
            </section>
        </div>
    )
}

/*
<form className="w-full h-full flex flex-col justify-between" onSubmit={handleSubmit(submit)}>
    <section className="px-6 w-full h-32 bg-[#080808] flex justify-between items-center">
        <h1 className="uppercase text-white font-ubuntuMono text-5xl">loggin</h1>
        {(status.state===1) && <h1 className="uppercase font-ubuntuMono text-5xl text-green-600">{status.status}</h1>}
        {(status.state==2) && <h1 className="uppercase font-ubuntuMono text-5xl text-red-600">{status.status}</h1>}
        {(status.state===3) && <h1 className="uppercase font-ubuntuMono text-5xl text-white">{status.status}</h1>}
    </section>
    <section className="p-5 w-full h-full bg-[#080808] flex flex-col justify-between">
        <div>
            <label className="mb-2 w-full min-h-min flex flex-col">
                <h1 className="uppercase text-xl text-white font-ubuntuMono">UserName:</h1>
                <input type="text" name="username" {...register('username')} className="mt-3 p-5 w-full h-14 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-lg"/>
                <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu nick de Usuario</p>
            </label>

            <label className="mb-2 w-full min-h-min flex flex-col">
                <h1 className="uppercase text-xl text-white font-ubuntuMono">Email:</h1>
                <input type="email" name="email" {...register('email')} className="mt-3 p-5 w-full h-14 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-lg"/>
                <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu email de Usuario</p>
            </label>

            <label className="mb-2 w-full min-h-min flex flex-col">
                <h1 className="uppercase text-xl text-white font-ubuntuMono">Password:</h1>
                <input type="password" name="password" {...register('password')} className="mt-3 p-5 w-full h-14 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-lg"/>
                <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite sua senha</p>
            </label>
        </div>

        <button type="submit" className="w-full h-16 bg-white rounded-xl text-black uppercase font-ubuntuMono">authenticação</button>
        <Formik
            onsubmit={submit}
            initialValues={{username:"",email:"",password:""}}
            validationSchema={validationSchema}
        >
            {(value,isSubmitting)=>(
                <Form className="w-full flex flex-col gap-5">
                    <Input name="username" required/>
                    <Input name="email" required/>
                    <Input name="password" type="password" required/>                            
                    <Submit
                        type="submit"
                    >authentificar</Submit>
                </Form>
            )}
        </Formik>
    </section>            
    <section className="w-full h-14 bg-[#080808] flex justify-center items-center">
        <p className="font-ubuntuMono text-white"> Voçê não possui uma conta? <a href="/registrar" className="text-blue-500">click aqui</a>, são só alguns minutinhos</p>
    </section>
</form>
*/

export default IN;
