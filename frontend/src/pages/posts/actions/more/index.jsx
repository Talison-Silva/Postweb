import { ArrowsPointingOutIcon }  from '@heroicons/react/24/outline';
import Loading from "@/UI/components/loading/index.jsx";
import React,{useEffect,useState,useRef} from "react";
import { useParams } from "react-router-dom";
import {Hook} from "@/app/hook/hook.ts";
import styled from 'styled-components';
import api from "@/app/hook/backend";
import {marked} from 'marked';

const Content=styled.div`
    width:100%;
    padding: 100px 50px 100px 50px;    
    display:flex;
    justify-content:center;
`

const Extend=styled.section`
    position:relative;
    width: 1000px;
    min-height: 400px;
    overflow:hidden;
    background-color:#0b0d0d;    
    border: 2px solid #212626;//#141717;
    color:white;
    border-radius:24px;

    display:flex;
    flex-direction:column;
    //justify-content:center;
    align-items:center;

    .post-emphasis{
        position:relative;
        width:100%;
        height:400px;        
        background-size: cover;
        background-position: center;

        display:flex;
        flex-direction:column;
        justify-content:flex-end;       
    }

    .post-infors{
        width:100%;
        height:200px;
        padding:0 60px 0 60px;
        backdrop-filter:blur(20px);
        background-color:rgba(11, 13, 13,.7125);

        display:flex;
        //justify-content:space-between;
        align-items:center;        
        gap:40px;
    }

    .post-content{
        width:100%;
        height:400px;
        padding:20px;
        border-top: 1px solid #212626;
    }

    .post-content h1{
        font-size:40px;
        font-weight:600;
    }
    .post-content h2{
        font-size:36px;
        font-weight:600;
    }
    .post-content h3{
        font-size:32px;
        font-weight:600;
    }
    .post-content h4{
        font-size:28px;
        font-weight:600;
    }
    .post-content h5{
        font-size:24px;
        font-weight:600;
    }
    .post-content h6{
        font-size:20px;
        font-weight:600;
    }

    .post-infors-photo{
        width:160px;
        height:160px;
        border-radius:50%;
    }
`


export default () => 
{

    const fetchMore=async()=>
    {
        
        const { data } = await Hook.push('/new-posts/').get({filter: JSON.stringify({id:id})});
        setPost(data[0])        
        
        //setLermais(data[0].content)                
        setLoading(false)

        setTimeout(()=>{            
            ContentRef.current.innerHTML=marked.parse(data[0].content)
        },100)
    }


    const [loading,setLoading]=useState(true);
    const [lermais,setLermais]=useState();
    const [post,setPost]=useState({});
    const ContentRef=useRef(null);
    const {id}=useParams();
    

    useEffect(()=>{
        fetchMore()       
    },[])  


    if(!loading)
    {        
        return (
            <Content>
                <Extend>
                    <section className="post-emphasis" style={{
                        backgroundImage:`url('http://localhost:3005/static/emphasis/${post.emphasis}')`,
                        backgroundSize:'cover',
                        backgroundPosition:'center'             
                    }}>
                        <div className="post-infors">
                            <div style={{
                                backgroundImage:`url('http://localhost:3005/static/photo-perfil/${post.user.photo}')`,
                                backgroundSize:'cover',
                                backgroundPosition:'center'             
                            }} className="post-infors-photo"/>

                            <div ref={ContentRef} className="py-[20px] min-w-min h-full font-RobotoMono text-white">
                                <h1 className="text-[30px] uppercase font-[800]">{post.title}</h1>
                                <p className="text-[12px] font-[400] text-[#a6a6a6]">{post.description}</p>
                            </div>
                        </div>

                        <ArrowsPointingOutIcon className="absolute right-6 top-4 text-white w-6 h-6"/>
                    </section>
                    <section ref={ContentRef} className="post-content">                        
                    </section>
                </Extend>
            </Content>
        )
    }
    else { return <Loading/> }
}