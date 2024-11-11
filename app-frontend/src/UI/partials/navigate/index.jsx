// ~. Dependency ReactJS
import {identifyRouteCreated} from '@/app/utils/headerfunctions.ts';
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
// ~~~~~~~~~~~~~~~~~~~~~

// ~. Components Included
/*import {
    NavigationNVGT,
    SeparateNVGT,
    ButtonNVGT,
    GroupNVGT,
    ItemNVGT
} from '@/UI/partials/styled.tsx';*/
// ~~~~~~~~~~~~~~~~~~~~~~

import {NavigationNVGT,SeparateNVGT,RedirectNVGT,ActionNVGT} from '@/UI/partials/styled.tsx';



export default ()=>
{    
    const [actionCreate,setActionCreate]=useState([false,'create','/postweb/posts/create']);
    const navigate=useNavigate()

    useEffect(()=>{        
        identifyRouteCreated(setActionCreate)
    },[window.location.pathname])

    return(
        <NavigationNVGT>
            <RedirectNVGT onClick={()=>{navigate('/postweb/')}}>home</RedirectNVGT>
            <RedirectNVGT onClick={()=>{navigate('/postweb/posts')}}>posts</RedirectNVGT>
            <RedirectNVGT onClick={()=>{navigate('/postweb/users')}}>users</RedirectNVGT>
            <SeparateNVGT/>
            <ActionNVGT onClick={()=>{navigate(actionCreate.url)}}>{actionCreate.name}</ActionNVGT>
        </NavigationNVGT>
    )
    /*return(
        <NavigationNVGT children={
            <GroupNVGT>
                <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/')}}>home</ButtonNVGT>}/>
                <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/posts/')}}>posts</ButtonNVGT>}/>
                <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/users/')}}>users</ButtonNVGT>}/>
                <SeparateNVGT/>
                <ItemNVGT children={<ButtonNVGT onClick={()=>{navigate('/users/')}}>create</ButtonNVGT>}/>
            </GroupNVGT>
        }/>
    )*/
}