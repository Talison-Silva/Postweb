import { useState,useEffect,useRef } from "react"
import { 
    Content,
    SignUpBiographyTextarea
} from '../styled';

import {EyeIcon,PencilSquareIcon} from '@heroicons/react/24/outline';
import Carrossel from '@/UI/components/carrossel/index.tsx';
import {Field,useField,ErrorMessage} from 'formik';
import {marked} from 'marked';

export default ({id,height=256,name="biography",label="your bio",max=2000,cookie}) => 
{    
    const [ viewer, setViewer] = useState(true);
    const [ content, setContent] = useState("");
    const [ value, setValue] = useState(0);
    const [ field] = useField(name);
    const carrosselEditorRef=useRef(null);


    const h=(nivel)=>{        
        //field.value+=' '+ String("#").repeat(nivel);
        //setContent(v => v+=' '+ String("#").repeat(nivel));
        console.log(field.value.split('\n'))
    }

    useEffect(() => {        
        if(cookie){          
            cookie(`${name}${id?id:""}`,field.value,{path:`/postagens/`,'maxAge':10000})
        }              
    },[field.value])

    useEffect(()=>{
        if(viewer){
            document.getElementById('edit-viewer').innerHTML=marked.parse(field.value)
            carrosselEditorRef.current.style.left="0px"            
        }else{
            carrosselEditorRef.current.style.left="-532px"
        }
    },[viewer])


    return(
        <Content style={{height:`${height}px`}} >            
            <div className='w-full min-h-min flex justify-between items-center'>
                <p className="font-robotoMono font-[600] text-[10px]">{label}</p>
                <p className="font-robotoMono font-[600] text-[#44474A] text-[10px]">{value}/{max}</p>
            </div>

            <div className="relative w-full h-full p-[10px] bg-[#272822] overflow-hidden rounded-[10px] resize-none font-robotoMono outline-none border border-solid border-[#414238]">
                <ul ref={carrosselEditorRef} className="absolute min-w-min min-h-min top-0 left-0 flex transition-all">
                    <li>
                        <div id="edit-viewer" className="viewer"></div>
                    </li>
                    <li>
                        {/*<Field as={SignUpBiographyTextarea} name={name} maxLength={max} onKeyUp={e => setValue(e.target.value.length)}/>*/}
                        <article className="editor">
                            <pre className="line">
                                <p className="line-number">1</p>
                                <textarea className="line-input" />
                            </pre>
                        </article>
                    </li>
                </ul>
            </div>

            <div className="px-4 w-full h-10 .bg-[#272822] rounded-[4px] flex items-center gap-4 text-white font-robotoMono select-none">
                {viewer && <PencilSquareIcon className="w-6 h-6 text-white" onClick={() => setViewer(false)}/>}
                {!viewer && <EyeIcon className="w-6 h-6 text-white" onClick={() => setViewer(true)}/>}

                <div className="flex gap-[4px]">
                    <p onClick={() => h(1)}>H1</p>
                    <p onClick={() => h(2)}>H2</p>
                    <p onClick={() => h(3)}>H3</p>
                    <p onClick={() => h(4)}>H4</p>
                    <p onClick={() => h(5)}>H5</p>
                    <p onClick={() => h(6)}>H6</p>
                </div>
            </div>
        </Content>
    )
}


/*
{!viewer && <Field as={SignUpBiographyTextarea} name={name} maxLength={max} onKeyUp={e => setValue(e.target.value.length)}/>}
{viewer && <div id="edit-viewer" className="viewer"></div>}
*/

/*

width:100%;
height:100%;
//background-color:transparent;
resize:none;
outline: 2px solid transparent;
outline-offset: 2px;

font-family:'Roboto Mono',monospace;

padding:10px;

border:1px solid #414238;
border-radius:10px;
background-color:#272822;  

*/