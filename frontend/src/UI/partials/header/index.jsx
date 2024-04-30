// ~. Dependency ReactJS
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
// ~~~~~~~~~~~~~~~~~~~~~

// ~. Components Included
import {Dropped} from '@/UI/components/dropped/index.tsx';
import Navigate from "@/UI/partials/navigate/index.jsx";
// ~~~~~~~~~~~~~~~~~~~~~~

// ~. Utilities 
import {identifyRouteCreated} from '@/app/utils/headerfunctions.ts';
import accountSchema from '@/app/config/schema/account.ts';
import logOut from '@/app/services/logout.ts';
import api from "@/app/hook/backend.js";
// ~~~~~~~~~~~~

// ~. Styled Components ~~~~~~~~~~
import {  
    DinamicButtonHDR,
    AccountPhotoHDR,
    AccountInforHDR,
    LogoCircleHDR,
    NavigationHDR,
    LogoTitleHDR,
    ContainerHDR,
    AccountHDR,
    ActionsHDR,
    LogoHDR
} from "@/UI/partials/styled.tsx";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



export default ()=>
{
    const fetchAccount=async()=>
    {
        try
        {
            var {data}=await api.get('/new-users/myAccount');
            localStorage.setItem('user',JSON.stringify(data[0]))
            setResponse(data[0])
        }
        catch(err)
        {
            switch(err.response.status){
                case 401:
                    navigate('/entrar?')
                default:
                    console.error(err)
            }
        }
        finally
        {
            setTimeout(()=>{setLoading(false)},1000)
        }
    }


    const redirect=()=>
    {     
      setCreated(identifyRouteCreated())
      navigate(created[2])
    }    

    
    const [loading,setLoading]=useState(true)
    const [created,setCreated]=useState([])
    const [response,setResponse]=useState()
    const navigate=useNavigate()


    useEffect(()=>
    {      
      setCreated(
        identifyRouteCreated()
      )
    }
    ,[window.location.pathname])
    
    useEffect(()=>{fetchAccount()},[])


    if(!loading)
    {
      return(
        <ContainerHDR>
          <LogoHDR>
              <LogoCircleHDR onClick={()=>{navigate('/')}}/>
              <LogoTitleHDR children={'postweb'}/>                
          </LogoHDR>

          <NavigationHDR>
              <Navigate/>
              <DinamicButtonHDR type="button"
                  children={created[1]}
                  onClick={redirect}                  
              />
          </NavigationHDR>

          <ActionsHDR>
              <Dropped toggle={
                <AccountHDR>
                  <AccountInforHDR>
                      <p className="font-bold text-nowrap text-white uppercase" style={{fontSize:"13px"}}>{response.username}</p>
                      <p className="text-green-500 text-center" style={{fontSize:"11px"}}>online</p>
                  </AccountInforHDR>

                  <AccountPhotoHDR                       
                    src={`http://localhost:3005/${response.photo}`}
                  />
                </AccountHDR>
              } schema={accountSchema}/>
          </ActionsHDR>
        </ContainerHDR>
      )
    }
}