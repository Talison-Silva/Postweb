export const applicationForApi=(data)=>
{
	return{
		username:data.username,
		email:data.email,
		password:data.password,
		biography:data.biography,
		birthdate:`${data.day}/${data.month}/${data.year}`,
		photo:data['profile-picture'],
		phone:data.phone,
		gender:data.gender,
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