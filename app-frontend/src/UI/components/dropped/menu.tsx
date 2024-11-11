import {DroppedMN,DroppedFLT} from '@/UI/components/styled.ts';
import {Dropped} from './index.tsx';

const DroppedMenu=({schema,down=true,...props})=>
{
	console.log('menu',schema)//
	return(
		<DroppedFLT className={down?'right-0 -bottom-[70px]':'top-0 left-full'}>			
			<DroppedMN children={<Dropped schema={schema} menu={true}/>}/>
		</DroppedFLT>
	)
}

export {DroppedMenu};