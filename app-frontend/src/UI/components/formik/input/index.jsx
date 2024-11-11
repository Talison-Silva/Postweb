import styled from "styled-components";
import {Field,useField, ErrorMessage } from "formik";
import {useState,useEffect} from 'react';

const Container=styled.div`
	width:100%;display:flex;
	flex-direction:column;
	gap:4px;
`

const FieldsStyled=styled.input`
	width:100%;height:40px;
	padding:10px;
	border:1px solid #383838;
	font-family:'Ubuntu mono',monospace;
	font-size:14px;
	background-color: transparent;
	color:white;
	border-radius:8px;

	outline: 2px solid transparent;
	outline-offset: 2px;
`

const Label=styled.label`
	text-transform: uppercase;
	letter-spacing: 1.75px;
	color:white;
	font-family:'Ubuntu mono',monospace;
	font-size:12px;
`

const Focus=styled.span`
	color: red;
`

const ErrorStyled=styled.span`
	font-size:10px;
	letter-spacing: 1.25px;
	color: orange;
	text-transform: uppercase;
	font-family:'Ubuntu mono',monospace;
`

const Little=styled.span`
	color: #444d4d;
	font-size:12px;
	letter-spacing: 1.25px;
	text-transform: uppercase;
	font-family:'Ubuntu mono',monospace;
`

function Input({name,type="",id,label,cookie,required,...props}){
	const [err,setErr]=useState(false);
	const [fields,meta]=useField(name)

	useEffect(()=>{				
		meta.error?setErr(true):setErr(false);
	},[meta.error])

	if(cookie)
	{
		useEffect(()=>{
			if(id)
			{
				cookie(`${name}${id}`,fields.value,{path:`/postagens/`,'maxAge':10000})
			}	
			else
			{
				cookie(name,fields.value,{path:`/postagens/`,'maxAge':10000})
			}	
		},[fields.value])
	}
	return(
		<Container>
			<Label>
				{name}
				{required && <Focus> *</Focus>}
			</Label>
			<Field as={FieldsStyled} name={name} type={type} {...props}/>
			<ErrorMessage name={name} component={ErrorStyled}/>
			{(!err && label) && <Little>{label}</Little>}
		</Container>
	)
}

export default Input;