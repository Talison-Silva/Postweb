import Loading from "@/components/loading/index.jsx";
import { useNavigate } from "react-router-dom";
import {useEffect,useState} from "react";


//import backend
import api from "@/hook/backend.js";

const Feed=()=>{
    const fetchUsers=async()=>{
        await api.get('/users/').then((response)=>{
            console.log(response)
            setUsers(response.data)
        }).catch((err)=>{
            switch(err.response.status){
                case 401:
                    navigate('/entrar?')
                    break
                default:
                    console.log(err)
            }
        })

        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    const [loading,setLoading]=useState(true)
    const [users,setUsers]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        fetchUsers()
    },[])
    return(
        <>
            {!loading && <div style={{width:"800px"}} className="min-h-min relative flex flex-col gap-5">
                {users?.map((users,index)=>{
                    return(
                        <div className="w-full select-none min-h-64 bg-[#0B0D0D] border-2 border-solid border-[#141717] flex rounded-r-3xl">
                            <div className="relative w-64 h-64 bg-[#070808] rounded-xl">
                                <img src={`http://localhost:3005/${users.photo}`} width="150" style={{clipPath:'circle(40%)'}} class="absolute -right-10"/>
                            </div>
                            <div className="relative px-14 w-full min-h-full flex">
                                <article className="mt-6">
                                    <h1 className="font-bold font-ubuntuMono text-white text-3xl">{users.username}</h1>
                                    <p className="mt-3 font-bold font-ubuntuMono text-white text-xs">{users.me}</p>
                                </article>
                                <p className="absolute px-1 right-0 h-full text-[#303838] uppercase font-ubuntuMono font-bold text-center" style={{writingMode: 'vertical-lr',textOrientation: 'upright'}}>
                                    {(()=>{
                                        function complete(v){
                                            if(v<10){return(`0${v}`)}
                                            return(v)
                                        }
                                        let date=new Date(users.createdAt);
                                        return(`${complete(date.getDate())} ${complete(date.getMonth())} ${complete(date.getFullYear())}`)
                                    })()}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>}
            {loading && <Loading/>}
        </>
    )
}
/*
 * date.getDate(),
   date.getMonth(),
   date.getFullYear(),
        sec:date.getSeconds(),
        min:date.getMinutes(),
        hour:date.getHours()
*/
export default Feed;
