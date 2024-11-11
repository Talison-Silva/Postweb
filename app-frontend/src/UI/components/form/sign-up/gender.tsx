import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Field,ErrorMessage,useField } from 'formik';
import { Gender } from "../styled"
import { useRef } from "react"

export default ({id,name,value}) => {
    const [field,meta,helpers]=useField(name)

    const setValue = (value) => {
        helpers.setValue(value)    
    }
    
    return(
        <Gender>
            <button type="button" onClick={() => setValue('male')}>
                <p>Male</p>
                {
                    field.value==="male" &&
                    <CheckCircleIcon className="w-6 h-6 text-green-500"/>
                }
                {
                    field.value!=="male" &&
                    <div className="w-2 h-2 rounded-full bg-white"/>
                }
            </button>
            <button type="button" onClick={() => setValue('famale')}>
                <p>Famale</p>
                {
                    field.value==="famale" &&
                    <CheckCircleIcon className="w-6 h-6 text-green-500"/>
                }
                {
                    field.value!=="famale" &&
                    <div className="w-2 h-2 rounded-full bg-white"/>
                }
            </button>
            <button type="button" onClick={() => setValue('other')}>
                <p>Other</p>
                {
                    field.value==="other" &&
                    <CheckCircleIcon className="w-6 h-6 text-green-500"/>
                }
                {
                    field.value!=="other" &&
                    <div className="w-2 h-2 rounded-full bg-white"/>
                }
            </button>
        </Gender>
    )
}