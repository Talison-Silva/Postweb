export const identifyRouteCreated=(set:any)=>
{	
	switch(window.location.pathname)
	{
	  case "/posts/create":
	    set({
			name:"back",
			url:"/posts/"
		});
	    break;

	  default:
	    set({
			name:"create",
			url:"/posts/create"
		});
	}
}