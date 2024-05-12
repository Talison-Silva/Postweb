import Loading from "@/UI/components/loading/index.jsx";
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {Hook} from "@/app/hook/hook.ts";
import styled from 'styled-components';
import api from "@/app/hook/backend";


const Container=styled.section`
    position:relative;
    width: 1000px;
    min-height: 400px;
    overflow:hidden;
    background-color:#0b0d0d;
    border: 4px solid #141717;
    color:white;
    border-radius:24px;

    display:flex;
    justify-content:center;
    align-items:center;
`


export default () => 
{

    const fetchMore=async()=>
    {
        const { data } = await Hook.push('/new-posts/').get({filter:{"id": id }});
        setLermais(data[0].content)
        setLoading(false)
    }


    const [loading,setLoading]=useState(true)
    const [lermais,setLermais]=useState()
    const {id}=useParams()

    useEffect(()=>{fetchMore()},[])


    if(!loading)
    {
        return <Container children={<p>{lermais}</p>}/>;
    }
    else { return <Loading/> }
}