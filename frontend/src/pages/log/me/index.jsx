import Loading from "@/ui/components/loading/index.jsx";
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'
import api from '@/app/hook/backend.js'
import styled from "styled-components";
import Input from "@/ui/components/show/input/index.jsx";
import Description from "@/ui/components/show/description/index.jsx";
import Photo from "@/ui/components/show/photo/index.jsx";


const Container=styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    gap:20px;
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


const ME=()=>
{
    const fetchUser=async()=>
    {       
        try
        {
            const {data}=await api.get("/users/me")
            setResponse(data[0])
        }
        catch(err)
        {
            switch(err.response.status){
                case 401:
                    navigate('/entrar?')
                    break
                default:
                    console.error(err)
            }
        }
    }


    const [loading,setLoading]=useState(true);
    const [response,setResponse]=useState();
    const navigate=useNavigate();


    useEffect(()=>
    {
        fetchUser()
    }
    ,[])

    useEffect(()=>
    {
        if(response)
        {            
            setLoading(false)
        }
    }
    ,[response])

    return(
        <>
        {
            !(loading) && 
            <Container>
              <Rows>
                  <Photo url={`http://localhost:3005/${response.photo}`}/>
                  <Input name="username" value={response.username}/>
              </Rows>
              <Columns>                                
                  <Input name="email" value={response.email}/>
                  <Description name="me" value={response.me}/>

                  <button onClick={()=>{navigate('/postagens/')}} type="button" className="w-full h-16 bg-white rounded-xl text-black uppercase font-ubuntuMono">proseguir?</button>
              </Columns>
            </Container>
        }
        </>
    )
}


export default ME;
