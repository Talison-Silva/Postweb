import styled from 'styled-components';
import {useRef,useEffect} from 'react';
import {marked} from 'marked';

const Container=styled.div`
	width:400px;
	height:100%;	
	color:white;
	font-family:'Ubuntu mono',monospace;
	border:1px solid #383838;
	border-radius:20px 0 0 20px;
	padding:24px;
	word-wrap: break-word;
	overflow-y:auto;
`

const Viewer=({render,...props})=>
{
	const viewerRef=useRef(null);

	useEffect(()=>
	{
		let html=marked.parse(render)
		viewerRef.current.innerHTML=html;
	}
	,[render])
	return(
		<Container ref={viewerRef}>
		</Container>
	)
}

export default Viewer;