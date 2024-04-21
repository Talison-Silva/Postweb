// ~. Components Included~~~~~~~
import {
	ContentAuthentication,
	RootAuthentication
} from '@/UI/layouts/styled.ts';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



export default ({children})=>
(
	<RootAuthentication>
		<ContentAuthentication children={children}/>
	</RootAuthentication>
)
