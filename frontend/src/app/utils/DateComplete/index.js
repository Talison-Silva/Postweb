export const dateComplete=(date)=>
{
	const complete=(value)=>
	{
		return value<10?`0${value}`:value;
	}

	const old=new Date(date);
	const data=[
		complete(old.getDate()),
		complete(old.getMonth()),
		complete(old.getFullYear()),
	]

	return `${data[0]} ${data[1]} ${data[2]}`;
}