import {ChevronOpen} from '@/UI/components/chevron-open/index.tsx';
import {DroppedBTTN,DroppedITM} from '@/UI/components/styled.ts';
import {DroppedMenu} from './menu.tsx';
import {useState} from 'react';


const DroppedOpen=({name,Icon,schema,...props})=>{
	const [drop,setDrop]=useState(false);

	props.onMouseOver=()=>{setDrop(true)}
	props.onMouseOut=()=>{setDrop(false)}

	return(
		<div className="relative px-2 w-full min-h-min flex justify-between" {...props}>
			<DroppedITM>
			<div className="flex gap-5 items-center">
				<Icon className="w-6 h-6 stroke-2"/>
				{name}
			</div>
			<ChevronOpen active={!drop}/>
			</DroppedITM>
			
			{drop && <DroppedMenu schema={schema} down={false}/>}
		</div>
	)
}

export {DroppedOpen}