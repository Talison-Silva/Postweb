import styled from 'styled-components'
import { useState } from 'react'

const Root=styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content:center;
	align-items:center;
`

const Content=styled.section`
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


function Layouts({children}){
    return(        
        <Root>        	
        	<Content>
        		{children}
        	</Content>	        
        </Root>
    )
}

/*
<main className="w-full h-screen flex justify-center items-center">
    <section style={{minWidth:'800px',minHeight:'400px',display:'flex',justifyContent:"center",alignItems:"center"}} className="rounded-2xl bg-[#0b0d0d] border-2 border-solid border-[#141717] overflow-hidden">
        {children}
    </section>
</main>
*/

export default Layouts;
