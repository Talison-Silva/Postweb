import styled,{ keyframes } from 'styled-components';
import {useEffect} from 'react';

const initial=keyframes`
	0%{height:0px;}
	100%{height:40px;}
`

const Container=styled.div`
	position:relative;
	width:100%;
	min-height: min-content;
	display:flex;
	justify-content:space-between;
	padding:0 40px 0 40px;
`

const Limite=styled.p`
	padding:5px 0 5px 0;
	font-family: "JetBrains Mono", monospace;
	min-width:min-content;
	height:min-content;
	font-size:20px;font-weight:500;
`


let alerts=[],style={};
const Alert=({status,message,...props})=>
{
	if(status && message)
	{	
		switch(status){
			case 200:
				style={backgroundColor:'green',color:'white'}
				break
			case 401:
				style={backgroundColor:'orange',color:'white'}
				break
			case 500:
				style={backgroundColor:'red',color:'white'}
				break
			default:
				style={backgroundColor:'white',color:'black'}
		}

		alerts=[
			<Limite key={1}>{status}-{message}</Limite>,
			<Limite key={2}>{status}-{message}</Limite>,
			<Limite key={3}>{status}-{message}</Limite>,
			<Limite key={4}>{status}-{message}</Limite>,
			<Limite key={5}>{status}-{message}</Limite>,
			<Limite key={6}>{status}-{message}</Limite>,
			<Limite key={7}>{status}-{message}</Limite>,
		]
	}
	
	return(
		<Container style={style} {...props}>			
			{(status && message) && alerts}
		</Container>
	)
}

export default Alert;