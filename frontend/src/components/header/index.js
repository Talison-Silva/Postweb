import React from "react";
import {Link} from 'react-router-dom';

import { useNavigate } from "react-router-dom";

//import stylings
import '../../styles/components/header/style.scss';

const Header=(props)=>{
    const navigate=useNavigate()

    let router,name;
    if(props.typeH){
        router='/post'
        name="criar postagem"
    }else{
        router='/'
        name="back page"
    }

    
    return(
        <header>
            <h1 onClick={()=>{
                navigate('/')
            }}>
                <span className="colorOne">Post</span>
                <span className="colorTwo">Web</span>
            </h1>

            <button onClick={()=>{
                navigate(router)
                }
            }>{name}</button>
        </header>
    );
}

export default Header;
