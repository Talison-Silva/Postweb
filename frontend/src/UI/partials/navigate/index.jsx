// ~. Dependency ReactJS
import { useNavigate } from "react-router-dom";
// ~~~~~~~~~~~~~~~~~~~~~

// ~. Components Included
import {
    NavigationNVGT,
    ButtonNVGT,
    GroupNVGT,
    ItemNVGT
} from '@/UI/partials/styled.tsx';
// ~~~~~~~~~~~~~~~~~~~~~~



export default ()=>
{
    const pathname=window.location.pathname;
    const navigate=useNavigate()

    return(
        <NavigationNVGT children={
            <GroupNVGT>
                <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/')}}>home</ButtonNVGT>}/>
                <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/postagens/')}}>posts</ButtonNVGT>}/>
                <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/usuarios/')}}>users</ButtonNVGT>}/>
            </GroupNVGT>
        }/>
    )
}