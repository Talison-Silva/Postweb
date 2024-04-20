import {ContentAuthentication,RootAuthentication} from '@/UI/layouts/styled.ts';


const Layouts=({children})=>
(
	<RootAuthentication>
		<ContentAuthentication children={children}/>
	</RootAuthentication>
)


export default Layouts;
