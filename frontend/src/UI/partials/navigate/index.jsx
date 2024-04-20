import {ContainerNVGT,NavigationNVGT,GroupNVGT,ItemNVGT,ButtonNVGT} from '@/UI/partials/styled.tsx'
import { useNavigate } from "react-router-dom";

const Navigate=()=>{
    const pathname=window.location.pathname;
    const navigate=useNavigate()

    return(
        <ContainerNVGT>
            <NavigationNVGT>
                <GroupNVGT>
                    <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/')}}>raiz</ButtonNVGT>}/>
                    <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/postagens/')}}>Postagens</ButtonNVGT>}/>
                    <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/usuarios/')}}>Usuarios</ButtonNVGT>}/>
                </GroupNVGT>
            </NavigationNVGT>
        </ContainerNVGT>        
    )
}

/*

<section className="w-full h-10 font-black">
    <nav className="w-full h-full flex justify-around items-center">
        <ul className="py-6 px-10 min-w-min h-full flex items-center gap-16 select-none rounded-full shadow shadow-[#5a6363]">
            <li>
                <button
                    className="uppercase outline-none text-white tracking-widest font-normal font-ubuntuMono tracking-1"
                onClick={()=>{navigate('/')}}>raiz</button>
            </li>
            <li>
                <button
                    className="uppercase outline-none text-white tracking-widest font-normal font-ubuntuMono tracking-1"
                onClick={()=>{navigate('/postagens/')}}>Postagens</button>
            </li>
            <li>
                <button
                    className="uppercase outline-none text-white tracking-widest font-normal font-ubuntuMono tracking-1"
                onClick={()=>{navigate('/usuarios/')}}>Usuarios</button>
            </li>
        </ul>
    </nav>
</section>

*/

export default Navigate;
