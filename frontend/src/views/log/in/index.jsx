import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import api from '@/hook/backend.js'
import {useState} from 'react'

function IN(){
    const {register,handleSubmit}=useForm()
    const [status,setStatus]=useState({status:0,state:3})
    const navigate= useNavigate();

    async function submit(fields){
        try{
            var {data}=await api.post('/users/authenticate',fields)

            if(data.token){localStorage.setItem("token",data.token)}

            setStatus({status:200,state:1})

            navigate("/me")
        }catch(err){
            setStatus({status:500,state:2})
            console.error(err)
        }
    }
    // code - 201
    return(
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
                        <input type="text" name="username" {...register('username')} className="p-5 w-full h-12 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl"/>
                        <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu nick de Usuario</p>
                    </label>

                    <label className="mb-2 w-full min-h-min flex flex-col">
                        <h1 className="uppercase text-xl text-white font-ubuntuMono">Email:</h1>
                        <input type="email" name="email" {...register('email')} className="p-5 w-full h-12 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl"/>
                        <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu email de Usuario</p>
                    </label>

                    <label className="mb-2 w-full min-h-min flex flex-col">
                        <h1 className="uppercase text-xl text-white font-ubuntuMono">Password:</h1>
                        <input type="password" name="password" {...register('password')} className="p-5 w-full h-12 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl"/>
                        <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite sua senha</p>
                    </label>
                </div>

                <button type="submit" className="w-full h-16 bg-white rounded-xl text-black uppercase font-ubuntuMono">authenticação</button>
            </section>
            <section className="w-full h-14 bg-[#080808] flex justify-center items-center">
                <p className="font-ubuntuMono text-white"> Voçê não possui uma conta? <a href="/registrar" className="text-blue-500">click aqui</a>, são só alguns minutinhos</p>
            </section>
        </form>
    )
}

export default IN;
