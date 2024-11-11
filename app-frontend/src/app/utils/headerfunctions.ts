export const identifyRouteCreated=(set:any)=>
{	
	switch(window.location.pathname)
	{
	  case "/postweb/posts/create":
	    set({
			name:"back",
			url:"/postweb/posts/"
		});
	    break;

	  default:
	    set({
			name:"create",
			url:"/postweb/posts/create"
		});
	}
}