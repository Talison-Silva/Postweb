// ~. Components Included~~~~~~~
import {
	ContentAuthentication,
	RootAuthentication
} from '@/UI/layouts/styled.ts';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import {AuthContext} from '@/app/contexts/AuthContext.tsx';
import {useContext} from 'react';

export default ({authorization=false,children})=>
{
	const {isClient,refreshjwt}=useContext(AuthContext);    

    if(!isClient && authorization)
    {    
      refreshjwt()
    }
    
    if(authorization)
    {
    	if(isClient)
    	{
    		return(
				<RootAuthentication>
					<ContentAuthentication children={children}/>
				</RootAuthentication>
			)
    	}
    }
    else
    {
    	return(
			<RootAuthentication>
				<ContentAuthentication children={children}/>
			</RootAuthentication>
		)
    }	
}
