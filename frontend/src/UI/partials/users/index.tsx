import {    
    ContainerSRS,
    RightSRS,
    PhotoSRS,
    LeftSRS,    
} from '@/UI/partials/styled.tsx';


export default ({ users }) =>
(
    <ContainerSRS>
        <LeftSRS>
            <p className='uppercase text-[20px] font-[900] tracking-[.1125rem]'>state</p>            
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
    </ContainerSRS>
)