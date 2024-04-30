export const applicationForApi=(data)=>
{
	return{
		username:data.username,
		email:data.email,
		password:data.password,
		me:data.me,
		photo:data.photo
	}
}

export const apiForApplication=(data)=>
{
	if(typeof data==="number"){return data}
		
	let response=[];
	
	data.map( itm => {		
		response.push({
			photo: itm.photo,
	    	me: itm.me,
	    	email: itm.email,
	   		username: itm.username,
	    	createdAt: itm.createdAt,
		})
	})

	return response;
}