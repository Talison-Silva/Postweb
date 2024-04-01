import Header from '@/components/core/header/index.jsx'
import Footer from '@/components/core/footer/index.jsx'
import styled from 'styled-components'
import { useState,useRef,useEffect } from 'react'

const Content=styled.section`
	width:100%;
	min-height:100vh;

	display: flex;
	justify-content: center;	
	align-items: center;
`


const Root=styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: columns;
	justify-content: space-between;
`
const HighContent=styled.div`
    width:100%;
    min-height:min-content;
    position: sticky;
    left: 0;
    top: 0; 
`

function Layouts({children}){
    return(
        <Root>
            <HighContent>                
                <Header/>                    
            </HighContent>
        	<Content>
        		{children}
        	</Content>

        	<Footer/>
        </Root>
    )
}

/*
<section className="min-h-screen flex flex-col justify-between">
    <div className="w-full min-h-screen flex justify-center items-center">
        {children}
    </div>
    <Footer/>
    <Header/>
</section>
*/

export default Layouts;
