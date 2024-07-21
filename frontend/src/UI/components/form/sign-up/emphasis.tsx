import { Emphasis } from '../styled.ts';
import { useField } from 'formik';
import { useRef } from 'react';



export default ({label}) => 
{
    const upload = e => {
        if(e.target.files[0])
        {            
            helpers.setValue(e.target.files[0])            

            let leitor=new FileReader()

            leitor.onload = e =>
            {
                imageRef.current.style.backgroundImage=`url(${e.target.result})`;
            }

            leitor.readAsDataURL(e.target.files[0])
        }
    }

    const [field,meta,helpers]=useField({name:"emphasis"});    
    const picture=useRef(null);
    const imageRef=useRef(null);

    console.log('field:',field.value)
    
    return(
        <Emphasis>
            {label && <p className="font-robotoMono font-[600] text-[10px] text-white">{label}</p>}
            <div className="load-emphasis">
                <div ref={imageRef} style={{backgroundImage:`url('http://localhost:3005/static/emphasis/${field.value}')`}} className="render-emphasis"/>
                <input id="emphasis" type="file" onChange={upload} className="upload-emphasis"/>
            </div>
        </Emphasis>
    )
}