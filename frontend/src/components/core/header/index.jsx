import React from "react";
import {Link} from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import Navigate from "@/components/core/navigate/index.jsx";
import api from "@/hook/backend.js";
import { useEffect,useState } from "react";

//import loading
import Loading from "@/components/loading/index.jsx";
import "./s.css";

const Header=()=>{
    const Data=async()=>{
        await api.get('/users/me').then((response)=>{
            localStorage.setItem('user',JSON.stringify(response.data[0]))
            setResponse(response.data[0])
        }).catch((err)=>{
            switch(err.response.status){
                case 401:
                    navigate('/entrar?')
                default:
                    console.error(err)
            }
        })
        setTimeout(()=>{setLoading(false)},1000)
    }

    const changeLanguage=()=>{
      if(document.getElementById("pt").checked){
      }
      else if(document.getElementById("in").checked){
      }
    }

    const actionCreated=()=>{
      if(created[0]){
        setCreated([false,"created","/postagens/c"])
      }else{
        setCreated([true,"voltar","/postagens/"])
      }
      navigate(created[2])
    }

    const logOut=()=>{
        localStorage.removeItem("token")
        navigate('/entrar?')
    }

    const [panelaccount,setPanelaccount]=useState(false)
    const [loading,setLoading]=useState(true)
    const [created,setCreated]=useState([])
    const [response,setResponse]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        Data();
    },[])

    useEffect(()=>{
      switch(window.location.pathname){
          case "/postagens/c":
            setCreated([true,"voltar","/postagens/"])
            break
          default:
            setCreated([false,"created","/postagens/c"])
        }
    },[window.location.pathname])

    return(
      <>
        {!loading && <header className="fixed w-full h-16" style={{backgroundColor:"rgba(7, 8, 8,.4125)"}}>
            <div className="px-10 w-full h-full backdrop-blur-lg">
              <div className="relative w-full h-full flex justify-around items-center">
                <label className="flex gap-5 items-center select-none">
                    <button onClick={()=>{navigate('/')}} className="w-7 h-7 border-white border-solid border-8 rounded-full"/>
                    <p className="font-ubuntuMono text-white uppercase font-bold text-2xl">postweb</p>
                </label>

                <div className="min-w-min min-h-min flex gap-3">
                    <Navigate/>
                    <button onClick={actionCreated} type="button" className="p-2.5 w-40 bg-white rounded-full uppercase font-bold">{created[1]}</button>
                </div>

                <div className="relative min-w-40 h-12 select-none">
                  <div className="flex justify-center items-center gap-3">
                      <article className="z-50 min-w-min min-h-min">
                          <p className="font-bold text-nowrap text-white uppercase" style={{fontSize:"13px"}}>{response.username}</p>
                          <p className="text-green-500 text-center" style={{fontSize:"11px"}}>online</p>
                      </article>
                      <img onClick={()=>{setPanelaccount(!panelaccount)}} width="45" src={`http://localhost:3005/${response.photo}`} style={{clipPath:"circle(40%)"}} className="z-50 cursor-pointer"/>
                  </div>
                   {panelaccount && <ul onMouseLeave={()=>{setPanelaccount(!panelaccount)}} className="absolute z-10 py-3 top-full right-auto w-40 min-h-10 bg-[#0B0D0D] flex flex-col justify-center items-center border-2 border-solid border-[#141717] gap-3 rounded-lg">
                       <li>
                          <button type="button" onClick={()=>{logOut()}} className="text-red-500 font-bold font-ubuntuMono uppercase">logout</button>
                       </li>
                       <li>
                          <button type="button" className="text-white font-bold font-ubuntuMono uppercase">profile</button>
                       </li>
                   </ul>}
                </div>

                <div className="absolute top-auto right-0 bg-[#141717] text-white min-w-min h-10 rounded-xl flex">
                    <label for="pt" onClick={()=>{changeLanguage()}} className="relative w-10 h-10 font-ubuntuMono font-bold uppercase rounded-l-lg flex justify-center items-center overflow-hidden">
                        <input id="pt" type="radio" name="language" className="absolute opacity-0"/>
                        <span className="w-full h-full flex justify-center items-center select-none">
                          <p>pt</p>
                        </span>
                    </label>
                    <label for="in" onClick={()=>{changeLanguage()}} className="relative w-10 h-10 font-ubuntuMono font-bold uppercase rounded-r-lg flex justify-center items-center overflow-hidden">
                        <input id="in" type="radio" name="language" className="absolute opacity-0"/>
                        <span className="w-full h-full flex justify-center items-center select-none">
                          <p>in</p>
                        </span>
                    </label>
                </div>
              </div>
            </div>
        </header>}
      </>
    )
}

export default Header;

