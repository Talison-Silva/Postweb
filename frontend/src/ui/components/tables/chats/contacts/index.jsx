
function Contacts(){

    function select(id){
        alert(`now:${id}`)
    }
    const contacts=[{
        name:"Talison",
        info:"xcode",
    },{
        name:"Talison",
        info:"xcode",
    },{
        name:"Talison",
        info:"xcode",
    }]// #090a0a
    
    return(
        <nav className="px-5 w-full h-full flex flex-col">
            <ul className="w-full h-full rounded-3xl overflow-hidden bg-[#0d0f0f]">
                {contacts.map((entry,index) => {
                    return(
                        <li>
                            <button onClick={()=>{select(index)}} className="hover:bg-[#141717] w-full px-8 flex justify-between items-center">
                                <div className="w-full h-20 flex items-center gap-5 ">
                                    <div className="w-14 h-14 bg-white rounded-full"/>
                                    <div className="flex flex-col">
                                        <h1 className="select-none text-white font-ubuntuMono uppercase text-1xl">{entry.name}</h1>
                                        <p className="select-none text-white font-ubuntu text-xs">{entry.info}</p>
                                    </div>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Contacts;