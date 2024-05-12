import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "@/UI/components/show/input/index.jsx";
import Description from "@/UI/components/show/description/index.jsx";
import Photo from "@/UI/components/show/photo/index.jsx";

import {AuthContext} from '@/app/contexts/AuthContext.tsx';
import {useContext} from 'react';

const Container=styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 30px;
    flex-direction: column;
    justify-content: space-between;
    gap:20px;
    background-color: #080808;
`

const Rows=styled.div`
    width:100%;
    min-height: min-content;

    display: grid;
    grid-template-columns:20% 80%;
    grid-gap:0px;
`

const Columns=styled.div`
    width:100%;
    min-height: min-content;

    display: flex;
    flex-direction:column;
    gap:20px;
`


export default () =>
{
    const { isClient } = useContext(AuthContext);
    const navigate = useNavigate();

    return(
        <Container>
            <Rows>
                <Photo url={`http://localhost:3005/static/photo-perfil/${isClient.photo}`}/>
                <Input name="username" value={isClient.username}/>
            </Rows>
            <Columns>                                
                <Input name="email" value={isClient.email}/>
                <Description name="me" value={isClient.me}/>

                <button onClick={()=>{navigate('/posts/')}} type="button" className="w-full h-16 bg-white rounded-xl text-black uppercase font-ubuntuMono">proseguir?</button>
            </Columns>
        </Container>
    )
}