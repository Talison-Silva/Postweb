// ~. Components Included
import Header from '@/UI/partials/header/index.jsx'
import Footer from '@/UI/partials/footer/index.jsx'

import {
	ContentHome,RootHome
} from '@/UI/layouts/styled.ts';
// ~~~~~~~~~~~~~~~~~~~~~~


export default ({children})=>
(
	<RootHome>
		<ContentHome children={children}/>
		<Header/>
		<Footer/>
	</RootHome>
)