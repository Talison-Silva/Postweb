import styled from 'styled-components';
import { Field,useField } from "formik";
import { useEffect } from 'react';

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

const Fields=styled.input`
	position:absolute;
	top:0;left:0;
	width:96px;
	height:96px;
	opacity:0;
	outline: 2px solid transparent;
	outline-offset: 2px;
`

const Photo=({fileRef,change,...props})=>
{
	const [field ,meta,helpers]=useField(props);		

	const handleUpload=(event)=>
	{
		const viewer=document.getElementById('viewer')
		const file = event.currentTarget.files[0];

		if(file)
		{
			//helpers.setValue(fileRef.current.value)
			change(file)


        	let leitor=new FileReader()
            leitor.onload =(e)=>
            {
                viewer.src = e.target.result;
            }

            leitor.readAsDataURL(file)            
        }
        /*let file,leitor,viewer;
        viewer=document.getElementById('viewer')
        file=new File(['foo'],entry)
        console.log(new File(['foo'],entry))

        if(file){
        	leitor=new FileReader()
            leitor.onload =(e)=>
            {
                viewer.src = e.target.result;
            }

            leitor.readAsDataURL(file)            
        }

        helpers.setValue(file);

		const reader = new FileReader();
		reader.onload = () => {
			helpers.setTouched(true);
			helpers.setTouched(true);
			helpers.setValue(reader.result);
		};
		reader.readAsDataURL(file);

        */
    }
    /*.test("is-file-too-big", "File exceeds 10MB",()=>{
        console.log("==>",file.current.value)
    })     
    */

	return(
		<Container>
			<img id='viewer'/>
			{<Fields
				ref={fileRef}
				type="file"
				{...field}
				onChange={handleUpload}
			/>}
		</Container>
	)
}

export default Photo;