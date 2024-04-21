import {DroppedBTTN,DroppedITM} from '@/UI/components/styled.ts';

const DroppedNoOpen=({name,Icon,method})=>{	
	return(
		<div className="px-2 w-full min-h-min flex justify-between" onClick={method}>
			<DroppedITM>
				<div className="flex gap-5 items-center">
				<Icon className="w-5 h-5 stroke-2 text-white"/>
				{name}
				</div>
			</DroppedITM>
		</div>
	)
}

export {DroppedNoOpen}