import {dateComplete} from '@/app/utils/DateComplete/index.js';
import Users from '@/UI/partials/container-items/user-item.tsx';
import Loading from "@/UI/components/loading/index.jsx";
import {useEffect,useRef,useState} from "react";
import {Hook} from "@/app/hook/hook.ts";
import styled from 'styled-components';


const Container=styled.section`
    position:relative;
    width:800px;
    min-height: min-content;

    display:flex;
    flex-direction:column;
    gap:20px;
`


export default () =>
{
    const fetchUsers=async()=>
    {
        const { data } = await Hook.push('/new-users/').get();setUsers( data );
        setTimeout(() => {setLoading(false)},1000 );
    }


    const [loading,setLoading]=useState(true);
    const [users,setUsers]=useState([]);    
    const date=useRef(null);
    var itms=[];


    useEffect(() => {fetchUsers()},[]);
    useEffect(() => {
        if(users.length!==0){
            date.current=dateComplete(users[0].createdAt)
        }        
    },[users]);


    if(!loading)
    {        
        users?.map( users => {
            itms.push(<Users users={users} date={date.current}/>)
        })

        return <Container children={itms}/>;
    }
    else {return <Loading/>}
}