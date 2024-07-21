import { useState,useEffect } from "react"
import { 
    SignUpbiography,
    SignUpBiographyTextarea
} from '../styled';

import {Field,useField,ErrorMessage} from 'formik';


export default ({id,height=256,name="biography",label="your bio",max=2000,cookie}) => 
{
    const [value,setValue]=useState(0);
    const [field]=useField(name);

    useEffect(() => { setValue(field.value.length) },[])
    useEffect(() => {        
        if(cookie) { cookie(`${name}${id?id:""}`,field.value,{path:`/postagens/`,'maxAge':10000}) }
        console.log('field',field.value)
    },[field.value])    

    return(
        <SignUpbiography style={{height:`${height}px`}} >
            <div className='w-full min-h-min flex justify-between items-center'>
                <p className="font-robotoMono font-[600] text-[10px]">{label}</p>
                <p className="font-robotoMono font-[600] text-[#44474A] text-[10px]">{value}/{max}</p>
            </div>
            <Field as={SignUpBiographyTextarea} name={name} maxLength={max} onKeyUp={e => setValue(e.target.value.length)}/>
        </SignUpbiography>
    )
}