import { ArrowRightIcon, CheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useRef, useState } from "react";
import { range } from '@/app/utils/range.ts';

import Controll from './control.tsx';

export default ({id,steps}) => 
{    
    const [stepIndex,setStepIndex]=useState(0);    
    const Carroselref=useRef(null);    


    let stepsGroup=[];
    Object.entries(steps).forEach( ([name,Component]) => {                
        if(id){
            stepsGroup.push( <Component id={id} /> );
        }else{
            stepsGroup.push( <Component /> );
        }
    })


    useEffect(()=>{
        // min: left <-
        if(stepIndex>0){
            setStepIndex(-1)
        }

        // max: right <-
        if(stepIndex<-(steps.length-1)){
            setStepIndex(0)
        }
        Carroselref.current.style.left=`${600*stepIndex}px`                
    },[stepIndex])


    return(
        <div className="overflow-hidden w-[600px] h-[450px] bg-[#0B0D0D] rounded-[15px] border-2 border-solid border-[#141717] flex flex-col justify-between">
            <div className="relative w-[600px] h-[450px]">
                <div ref={Carroselref} className="absolute top-0 left-0 min-w-min min-h-min flex transition-all">                
                    {stepsGroup}
                </div>
            </div>
            
            <Controll current={stepIndex} max={Object.values(steps).length} jump={setStepIndex}/>
        </div>
    )
}