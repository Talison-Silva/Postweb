import styled from 'styled-components'

// Dropped-Container
export const DroppedCNTNR=styled.div`
	width: min-content;
	height: min-content;	
`

// Dropped-Button
export const DroppedBTTN=styled.div`
	position:relative;
	min-width: min-content;
	height: min-content;	
`

// Dropped-Float-Menu
export const DroppedFLT=styled.div`
	position:absolute;
	width: min-content;
	height: min-content;
`

// Dropped-Menu
export const DroppedMN=styled.div`
	min-width:155px;
	min-height:40px;
	padding:10px 0 10px 0;
	//background: linear-gradient(45deg,transparent,#262B2B,transparent,#262B2B,transparent,#262B2B);
	backdrop-filter:blur(5px);
    border:3px dashed #262B2B;	
	border-radius:10px;
	color:white;

	display:flex;
	flex-direction:column;
`

// Dropped-Item
export const DroppedITM=styled.button`
	width:100%;
	position:relative;
	font-size:1.2125rem;
	font-family:'Ubuntu Mono',sans-serif;		
	font-weight: 200;
	letter-spacing:.125rem;
	text-transform:capitalize;
	padding:5px 10px 5px 10px;
	border-radius:10px;
	color:white;
	user-select:none;

	display:flex;
	justify-content:space-between;
	align-items:center;

	&:hover
	{
		background-color:rgba(255,255,255,0.125);
	}
`