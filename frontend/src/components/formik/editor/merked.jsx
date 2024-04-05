import styled from 'styled-components';

const Container=styled.div`
	position:relative;
	width:400px;height:100%;
	background-color: #171919;
	border-radius:0 20px 20px 0;
`

const Textarea=styled.textarea`
	width:100%;height:100%;
	font-family:'Ubuntu mono',monospace;
	background-color: transparent;
	color:white;resize:none;
	padding:24px 24px 24px 36px;

	outline: 2px solid transparent;
	outline-offset: 2px;
`

const Marked=({emit,...props})=>
{
	const change=(e)=>
	{
		emit(e.target.value)
	}
	return(
		<Container>			
			<Textarea onChange={change}/>
		</Container>
	)
}

export default Marked;