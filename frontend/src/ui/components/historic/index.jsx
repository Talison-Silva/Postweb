import styled from 'styled-components';
/*

<article 
    className="p-6 h-full flex flex-col justify-between items-center text-white"
    style={{width:"320px"}}
>
    <h1 
        className="
            font-ubuntuMono 
            select-none                        
            text-white 
            uppercase                        
            text-4xl                 
        "
    >cookies</h1>

    <p
        className="
            scroll-hidden
            w-full h-14
            bg-transparent
            border-2 border-[#161a1a] border-solid
            p-3
            overflow-x-auto
            overflow-y-hidden
            outline-none
            rounded-xl
            font-ubuntuMono
        "
    >{cookies['title']}</p>
    <p
        className="
            scroll-hidden
            w-full h-14
            bg-transparent
            border-2 border-[#161a1a] border-solid
            p-3
            overflow-x-auto
            overflow-y-hidden
            outline-none
            rounded-xl
            font-ubuntuMono
        "
    >{cookies['description']}</p>
    <div
        style={{
            width:'270.85px',
            height:'192px',
            whiteSpace: 'wrap',
            wordWrap: 'break-word'
        }}
        className="
            scroll-hidden
            bg-transparent
            border-2 border-[#161a1a] border-solid
            p-3
            overflow-x-hidden
            overflow-y-auto
            outline-none
            rounded-xl
            font-ubuntuMono
        "
    >
        {cookies['content']}
    </div>

    <p 
        className="
            font-ubuntuMono
            select-none
            opacity-40
            text-white                        
            text-xs                        
        "
    >
        estava escrevendo e do nada algo ocorreu?<br/>não se preocupe aqui ficam seus registros
    </p>
</article>

*/

//className="p-6 h-full flex flex-col justify-between items-center text-white" style={{width:"320px"}}

const Container=styled.article`
	width:320px;
	height:100%;
	padding:24px;
	display:flex;
	flex-direction:column;
	justify-content: space-between;
	align-items: center;
	color: white;
`

const Title=styled.h1`
	color:white;
	font-family:'Ubuntu mono',monospace;
	user-select:none;
	text-transform: uppercase;
	font-size:36px;
`

const Legend=styled.p`
	font-family:'Ubuntu mono',monospace;
	user-select:none;
	opacity: 40;
	color: white;
	font-size:10px;
`

/*
scroll-hidden
w-full h-14
bg-transparent
border-2 border-[#161a1a] border-solid
p-3
overflow-x-auto
overflow-y-hidden
outline-none
rounded-xl
font-ubuntuMono
*/
const Text=styled.p`
	width:100%;
	height:56px;
	background-color:transparent;
	border:4px solid #161a1a;
	overflow-x:auto;
	overflow-y:hidden;
	border-radius:20px;
	font-family:'Ubuntu mono',monospace;
	padding: 0 15px 0 15px;
	display:flex;
	white-space: nowrap;
	align-items:center;
`

const Textarea=styled.p`
	width:100%;
	height:196px;
	background-color:transparent;
	border:4px solid #161a1a;
	overflow-x:auto;
	overflow-y:hidden;
	border-radius:20px;
	font-family:'Ubuntu mono',monospace;
	padding: 15px;
	white-space: wrap;
    word-wrap: break-word;
`

/*
[
	{
		name:'',
		type:'x',
		value:[]
	}
]
*/

const Historic=({schema,...props})=>
{
	let fields=[];

	const textarea=(value,index)=>
	{
		fields.push(
			<Textarea key={String(index)}>{value}</Textarea>
		)
	}

	const text=(value,index)=>
	{
		fields.push(
			<Text key={String(index)}>{value}</Text>
		)
	}

	if(schema)
	{
		schema.map((value,index)=>{
			switch(value.type){
				case 'text':
					text(value.value,index);break
				case 'textarea':
					textarea(value.value,index);break
			}
		})
	}	

	return(
		<Container>
		    <Title>historic</Title>
		    {
		    	fields
		    }
		    <Legend>estava escrevendo e do nada algo ocorreu?<br/>não se preocupe aqui ficam seus registros</Legend>
		</Container>
	)
}

export default Historic;