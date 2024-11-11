import {DroppedBTTN,DroppedITM} from '@/UI/components/styled.ts';

const DroppedNoOpen=({name,Icon,method})=>{	
	return(
		<div className="px-2 w-full min-h-min flex justify-between" onClick={method}>
			<DroppedITM>
				<div className="flex w-full justify-between items-center">
				{name}
				<Icon className="w-5 h-5 stroke-2 text-white"/>
				</div>
			</DroppedITM>
		</div>
	)
}

export {DroppedNoOpen}