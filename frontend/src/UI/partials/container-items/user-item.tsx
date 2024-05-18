// ~. Styled Components ~~~~~~~~~~
import {
    InformationsSRS,
    ContainerSRS,
    RightSRS,
    PhotoSRS,
    LeftSRS,
    DateSRS
} from '@/UI/partials/styled.tsx';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import { NotificationContext } from '@/app/contexts/NotificationContext';
import { useContext } from 'react';

export default ({ users }) =>
{
    const {emitNotification}=useContext(NotificationContext);

    return(
        <ContainerSRS>

            <LeftSRS>
            <p className='uppercase text-[20px] font-[900] tracking-[.1125rem]'>state</p>
            <div>
                <button onClick={ ()=>{ emitNotification( {type:'good',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>good</button>
                <button onClick={ ()=>{ emitNotification( {type:'bad',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>bad</button>
                <button onClick={ ()=>{ emitNotification( {type:'attention',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>attention</button>
                <button onClick={ ()=>{ emitNotification( {type:'notify',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>notify</button>
                <button onClick={ ()=>{ emitNotification( {type:'logout',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>logout</button>
            </div>
            </LeftSRS>
            <RightSRS className='.bg-blue-500 text-white'>
                <div className='w-full h-full .bg-green-500 flex flex-col justify-center'>
                    <h1 className="font-bold text-3xl">{users.username}</h1>
                    <p className='mt-1 text-[11.5px]'>{users.email}</p>
                </div>
                <div className='w-full h-full .bg-purple-500 flex justify-center items-center'>
                    <PhotoSRS style={{backgroundImage:`url('http://localhost:3005/static/photo-perfil/${users.photo}')`}}/>
                </div>
                <div className='py-2 w-full h-full .bg-pink-500' style={{gridColumn:'1/3'}}>                    
                    <textarea className='w-full h-full p-2 bg-black text-[11px] resize-none .bg-red-500 outline-none break-all pr-2' readOnly>
                        {users.me}
                    </textarea>
                </div>
            </RightSRS>
            
            {/*<LeftSRS>
                <p className='uppercase text-[20px] font-[900] text-white tracking-[.1125rem]'>state</p>
                <button className='text-white' onClick={ ()=>{ emitNotification( {type:'good',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>good</button>
                <button className='text-white' onClick={ ()=>{ emitNotification( {type:'bad',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>bad</button>
                <button className='text-white' onClick={ ()=>{ emitNotification( {type:'attention',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>attention</button>
                <button className='text-white' onClick={ ()=>{ emitNotification( {type:'notify',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>notify</button>
                <button className='text-white' onClick={ ()=>{ emitNotification( {type:'logout',notify:{title:'ocorreu tudo certo!',message:'a requisição foi realizada com sucesso. aproveite :)'}} ) } }>logout</button>                
            </LeftSRS>

            <RightSRS>
                <InformationsSRS>
                    <div className='min-w-min min-h-min flex justify-between items-center'>
                        <div>
                            <h1 className="font-bold text-3xl">{users.username}</h1>
                            <p className='mt-1 text-[11.5px]'>{users.email}</p>
                        </div>

                        <PhotoSRS style={{backgroundImage:`url('http://localhost:3005/static/photo-perfil/${users.photo}')`}}/>
                    </div>                
                    <p className="w-[400px] h-[180px] overflow-auto pr-2 mt-2 text-[10px] break-all text-ellipsis">{users.me}</p>
                </InformationsSRS>
            </RightSRS>*/}

        </ContainerSRS>
    )
}