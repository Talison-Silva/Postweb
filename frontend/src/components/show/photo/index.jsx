import styled from 'styled-components';

const Container=styled.div`
    position:relative;
    width:112px;height:112px;
    background-color :white;
    overflow: hidden;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    user-select:none;
`

const Photo=({url})=>
{
	return(
		<Container>			
            <img src={url}/>
		</Container>
	)
}

export default Photo;