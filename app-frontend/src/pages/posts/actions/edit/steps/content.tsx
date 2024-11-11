import ContentInput from "@/UI/components/form/sign-up/content";
import MarkdownEditor from '@uiw/react-markdown-editor';
import {useCookies} from 'react-cookie';
import { useState } from "react";

export default ({id}) => {
	const [cookies,setCookies] = useCookies([`postagens-edit`]);	

	return(
		<div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">						
			{/*<MarkdownEditor value="" height="200"/>*/}
			<ContentInput name="content" cookie={setCookies} height="350" label="write the content/subject of the post" {...{id}}/>
		</div>
	)
}
