import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import {useState,useRef,useEffect} from 'react';
import {useField} from 'formik';
import Viewer from './viewer.jsx';
import Marked from './merked.jsx';

const Global=createGlobalStyle`
	h1{
		font-size:46px;
		font-weight:800;
	}

	h2{
		font-size:40px;
		font-weight:800;
	}

	h3{
		font-size:34px;
		font-weight:800;
	}

	h4{
		font-size:28px;
		font-weight:800;
	}

	h5{
		font-size:22px;
		font-weight:800;
	}

	h6{
		font-size:16px;
		font-weight:800;
	}

	li{
		padding:0 0 0 20px;		
	}

	img{
		margin-top: 20px;
	}
`

const Container=styled.div`
	min-width:800px;
	height:100%;
	display:flex;
	padding:10px;
	flex-direction:column;
	gap:10px;
`

const Workspace=styled.div`
	position:relative;
	min-width:800px;
	height:100%;
	overflow:hidden;
	display:flex;
`

const Legend=styled.div`
	width:100%;
	display:flex;
	justify-content:space-around;
`

const Label=styled.label`
	font-family: 'Ubuntu mono',monospace;
	font-weight:800px;
	font-size:18px;
	color:white;
	text-transform:uppercase;
`

const Editor=({name,cookie,...props})=>
{
	const [content,setContent]=useState("");
	const [field,meta,helpers]=useField(name)

	useEffect(()=>{
		helpers.setValue(content)
	},[content])

	if(cookie)
	{
		useEffect(()=>{
			cookie(name,field.value,{path:`/postagens/`,'maxAge':10000})
		},[field.value])
	}

	return(
		<Container>
			<Legend>
				<Label>Viewer</Label>
				<Label>Editor</Label>
			</Legend>
			<Workspace>
				<Global/>				
				<Viewer render={content}/>
				<Marked emit={setContent}/>
			</Workspace>
		</Container>
	)
}

export default Editor;