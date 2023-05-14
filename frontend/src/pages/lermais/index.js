import React,{useEffect,useState} from "react";
//backend
import api from "../../hook/backend";
//import loading
import Loading from "../../components/loading/index.js";
//router
import { useParams } from "react-router-dom";
//import stylings
import '../../styles/pages/lermais/style.scss';


const LerMais=()=>{
    //FUNÇÕES---------------------------------------------------------------------------------------------

    const Data=async()=>{
        await api.get(`/resources/id/${id}`).then((response)=>{
            setLermais(response.data.content)
        }).catch((error)=>console.log(error))

        setLoading(false)
    }

    //DEFINIÇÕES------------------------------------------------------------------------------------------

    const [lermais,setLermais]=useState()
    const [loading,setLoading]=useState(true)
    const {id}=useParams()

    //----------------------------------------------------------------------------------------------------
    
    //userEffect
    useEffect(()=>{
        Data()
    },[])

    //----------------------------------------------------------------------------------------------------
    return(
        <main>
            {!loading && 
                <div className="lermais-box">
                    <p>{lermais}</p>
                </div>
            }
            {loading && <Loading/>}
        </main>
    );
}

export default LerMais;