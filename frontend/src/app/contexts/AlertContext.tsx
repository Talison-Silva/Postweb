import Alert from "@/UI/components/application-message/index.jsx";
import { useState,useRef } from 'react'
import { createContext } from 'react'

export const AlertContext=createContext(undefined);

export const AlertProvider=({children})=>
{
	const [exists,setExists]=useState(null);
	const coldown=useRef(false);

	let time;
	const EmitAlert=async(values)=>
	{
		if(!coldown.current)
		{
			coldown.current=true
			setExists(values)

			time=await setTimeout(()=>
			{
				try
				{
					setExists({})
				}
				finally
				{
					coldown.current=false
				}
			}
			,5000);
		}
	}

	return(
		<AlertContext.Provider value={ EmitAlert } >
			<Alert {...exists}/>
			{children}
		</AlertContext.Provider>
	)
}