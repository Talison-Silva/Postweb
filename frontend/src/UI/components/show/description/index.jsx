import styled from 'styled-components';

const Textarea=styled.p`
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
	user-select:none;
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

const Description=({name,value})=>
{
	return(
		<Container>
			<Label>
				{name}				
			</Label>
			<Textarea>
				{value}
			</Textarea>
		</Container>
	)
}

export default Description;