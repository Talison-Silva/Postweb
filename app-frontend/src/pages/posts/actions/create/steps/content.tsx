import BiographyInput from "@/UI/components/form/sign-up/biography";
import {useCookies} from 'react-cookie';

export default ({}) => {
	const [cookies,setCookies] = useCookies([`postagens-created`]);
	return(
		<div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">
			<BiographyInput name="content" cookie={setCookies} height="350" label="write the content/subject of the post"/>
		</div>
	)
}
