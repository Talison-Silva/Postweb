const IF=({condition,IF,ELSE})=>
{
	if(condition && IF)
	{
		return(IF)
	}
	else if(!condition && ELSE)
	{
		return(ELSE)
	}
}

export default IF;