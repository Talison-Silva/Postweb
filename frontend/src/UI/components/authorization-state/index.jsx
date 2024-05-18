import styled from 'styled-components';
import {useRef} from 'react';


const Container=styled.div`
	width:100%;
	height:64px;
	padding: 0 24px 0 24px;
	font-family:'Ubuntu mono',monospace;
	text-transform:uppercase;
	font-size:36px;
	color: #084CCF;//white;

	display:flex;
	justify-content: space-between;
	align-items:center;
`


const State=({status})=>
{
	let request=useRef(
		{
			"0":<p>0</p>,
			"200":<p className="text-green-600">200</p>,
			"500":<p className="text-red-600">500</p>
		}
	);

	return(
		<Container>
			<h1 className="uppercase text-[32px]">LoggIn</h1>
			<p>{request.current[status]}</p>
		</Container>
	)
}


export default State;