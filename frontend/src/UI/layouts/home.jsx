// ~. Components Included
import Header from '@/UI/partials/header/index.jsx'
import Footer from '@/UI/partials/footer/index.jsx'

import {
	ContentHome,RootHome
} from '@/UI/layouts/styled.ts';
// ~~~~~~~~~~~~~~~~~~~~~~

import {AuthContext} from '@/app/contexts/AuthContext.tsx';
import Loading from "@/UI/components/loading/index.jsx";
import {useContext,useEffect} from 'react';


export default ({children})=>
{
	const {isClient,refreshjwt}=useContext(AuthContext);
	
	if(!isClient)
	{		
		refreshjwt()
	}

	if(isClient)
	{
		return(
			<RootHome>
				<ContentHome children={children}/>
				<Header/>
				<Footer/>
			</RootHome>
		)
	}	
}