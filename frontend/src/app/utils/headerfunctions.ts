export const identifyRouteCreated=()=>
{
	switch(window.location.pathname)
	{
	  case "/postagens/c":
	    return([true,"voltar","/postagens/"])
	    break
	  default:
	    return([false,"created","/postagens/c"])          
	}
}