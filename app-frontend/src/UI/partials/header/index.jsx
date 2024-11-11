// ~. Components Included
import {Dropped} from '@/UI/components/dropped/index.tsx';
import Navigate from "@/UI/partials/navigate/index.jsx";
// ~~~~~~~~~~~~~~~~~~~~~~

// ~. Utilities 
import dropppedUser from '@/app/config/droppedUser.ts';
// ~~~~~~~~~~~~

// ~. Styled Components ~~~~~~~~~~
import {  
    AccountPhotoHDR,
    AccountInforHDR,    
    NavigationHDR,
    LogoTitleHDR,
    ContainerHDR,
    AccountHDR,
    ActionsHDR,
    LogoHDR
} from "@/UI/partials/styled.tsx";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


import {AuthContext} from '@/app/contexts/AuthContext.tsx';
import {useContext} from 'react';



export default ()=>
{   
    const {isClient}=useContext(AuthContext);

    return(
      <ContainerHDR>
        <LogoHDR>            
            <LogoTitleHDR children={'postweb'}/>                
        </LogoHDR>

        <NavigationHDR>
            <Navigate/>            
        </NavigationHDR>

        <ActionsHDR>
            <Dropped toggle={
              <AccountHDR>
                <AccountInforHDR>
                    <p className="font-bold text-nowrap text-white uppercase" style={{fontSize:"10px"}}>{isClient.username}</p>
                    <p className="text-green-500 text-center" style={{fontSize:"8px"}}>online</p>
                </AccountInforHDR>

                <AccountPhotoHDR                       
                  src={`http://localhost:3005/static/photo-perfil/${isClient.photo}`}
                />
              </AccountHDR>
            } schema={dropppedUser}/>
        </ActionsHDR>
      </ContainerHDR>
    )
}