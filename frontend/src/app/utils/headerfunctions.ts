export const identifyRouteCreated=()=>
{
	switch(window.location.pathname)
	{
	  case "/posts/create":
	    return([true,"voltar","/posts/"])
	    break
	  default:
	    return([false,"created","/posts/create"])          
	}
}