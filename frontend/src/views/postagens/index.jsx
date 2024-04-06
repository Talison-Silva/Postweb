import Postagens from '@/components/tables/postagens/index.jsx';
import { useEffect,useState,useContext } from "react";
import Loading from "@/components/loading/index.jsx";
import { AlertContext } from "@/contexts/alerts.js"
import { useNavigate } from "react-router-dom";
import '@/styles/pages/feed/style.scss';
import styled from 'styled-components';
import api from "@/hook/backend.js";


const Container=styled.div`
    width:100%;
    padding:112px;
    display:flex;
    justify-content:center;
    gap:40px;
    flex-wrap: wrap;
`


const Index=()=>{

    const deleted=async(id)=>
    {
        try
        {
            const {status}=await api.delete(`/application/${id}`)

            switch(status)
            {
                case 203:
                    console.log(203)
                    break
                default:
                    console.log(200)
            }
        }
        catch(err)
        {
            console.error(err.response.status)
        }

        setResponse(response.filter(post => post.id !== id))
    }


    const fetchPostagens=async()=>
    {
        try
        {
            const {data}=await api.get('/application/')
            setResponse(data)
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

        setTimeout(()=>
        {
            setLoading(false)
        }
        ,1000);
    }


    const [loading,setLoading]=useState(true)
    const [response,setResponse]=useState()
    const alert=useContext(AlertContext)
    const navigate=useNavigate()


    useEffect(()=>{
        fetchPostagens()
    },[])

    return(
        <>
        {
            (!loading) && 
            <Container>
                {response?.map((postagens,index)=>{
                    return (
                        <Postagens
                            deleted={deleted}
                            id={postagens.id}
                            title={postagens.title}
                            created={postagens.createdAt}
                            description={postagens.description}
                            content={postagens.content}
                            user={postagens.user}
                            key={index}
                        />
                    )
                })}
            </Container>
        }
        {
            loading &&
            <Loading/>
        }
        </>
    );
}


export default Index;