import {dateComplete} from '@/app/utils/DateComplete/index.js';
import Users from '@/UI/partials/container-items/user-item.tsx';
import Loading from "@/UI/components/loading/index.jsx";
import {useEffect,useRef,useState} from "react";
import {Hook} from "@/app/hook/hook.ts";
import styled from 'styled-components';


const Container=styled.section`    
    width:100%;
    padding: 80px 50px 50px 50px;
    display:flex;
    justify-content:center;
    gap:40px;
    flex-wrap: wrap;
`


export default () =>
{
    const fetchUsers=async()=>
    {
        const { data } = await Hook.push('/new-users/').notify({good:{
            type:'good',
            notify:{
                title:'User successfully rescued!',
                message:'the request made to our API was completed successfully.'
            }
        }}).get();setUsers( data );
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