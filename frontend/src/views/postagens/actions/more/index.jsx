import React,{useEffect,useState} from "react";
//backend
import api from "@/hook/backend";
//import loading
import Loading from "@/components/loading/index.jsx";
//router
import { useParams } from "react-router-dom";
//import stylings
import '@/styles/pages/lermais/style.scss';


const LerMais=()=>{
    //FUNÇÕES---------------------------------------------------------------------------------------------

    const Data=async()=>{
        await api.get(`/application/?filter={"id":${id}}`).then((response)=>{
            console.log(response)
            setLermais(response.data[0].content)
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
    console.log(lermais)

    //----------------------------------------------------------------------------------------------------
    return(
        <main>
            {!loading &&
                <section style={{
                    width: '800px',
                    minHeight:'400px'
                }} class="relative rounded-3xl overflow-hidden bg-[#0b0d0d] border-2 border-solid border-[#141717] flex justify-center items-center">
                    <p className="text-white font-ubuntu">{lermais}</p>
                </section>
            }
            {loading && <Loading/>}
        </main>
    );
}

export default LerMais;
