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
	padding:5px 0 5px 0;	
	backdrop-filter:blur(5px);
    border:2px dashed #262B2B;	
	border-radius:10px;
	color:white;

	display:flex;
	flex-direction:column;
`

// Dropped-Item
export const DroppedITM=styled.button`
	width:100%;
	position:relative;
	font-size: 1rem;
	font-family:'Roboto Mono',sans-serif;		
	font-weight: 500;
	letter-spacing:.125rem;
	text-transform:capitalize;
	padding: 2px;
	//border-radius:10px;
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