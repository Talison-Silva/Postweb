import styled from 'styled-components'

// ---| Authentication |-----------------------------------

export const RootAuthentication=styled.main`
    height: 100vh;
    display: flex;
    justify-content:center;
    align-items:center;
`

export const ContentAuthentication=styled.section`
	min-width: 800px;
	min-height: 400px;
	border-radius: 20px;
	overflow: hidden;

	background-color: #0b0d0d;
	border: 2.5px solid #141717;

	display: flex;	
	align-items:center;
	justify-content:center;
`

// ---| Home |---------------------------------------------

export const RootHome=styled.main`
	min-height: 100vh;
	display: flex;    
	flex-direction: column;
	justify-content: space-between;
`

export const ContentHome=styled.section`	
	width:100%;
	min-height:100vh;

	display: flex;
	justify-content: center;	
	align-items: center;
`