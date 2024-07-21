import {DroppedCNTNR,DroppedITM} from '@/UI/components/styled.ts';
import {DroppedNoOpen} from './no-open.tsx';
import {DroppedOpen} from './open.tsx';
import {DroppedToggle} from './toggle.tsx';


const Dropped=({schema,toggle,menu,children})=>
{
	var response=[];

	if(toggle){
		return <DroppedToggle toggle={toggle} schema={schema}/>
	}

	if(menu)
	{			
		schema.map(entry =>
		{
			response.push(<DroppedNoOpen name={entry.name} method={entry.method} Icon={entry.icon}/>)
		})

		return(response)
	}
}


export { Dropped };