//import react js
import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

//import backend
import api from "../../hook/backend.js";

//import loading
import Loading from "../../components/loading/index.js";

//import stylings
import '../../styles/pages/feed/style.scss';

//import cookies
import Cookies from 'universal-cookie';
const cookies=new Cookies()


const Feed=()=>{
    //FUNÇÕES------------------------------------------------------------------------------------------------------

    const Data=async()=>{
        await api.get('/resources/all').then((response)=>{
            setResponse(response.data)
        }).catch((error)=>{
            console.log(error);
        })

        setLoading(false)
    }

    //DEFINIÇÕES---------------------------------------------------------------------------------------------------

    //usenavigate
    const navigate=useNavigate()
    //useStates
    const [response,setResponse]=useState()
    const [loading,setLoading]=useState(true)
    //cookies
    cookies.set('data',response,{path:'/'})

    //-------------------------------------------------------------------------------------------------------------

    useEffect(()=>{
        Data()
    },[])

    //-------------------------------------------------------------------------------------------------------------
    return(
        <main>
            {!loading &&
                <>
                    {response?.map((postagens)=>{
                        return (
                            <section className="postagens-back">
                                <div className="postagens">
                                    <h1>{postagens.title}</h1>
                                    <p>{postagens.description}</p>
                                    <div className="buttons">
                                        <button type="button" className="edit" onClick={()=>{
                                            navigate(`/edit/${postagens._id}`)
                                        }}>Edit</button>
                                        <button type="button" className="lermais" onClick={()=>{
                                            navigate(`/lermais/${postagens._id}`)
                                        }}>Ler Mais</button>
                                        <button type="button" className="delete" onClick={()=>{                                                                                                       
                                            api.get(`/resources/del/${postagens._id}`)                                    
                                            setResponse(response.filter(post => post._id !== postagens._id))
                                        }} >Delete</button>
                                    </div>
                                </div>
                            </section>
                        )
                    })}
                </>
            }
            {loading && <Loading/>}
        </main>
    );
}
 
export default Feed;