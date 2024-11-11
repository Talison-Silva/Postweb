import {DroppedBTTN} from '@/UI/components/styled.ts';
import {DroppedMenu} from './menu.tsx';
import {useState} from 'react';

const DroppedToggle=({toggle,schema,...props})=>{
	const [drop,setDrop]=useState(false)

	props.onClick=()=>
	{	
		setDrop(!drop)
	}	

	return(
		<DroppedBTTN {...props}>
			{toggle}		
			{drop && <DroppedMenu schema={schema}/>}			
		</DroppedBTTN>
	)
}

export {DroppedToggle}