import Notification from "@/UI/components/notification/index.jsx";
import { useState,useRef, useEffect } from 'react';
import styled from 'styled-components';
import { createContext } from 'react';

export const NotificationContext=createContext(undefined);

interface notify{
	message:string,
	state:string
}

const FloatBox=styled.div`
	position:fixed;
	bottom:0;right:0;

	width:min-content;
	height:min-content;

	display:flex;
	flex-direction:column;
	gap:10px;
`


let emitNotification:any,droppedNotification:any;
export const NotificationProvider = ({children}) =>
{	
	const [notifications,setNotifications]=useState([]);
	const Notifications=[];

	emitNotification = async ({notify,type}:notify) =>
	{				
		setNotifications(oldArray => [...oldArray,{id:notifications.length , notify , type}])
	}

	droppedNotification = ({id}) => {
		setNotifications(notify => notify.filter(notify => notify.id !== id))
	}

	notifications.map( notify => {
		Notifications.push(<Notification droppedNotification={droppedNotification} {...notify} />)
	})

	return(
		<NotificationContext.Provider value={{ emitNotification }} >						
			{children}
			<FloatBox children={Notifications}/>
		</NotificationContext.Provider>
	)
}

export {droppedNotification};
export {emitNotification};