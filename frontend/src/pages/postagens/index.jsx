//import Postagens from '@/UI/components/tables/postagens/index.jsx';
import Posts from '@/UI/partials/container-items/postagem-item.tsx';
import Loading from "@/UI/components/loading/index.jsx";
import { useEffect,useState } from "react";
import {Hook} from "@/app/hook/hook.ts";
import styled from 'styled-components';

const Container=styled.div`
    width:100%;
    padding:112px;
    display:flex;
    justify-content:center;
    gap:40px;
    flex-wrap: wrap;
`


export default () => 
{
    const fetchPosts = async () =>
    {
        const { data } = await Hook.push('/new-posts/').get();setResponse( data );
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
        response?.map((posts,index)=>{
            itms.push(<Posts deleted={deleted} key={index} {...posts}/>)
        });

        return <Container children={itms}/>;
    }
    else{ return <Loading/> }
}