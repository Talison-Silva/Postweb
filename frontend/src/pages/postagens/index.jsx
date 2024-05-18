//import Postagens from '@/UI/components/tables/postagens/index.jsx';
import Posts from '@/UI/partials/container-items/postagem-item.tsx';
import Loading from "@/UI/components/loading/index.jsx";
import { useEffect,useState } from "react";
import {Hook} from "@/app/hook/hook.ts";
import styled from 'styled-components';

const Container=styled.div`
    width:100%;
    padding: 80px 50px 50px 50px;
    display:flex;    
    justify-content:center;
    gap:40px;
    flex-wrap: wrap;
`

const NoPosts=styled.p`
    font-family:'Roboto Mono',monospace;
    font-size:30px;
    text-transform:uppercase;
    color:white;
    font-weight:800;
`


export default () => 
{
    const fetchPosts = async () =>
    {
        const { data } = await Hook.push('/new-posts/').notify({good:{
            type:'good',
            notify:{
                title:'Posts successfully rescued!',
                message:'the request made to our API was completed successfully.'
            }
        }}).get();setResponse( data );
        console.log('data ~>',data)
        setTimeout(()=>{setLoading(false)},1000);
    }

    const deleted = async id =>
    {
        await Hook.push(`/new-posts/${id}`).delete();
        setResponse(response.filter(post => post.id !== id));
    }

    
    const [loading,setLoading]=useState(true);
    const [response,setResponse]=useState();
    useEffect(()=>{fetchPosts()},[]);
    var itms=[];


    if(!loading)
    {
        if(response.length===0)
        {
            return <NoPosts>no posts</NoPosts>
        }
        else
        {
            response?.map((posts,index)=>{
                itms.push(<Posts deleted={deleted} key={index} {...posts}/>)
            });
    
            return <Container children={itms}/>;
        }            
    }
    else{ return <Loading/> }
}