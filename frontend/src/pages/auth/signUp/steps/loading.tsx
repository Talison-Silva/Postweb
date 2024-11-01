import { ArrowUturnLeftIcon,CheckIcon } from '@heroicons/react/24/outline';
import LoadingImage from "@/assets/images/loading.png";

export default ({back,finallyprocess=false}) => {    
    return(        
        <div className="relative overflow-hidden w-[600px] h-[450px] bg-[#0B0D0D] rounded-[15px] border-2 border-solid border-[#141717] flex justify-center items-center">
            {!finallyprocess && <img src={LoadingImage} className="w-12 h-12 animate-spin"/>}
            <button className="absolute left-8 bottom-10" onClick={() => back(false)}>
                <ArrowUturnLeftIcon className='text-white w-6 h-6'/>
            </button>
            {finallyprocess && <CheckIcon className='w-[28px] h-[28px] text-[#08cf29]'/>}
        </div>
    )
}