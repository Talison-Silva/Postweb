import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'
import api from '@/hook/backend.js'

function ME(){
    const fetchUserToken=async()=>{
        await api.get("/users/me").then(({data})=>{
            setResponse(data[0])
        }).catch(async(err)=>{
            switch(err.response.status){
                case 401:
                    navigate('/entrar?')
                    break
                default:
                    console.error(err)
            }
        })
    }

    const [response,setResponse]=useState()
    const navigate=useNavigate();

    useEffect(()=>{
        fetchUserToken()
    },[])

    return(
        <>
            {(response) && <section className="w-full h-full flex flex-col justify-between bg-[#080808]">
                <h1 className="text-white"></h1>
                <section className="pt-6 px-6 w-full min-h-min bg-[#080808] flex justify-center items-center gap-10">
                    <div className="relative w-28 h-28 bg-white overflow-hidden rounded-xl flex justify-center items-center">
                        <img id="viewer" src={`http://localhost:3005/${response.photo}`}/>
                    </div>
                    <label className="mb-2 w-4/5 min-h-min flex flex-col">
                        <h1 className="uppercase text-xl text-white font-ubuntuMono">UserName:</h1>
                        <span className="mp-5 p-5 w-full h-12 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl flex items-center">
                            {response.username}
                        </span>
                        <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu nick de Usuario</p>
                    </label>
                </section>
                <section className="p-5 w-full h-full flex flex-col justify-between bg-[#080808]">
                    <div>
                        <label className="mb-2 w-full min-h-min flex flex-col">
                            <h1 className="uppercase text-xl text-white font-ubuntuMono">Email:</h1>
                            <span className="p-5 w-full h-12 outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl flex items-center">
                                {response.email}
                            </span>
                            <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite seu email de Usuario</p>
                        </label>

                        <label className="mb-2 w-full min-h-min flex flex-col">
                            <h1 className="uppercase text-xl text-white font-ubuntuMono">me:</h1>
                            <span className="p-5 w-full min-h-32 resize-none outline-none rounded-xl border border-solid border-[#383838] bg-transparent text-white font-ubuntuMono text-xl">
                                {response.me}
                            </span>
                            <p className="mt-2 uppercase text-xs text-[#828282] font-ubuntuMono">digite sua senha</p>
                        </label>
                    </div>

                    <button onClick={()=>{navigate('/postagens/')}} type="button" className="w-full h-16 bg-white rounded-xl text-black uppercase font-ubuntuMono">proseguir?</button>
                </section>
                <section className="w-full h-14 bg-[#080808] flex justify-center items-center"/>
            </section>}
        </>
    )
}

export default ME;
