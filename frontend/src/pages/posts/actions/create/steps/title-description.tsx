import InputNormal from "@/UI/components/form/sign-up/input-normal";
import BiographyInput from "@/UI/components/form/sign-up/biography";
import {useCookies} from 'react-cookie';

export default ({cookie}) => {
	const [cookies,setCookies] = useCookies([`postagens-created`]);
	return(
		<div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-4 p-6">			
			<InputNormal name="title" type="text" label="Choose a title appropriate to the subject of the post." cookie={setCookies}/>		
			<BiographyInput name="description" type="text" height={200} label="Briefly describe the main topic of the post" max={255} cookie={setCookies}/>
		</div>
	)
}
