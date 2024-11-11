import styled,{ keyframes } from 'styled-components';
import { BeakerIcon,BellIcon,CheckBadgeIcon,KeyIcon,XMarkIcon,InformationCircleIcon,ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import {useEffect} from 'react';

const Notification=styled.div`
	min-width:400px;
	height:120px;
	border-radius:10px;
	border: 1.5px solid #2e2e2e;
	background-color:#1F1F1F;
	padding:10px;

	font-family:'Roboto Mono',monospace;	
	color:white;

	user-select:none;

	display:flex;
	justify-content:space-between;
`

export const Column=styled.div`
	width:60px;
	height:100%;	

	display:flex;
	flex-direction:column;
	align-items:center;
`

export const Message=styled.div`
	width:100%;height:100%;
`

export const Close=styled.button`
	width:min-content;height:min-content;
`


export default ({id,type,notify,droppedNotification})=>
{
	var icon=null;
	var message=null;

	if(notify && type)
	{
		switch(type)
		{
			case 'good':				
				icon=<CheckBadgeIcon className="w-8 h-8 text-green-500"/>

				var message=<div class="w-full h-full flex flex-col gap-2">
					<h1 className='px-4 text-[14px] uppercase text-[#22C55E] tracking-[.1125rem] font-[600]'>{notify.title}</h1>
					<p className='px-4 text-[10px]'>{notify.message}</p>
				</div>
				break;
			case 'bad':				
				icon=<ExclamationTriangleIcon className="w-8 h-8 text-red-500"/>;
				
				var message=<div class="w-full h-full flex flex-col gap-2">
					<h1 className='px-4 text-[14px] uppercase text-[#EF4444] tracking-[.1125rem] font-[600]'>{notify.title}</h1>
					<p className='px-4 text-[10px]'>{notify.message}</p>
				</div>
				break;
			case 'attention':				
				icon=<InformationCircleIcon className="w-8 h-8 text-orange-500"/>

				var message=<div class="w-full h-full flex flex-col gap-2">
					<h1 className='px-4 text-[14px] uppercase text-[#F97316] tracking-[.1125rem] font-[600]'>{notify.title}</h1>
					<p className='px-4 text-[10px]'>{notify.message}</p>
				</div>
				break;
			case 'notify':				
				icon=<BellIcon className="w-8 h-8 text-blue-500"/>
				
				var message=<div class="w-full h-full flex flex-col gap-2">
					<h1 className='px-4 text-[14px] uppercase text-[#3B82F6] tracking-[.1125rem] font-[600]'>{notify.title}</h1>
					<p className='px-4 text-[10px]'>{notify.message}</p>
				</div>
				break			  
			case 'logout':				
				icon=<KeyIcon className="w-8 h-8 text-orange-500"/>
				
				var message=<div class="w-full h-full flex flex-col gap-2">
					<h1 className='px-4 text-[14px] uppercase text-[#F97316] tracking-[.1125rem] font-[600]'>{notify.title}</h1>
					<p className='px-4 text-[10px]'>{notify.message}</p>
				</div>
				break
		}

		const thisExpire = async () => {
			var interval=setTimeout(()=>{				
				droppedNotification({ id });
				clearTimeout( interval );
			},5000*(id+1))
		}

		useEffect(()=>{
			thisExpire()
		},[])

		return(
			<Notification>
				<Column>
					{icon}
				</Column>
				<Message>
					{message}
				</Message>
				<Column>
					<Close onClick={()=>{droppedNotification({id})}}>
						<XMarkIcon className="w-5 h-5 text-white"/>
					</Close>
				</Column>
			</Notification>
		)
	}
}