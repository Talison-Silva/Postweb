import styled from 'styled-components';
import {useRef} from 'react';


const Container=styled.div`
	width:100%;
	height:96px;
	padding: 0 24px 0 24px;
	background-color: #080808;
	font-family:'Ubuntu mono',monospace;
	text-transform:uppercase;
	font-size:48px;
	color:white;

	display:flex;
	justify-content: space-between;
	align-items:center;
`


const State=({status})=>
{
	let request=useRef(
		{
			"0":<p className="text-white">0</p>,
			"200":<p className="text-green-600">200</p>,
			"500":<p className="text-red-600">500</p>
		}
	);

	return(
		<Container>
			<h1 className="uppercase text-5xl">LoggIn</h1>
			{request.current[status]}
		</Container>
	)
}


export default State;