
// ~. Dependency ReactJS
import { useNavigate } from "react-router-dom";
// ~~~~~~~~~~~~~~~~~~~~~

// ~. Utilities
import api from "@/app/hook/backend.js";
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
    LeftPTS
} from '@/UI/partials/styled.tsx';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



export default ({id,title,description,content,deleted,created,user})=>
{
    const navigate=useNavigate()

    const date=new Date(created)

    const complete=(v)=>
    {
        if(v<10){return('0'+v)}
        return(v)
    }

    const userLogging=JSON.parse(localStorage.getItem('user'))

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
        onClick:()=>{navigate(`/postagens/e/${id}`)},
        children:"Edit"
    }

    const extendPRPS={
        type:"button",
        onClick:()=>{navigate(`/postagens/m/${id}`)},
        children:!(userLogging.username===user.username)?'extend post':'extend'
    }

    return(
        <ContainerPTS>
            <LeftPTS>                
                <IF condition={(userLogging.username===user.username)} IF={
                    <ClosePTS type="button" onClick={()=>{deleted(id)}}/>
                } ELSE={                                        
                    <LockClosedIcon className="w-7 h-7 absolute top-6 left-6 stroke-2 text-white"/>
                }/>

                <AccountPTS>
                    <AccountPhotoPTS src={`http://localhost:3005/${user.photo}`}/>
                    <AccountInforPTS>
                        <h1 className="uppercase text-xl" children={user.username}/>
                        <AccountInforSpanPST>
                            <p className="text-green-500 text-xs" children={`${complete(registed.date)}.${complete(registed.month)}.${complete(registed.year)}`}/>
                            <p className="text-green-500 text-xs" children={`${complete(registed.hour)}:${complete(registed.min)}`}/>
                        </AccountInforSpanPST>
                    </AccountInforPTS>
                </AccountPTS>
            </LeftPTS>
            <RightPTS>

                <InformationsPTS>
                    <h1 className="text-white uppercase text-4xl" children={title}/>
                    <h3 className="text-[#525252] text-base" children={description}/>
                    <p className="text-lg" children={content}/>
                </InformationsPTS>

                <AreaButtonPTS>
                    <IF condition={(userLogging.username===user.username)} IF={ <ButtonPTS {...editPRPS}/> }/>
                    <ButtonPTS {...extendPRPS}/>
                </AreaButtonPTS>

            </RightPTS>
        </ContainerPTS>
    )
}
