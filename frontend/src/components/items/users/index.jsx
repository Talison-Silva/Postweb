import styled from 'styled-components';


const Container=styled.div`
	width:100%;min-height:256px;
	background-color: #0B0D0D;
	border: 4px solid #141717;
	border-radius: 0 24px 24px 0;
	user-select:none;
	display:flex;
`

const Left=styled.div`
	position:relative;
	width:256px;height:256px;
	background-color:#070808;
	border-radius: 24px;
`

const Right=styled.div`
	position:relative;
	padding:0 96px 0 96px;
	width:100%;
	min-height:100%;
	display:flex;
`

const Photo=styled.img`
	position:absolute;
	right: -40px;
	width:150px;
	height:150px;
	clip-path: circle(40%);
`

const Article=styled.article`
	margin-top:24px;
	color:white;
	font-family:'Ubuntu mono',monospace;
`

const DATE=styled.p`
	position:absolute;
	right:0;
	width: min-content;height:100%;
	font-family:'Ubuntu mono',monospace;
	font-weight:800;
	text-align: center;
	text-transform:uppercase;
	color:#303838;
	padding:0 4px 0 4px;
	writing-mode:vertical-lr;
	text-orientation: upright;

`

const Username=styled.h1`
	font-weight:800;
	font-size: 48px;
`

const AboutMe=styled.p`
	margin-top:5px;
	font-weight:400;
	font-size:18px;
`

const Users=({users,date,...props})=>
{
	return(
		<Container>
            <Left>
                <Photo 
                	src={`http://localhost:3005/${users.photo}`}
                />
            </Left>
            <Right>
                <Article>                    
                    <Username>{users.username}</Username>
                    <AboutMe>{users.me}</AboutMe>                    
                </Article>
                <DATE>
                	{date}
                </DATE>
            </Right>
        </Container>
	)
}

export default Users;