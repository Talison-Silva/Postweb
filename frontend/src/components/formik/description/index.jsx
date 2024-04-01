import styled from 'styled-components';
import {Field,ErrorMessage} from 'formik';

const Textarea=styled.textarea`
	width:100%;height:200px;
	padding:20px;
	border:1px solid #383838;
	font-family:'Ubuntu mono',monospace;
	font-size:20px;
	background-color: transparent;
	color:white;
	border-radius:12px;
	resize:none;

	outline: 2px solid transparent;
	outline-offset: 2px;
`

const Container=styled.div`
	width:100%;
	min-height: min-content;
	display:flex;
	flex-direction:column;
	gap:8px;
`

const Label=styled.label`
	text-transform: uppercase;
	color:white;
	font-family:'Ubuntu mono',monospace;
	font-size:20px;
`

const Focus=styled.span`
	color: red;
`

const ErrorStyled=styled.span`
	font-size:12px;
	letter-spacing: 1.25px;
	color: orange;
	text-transform: uppercase;
	font-family:'Ubuntu mono',monospace;
`

const Description=({name,required,type="",...props})=>
{
	return(
		<Container>
			<Label>
				{name}
				{required && <Focus> *</Focus>}
			</Label>
			<Field as={Textarea} name={name} type={type} {...props}/>
			<ErrorMessage name={name} component={ErrorStyled}/>
		</Container>
	)
}

export default Description