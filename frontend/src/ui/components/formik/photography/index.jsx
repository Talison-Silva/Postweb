import styled from 'styled-components';
import {useRef} from 'react';
import {useField} from 'formik';

const Container=styled.div`
	width:100%;
	height:300px;
	border-radius:20px;
	border:1px solid #383838;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	overflow:hidden;
`

const Image=styled.div`
	width:100%;
	height:250px;
	background-position:center;
	background-size:cover;
`

const Upload=styled.label`
	display: inline-block;
	width:100%;
	height:50px;
	background-color: #121212;
	color:white;
	font-weight: 600;
	font-family:'Ubuntu mono',monospace;
	text-transform:uppercase;
	letter-spacing:2px;
	font-size:16px;

	display:flex;
	justify-content:center;
	align-items:center;
`

const Input=styled.input`
	display:none;
`

const photography=({name,set,...props})=>
{
	const [field,meta,helpers]=useField(name)
	const imageRef=useRef(null)

	const change=async(e)=>
	{		
		const file=e.target.files[0]
		console.log('JSON:', await JSON.stringify(file))
		if(file)
		{
			set('photography',file)

			//helpers.setValue(photographyRef.current.value)

        	let leitor=new FileReader()
            leitor.onload =(e)=>
            {            	
            	//helpers.setValue(e.target.result)
                imageRef.current.style.backgroundImage=`url(${e.target.result})`;
            }

            leitor.readAsDataURL(file)            
        }
	}

	return(
		<Container>
			<Image ref={imageRef}/>
			<Upload for="photography">
				<Input id="photography" type="file" onChange={change}/>
				<span>Upload Imagem</span>
			</Upload>
		</Container>
	)
}

export default photography;