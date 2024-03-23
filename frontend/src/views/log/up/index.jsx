import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import api from '@/hook/backend.js'
import {useState} from 'react';

function UP(){
    const {register,handleSubmit}=useForm()
    const [visibility,setVisibility]=useState(true);
    const [status,setStatus]=useState(undefined)
    const navigate= useNavigate();

    function handleUpload(e){
        let file,leitor,viewer;
        viewer=document.getElementById('viewer')
        file=e.target.files[0]

        if(file){
            leitor=new FileReader()
            leitor.onload =(e)=>{
                viewer.src = e.target.result;
            }

            leitor.readAsDataURL(file)
        }
    }

    function handleVisibility(){
        setVisibility(!visibility)
    }


    async function submit({username,me,email,password,photo}){
        try{
            var {data}=await api.post('/users/register',{
                username:username,
                email:email,
                password:password,
                me:me,
                photo:photo[0]
            })
            console.log(data)
            //setTimeout(()=>{navigate('/postagens/',1000)})
        }catch(err){
            //setStatus(false)
            //console.error(err)
        }
    }

    return(
        <form className="w-full h-full flex flex-col justify-between" onSubmit={handleSubmit(submit)}>
            <section className="pt-6 px-6 w-full min-h-min bg-[#080808] flex justify-center items-center gap-10">
                <div className="relative w-24 h-24 bg-white overflow-hidden rounded-xl flex justify-center items-center">
                    <img id="viewer" src="#"/>
                    <input type="file" name="photo" {...register('photo')} className="absolute top-0 left-0 w-24 h-24 opacity-0" onChange={handleUpload}/>
                </div>
                <label className="mb-2 w-4/5 min-h-min flex flex-col">
                    <h1 className="uppercase text-xl text-white font-ubuntuMono">UserName:</h1>
                    <input type="text" name="username" {...register('username')} className="mp-5 p-5 w-full h-12 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl"/>
                    <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu nick de Usuario</p>
                </label>
            </section>
            <section className="p-5 w-full h-full flex flex-col justify-between bg-[#080808]">
                <div>
                    <label className="mb-2 w-full min-h-min flex flex-col">
                        <h1 className="uppercase text-xl text-white font-ubuntuMono">Email:</h1>
                        <input type="email" name="email" {...register('email')} className="p-5 w-full h-12 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl"/>
                        <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu email de Usuario</p>
                    </label>

                    <label className="mb-2 w-full min-h-min flex flex-col">
                        <h1 className="uppercase text-xl text-white font-ubuntuMono">Password:</h1>
                        <div className="w-full min-h-min flex border border-solid border-[#383838] bg-transparent rounded-xl flex items-center">
                            <input type={visibility?'password':'text'} name="password" {...register('password')} className="p-5 w-full h-12 outline-none  bg-transparent text-white font-ubuntuMono text-xl"/>
                            <button onClick={handleVisibility} className="w-10 h-full" type="button">
                            {(visibility) && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#383838]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>}
                            {(!visibility) && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#383838]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>}
                          </button>
                        </div>
                        <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite sua senha</p>
                    </label>

                    <label className="mb-2 w-full min-h-min flex flex-col">
                        <h1 className="uppercase text-xl text-white font-ubuntuMono">me:</h1>
                        <textarea type="text" name="me" {...register('me')} className="p-5 w-full h-32 resize-none outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl"/>
                        <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite sua senha</p>
                    </label>
                </div>

                <button type="submit" className="w-full h-16 bg-white rounded-xl text-black uppercase font-ubuntuMono">authenticação</button>
            </section>
            <section className="w-full h-14 bg-[#080808] flex justify-center items-center">
                <p className="font-ubuntuMono text-white"> Voçê possui já conta? <a href="/entrar" className="text-blue-500">click aqui</a>,o login só demora uns minutinhos</p>
            </section>
        </form>
    )
}

export default UP;
