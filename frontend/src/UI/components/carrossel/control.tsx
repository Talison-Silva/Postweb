import { ArrowRightIcon, CheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from "react";
import { range } from '@/app/utils/range.ts';


export default ({steps,loading,current,max,jump}) => {
	let left,right,center=[];

	
	// --| Left

    if(current!==0){
    	left=<ArrowLeftIcon className='w-[20px] h-[20px] text-[#084CCF]' onClick={() => jump(prev => ++prev)}/>
    }

    // --| Center

    range(--max).map(V => {
        if(-V===current){
        	center.push(<button className="w-[12px] h-[12px] bg-[#084CCF] rounded-full" type="button" onClick={()=>jump(-V)}/>)
        }else{
        	center.push(<button className="w-[9px] h-[9px] bg-[#04225c] rounded-full" type="button" onClick={() => jump(-V)}/>)
        }     
    })    

    // --| Right    
    if(current === -(max)){
        right = <button type="submit"><CheckIcon className='w-[20px] h-[20px] text-[#08cf29]'/></button>
    }else{
        right = <ArrowRightIcon className='w-[20px] h-[20px] text-[#084CCF]' onClick={() => jump(next => --next)}/>
    }


	return(
		<div className="p-2 w-full h-12 flex bg-black justify-between items-center">

            <div className="w-10 h-full flex justify-end items-center">
                {left}
            </div>                            
            <div className="flex gap-2 items-center">
                {center}
            </div>
            <div className="w-10 h-full flex justify-start items-center">
                {right}
            </div>

        </div>
	)
}