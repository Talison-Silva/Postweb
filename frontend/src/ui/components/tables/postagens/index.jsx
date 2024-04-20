import api from "@/app/hook/backend.js";
import { useNavigate } from "react-router-dom";

function Postagens({id,title,description,content,deleted,created,user}){
    const navigate=useNavigate()

    const date= new Date(created)

    function complete(v){
        if(v<10){return('0'+v)}
        return(v)
    }

    const userLogging=JSON.parse(localStorage.getItem('user'))
    console.log(userLogging)

    const registed={
        date:date.getDate(),
        month:date.getMonth(),
        year:date.getFullYear(),
        sec:date.getSeconds(),
        min:date.getMinutes(),
        hour:date.getHours()
    }
    console.log(user.username)

    return(
        <section style={{
            width: '800px',
            height:'400px',
            display:'grid',
            gridTemplateColumns:'40% 60%'
        }} className="relative rounded-3xl overflow-hidden bg-[#0b0d0d] border-2 border-solid border-[#141717]">
            <div className="relative w-full h-full bg-[#0b0d0d]">
                {(userLogging.username===user.username) && <button type="button" onClick={()=>{deleted(id)}} className="absolute top-3 left-5 w-6 h-6 bg-red-600 rounded-full" ></button>}
                {!(userLogging.username===user.username) && <div className="absolute top-3 left-5">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                        <path d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 16.6181V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16.6181C10.6931 16.3434 10.5 15.9442 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 15.9442 13.3069 16.3434 13 16.6181Z" fill="#000000"/>
                    </svg>
                </div>}
                <div className="p-6 absolute bottom-0 left-0 min-w-min h-24s flex items-center gap-2">
                    <img src={`http://localhost:3005/${user.photo}`} className="w-16 h-16 rounded-full select-none"/>
                    <div className="select-none min-w-24">
                        <h1 className="uppercase font-ubuntuMono text-white text-xl">{user.username}</h1>
                        <div className="w-full h-full flex justify-between">
                            <p className="text-green-500 font-ubuntuMono text-xs">{complete(registed.date)}.{complete(registed.month)}.{complete(registed.year)}</p>
                            <p className="text-green-500 font-ubuntuMono text-xs">{complete(registed.hour)}:{complete(registed.min)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full h-full bg-[#090a0a] p-8">
                    <h1 className="text-white font-ubuntuMono uppercase text-4xl tracking-wide select-none">{title}</h1>
                    <p className="mt-6 text-[#525252] font-ubuntuMono text-base tracking-wide select-none">{description}</p>
                    <p className="mt-6 text-white font-ubuntu text-lg tracking-wide select-none">{content}</p>
                </div>
                <div className="w-full h-12 rounded-bl-3xl overflow-hidden flex justify-between items-center">
                    {(userLogging.username===user.username) && <button type="button" onClick={()=>{navigate(`/postagens/e/${id}`)}} className="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">
                        Edit
                    </button>}
                    <button type="button" onClick={()=>{
                        navigate(`/postagens/m/${id}`)
                    }} className="w-full h-full bg-[#101212] uppercase font-ubuntuMono text-white tracking-wide select-none">
                        {!(userLogging.username===user.username)?'Estender Postagem':'Estender'}
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Postagens;
