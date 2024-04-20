import {ContentHome,RootHome} from '@/UI/layouts/styled.ts';
import Header from '@/UI/partials/header/index.jsx'
import Footer from '@/UI/partials/footer/index.jsx'


const Layouts=({children})=>
(
	<RootHome>
		<Header/>
		<ContentHome children={children}/>
		<Footer/>
	</RootHome>
)


export default Layouts;
