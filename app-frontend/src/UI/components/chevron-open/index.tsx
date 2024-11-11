import {ChevronRightIcon,ChevronDownIcon} from '@heroicons/react/24/outline';

export const ChevronOpen=({active})=>
{
	if(active)
	{
		return <ChevronDownIcon className="w-5 h-5 stroke-2"/>
	}
	else
	{
		return <ChevronRightIcon className="w-5 h-5 stroke-2"/>
	}
}