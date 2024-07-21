
// ~. Dependency ReactJS
import { useNavigate } from "react-router-dom";
// ~~~~~~~~~~~~~~~~~~~~~

// ~. Utilities
import {LockClosedIcon} from '@heroicons/react/24/outline';
import IF from "@/UI/utils/if/index.tsx";
// ~~~~~~~~~~~~

// ~. Styled Components ~~~~~~~~~~
import {
    AccountInforSpanPST,
    InformationsPTS,
    AccountInforPTS,
    AccountPhotoPTS,
    AreaButtonPTS,
    ContainerPTS,
    AccountPTS,
    ButtonPTS,
    RightPTS,
    ClosePTS,
    LeftPTS,
    LeftBlur
} from '@/UI/partials/styled.tsx';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import {AuthContext} from '@/app/contexts/AuthContext.tsx';
import {useContext} from 'react';



export default ({id,title,description,content,deleted,emphasis,createdAt,user})=>
{
    const navigate=useNavigate()

    const date=new Date(createdAt)

    const complete=(v)=>
    {
        if(v<10){return('0'+v)}
        return(v)
    }

    const {isClient}=useContext(AuthContext);
    const registed={
        date:date.getDate(),
        month:date.getMonth(),
        year:date.getFullYear(),
        sec:date.getSeconds(),
        min:date.getMinutes(),
        hour:date.getHours()
    }

    const editPRPS={
        type:"button",
        onClick:()=>{navigate(`/postweb/posts/edit/${id}`)},
        children:"Edit"
    }

    const extendPRPS={
        type:"button",
        onClick:()=>{navigate(`/postweb/posts/more/${id}`)},
        children:!(isClient.username===user.username)?'extend post':'extend'
    }    

    return(
        <ContainerPTS>
            <LeftPTS style={{
                backgroundImage:`url('http://localhost:3005/static/emphasis/${emphasis}')`,
                backgroundSize:'cover',
                backgroundPosition:'center',
                backdropFilter:'blur(15px)'
            }}>
                <LeftBlur>
                    <IF condition={(isClient.username===user.username)} IF={
                        <ClosePTS type="button" onClick={()=>{deleted(id)}}/>
                    } ELSE={
                        <LockClosedIcon className="w-[18px] h-[18px] absolute top-[18px] left-[18px] stroke-2 text-white"/>
                    }/>

                    <AccountPTS>
                        <AccountPhotoPTS src={`http://localhost:3005/static/photo-perfil/${user.photo}`}/>
                        <AccountInforPTS>
                            <h1 className="uppercase text-[15px]" children={user.username}/>
                            <AccountInforSpanPST>
                                <p className="text-green-500 text-[9px]" children={`${complete(registed.date)}.${complete(registed.month)}.${complete(registed.year)}`}/>
                                <p className="text-green-500 text-[9px]" children={`${complete(registed.hour)}:${complete(registed.min)}`}/>
                            </AccountInforSpanPST>
                        </AccountInforPTS>
                    </AccountPTS>
                </LeftBlur>
            </LeftPTS>
            <RightPTS>

                <InformationsPTS>
                    <h1 className="text-white uppercase text-[27px]" children={title}/>
                    <h3 className="text-[#525252] text-[12px]" children={description}/>
                    <p className="text-[13px]" children={content}/>
                </InformationsPTS>

                <AreaButtonPTS>
                    <IF condition={(isClient.username===user.username)} IF={ <ButtonPTS {...editPRPS}/> }/>
                    <ButtonPTS {...extendPRPS}/>
                </AreaButtonPTS>

            </RightPTS>
        </ContainerPTS>
    )
}
