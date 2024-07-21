import SignUpValidation from '@/app/config/formik-validations/sign-up-validation.ts';
import {Hook} from "@/app/hook/hook.ts";
import {Formik,Form} from 'formik';
import {useState,useRef} from 'react';
import Carrossel from '@/UI/components/carrossel/index.tsx';

import Finally from '@/pages/authorization/signUp/steps/loading.tsx';
import Steps from '@/pages/authorization/signUp/steps/index.ts';



export default () => 
{
    const submit = async (fields,{setSubmitting}) =>
    {
        setFinallystep(true);defaultValuesRef.current={...fields};

        try{
            await Hook.push('/new-users/register').post(fields);
        }
        finally{
            setStatefinally(true)
            setSubmitting(false)
        }        
    }

    const [finallystep,setFinallystep]=useState(false);
    const [statefinally,setStatefinally]=useState(false);
    const defaultValuesRef=useRef({});

    
    return(        
        <Formik onSubmit={submit} initialValues={defaultValuesRef}>
            {(value,isSubmitting)=>(
                <Form className="w-full h-full flex justify-center items-center">
                    {!finallystep &&<Carrossel steps={Steps}/>}
                    {finallystep && <Finally back={setFinallystep} finallyprocess={statefinally}/>}
                </Form>
            )}
        </Formik>        
    )
}