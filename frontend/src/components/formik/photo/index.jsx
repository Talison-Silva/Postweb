import styled from 'styled-components';
import { Field } from "formik";

const Container=styled.div`
    position:relative;
    width:96px;height:96px;
    background-color :white;
    overflow: hidden;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const FieldsStyled=styled.input`
	position:absolute;
	top:0;left:0;
	width:96px;
	height:96px;
	opacity:0;
	outline: 2px solid transparent;
	outline-offset: 2px;
`

const Photo=({name,type="",...props})=>
{

	/*
	const handleUpload=(e)=>
	{
        let file,leitor,viewer;
        viewer=document.getElementById('viewer')
        file=e.target.files[0]

        if(file){
            leitor=new FileReader()
            leitor.onload =(e)=>{
                viewer.src = e.target.result;
            }

            leitor.readAsDataURL(file)
        }
    }
    */
    const test=(e)=>
    {
    	console.log(e.target.files)
    }

	return(
		<Container>
			<img id='viewer'/>
			{/*<input className="
				absolute top-0 left-0 w-24 h-24 opacity-0
			"
				name={name} 
				type="file"
				onChange={handleUpload}
			/>*/}
			<Field as={FieldsStyled} name={name} type={type} {...props} onChange={test}/>
		</Container>
	)
}

export default Photo;