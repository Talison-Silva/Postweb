import {dateComplete} from '@/utils/DateComplete/index.js';
import Users from '@/components/items/users/index.jsx';
import Loading from "@/components/loading/index.jsx";
import { useNavigate } from "react-router-dom";
import {useEffect,useRef,useState} from "react";
import styled from 'styled-components';
import api from "@/hook/backend.js";


const Container=styled.section`
    position:relative;
    width:800px;
    min-height: min-content;

    display:flex;
    flex-direction:column;
    gap:20px;
`


const Index=()=>{

    const fetchUsers=async()=>
    {
        try
        {
            const {data}=await api.get('/users/')
            setUsers(data)
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
    const [users,setUsers]=useState([]);
    const navigate=useNavigate();
    const date=useRef(null)


    useEffect(()=>
    {
        fetchUsers()
    }
    ,[])

    useEffect(()=>
    {
        if(users.length!==0)
        {
            date.current=dateComplete(users[0].createdAt)
        }        
    }
    ,[users])

    return(
        <>
            {   !loading && 
                <Container>
                    {
                        users?.map((users,index)=>{
                            return(<Users users={users} date={date.current}/>)
                        })
                    }
                </Container>
            }
            {
                loading && 
                <Loading/>
            }
        </>
    )
}


export default Index;
