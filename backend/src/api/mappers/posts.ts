export const applicationForApi=({id,...data})=>
{
	let response={};

	if(id){ response.id=id }	

	response={
		...response,
		title:data.title,
		description:data.description,
		content:data.content,
		emphasis:data.emphasis
	}

	return response;
}

interface User{
	username:string,
	photo:object,
	email:string
}


export interface applicationForApiNew{
	id?:number,
	title?:string,
	description?:string,
	content?:string,
	emphasis?:object
}


export interface apiForApplicationNew{
	id:number,
	title:string,
	description:string,
	content:string,
	createdAt:string,
	user:User
}


export const apiForApplication=(data)=>
{
	if(typeof data==="number"){return data}

	let response=[];
	
	data.map( itm => {		
		response.push({
			id:itm.id,
			title:itm.title,
			description:itm.description,
			content:itm.content,
			createdAt:itm.createdAt,
			emphasis:itm.emphasis,
			user:{
				username:itm.User.username,
				photo:itm.User.photo,
				email:itm.User.email
			}
		})
	})

	return response;
}