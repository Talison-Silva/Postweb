import styled from "styled-components";


const Container=styled.div`
	width:100%;display:flex;
	flex-direction:column;
	user-select:none;
	gap:8px;
`

const FieldsStyled=styled.p`
	width:100%;height:56px;
	padding:20px;
	border:1px solid #383838;
	font-family:'Ubuntu mono',monospace;
	font-size:20px;
	background-color: transparent;
	color:white;
	border-radius:12px;

	outline: 2px solid transparent;
	outline-offset: 2px;

	display:flex;
	align-items:center;
`

const Label=styled.label`
	text-transform: uppercase;
	color:white;
	font-family:'Ubuntu mono',monospace;
	font-size:20px;
`

function Input({name,value}){
	return(
		<Container>
			<Label>
				{name}
			</Label>
			<FieldsStyled>{value}</FieldsStyled>			
		</Container>
	)
}

export default Input;