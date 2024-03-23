const Loading=(props)=>{
	return(
		<section style={{width:'50px',height:'50px'}} className="absolute top-auto left-auto" >
			<div style={{width:'50px',height:'50px'}} className='relative flex justify-center animate-spin'>
			<div className='w-5 h-5 rounded-full bg-white'/>
				<div className='absolute bottom-0 left-0 w-3 h-3 rounded-full bg-white'/>
				<div className='absolute bottom-0 right-0 w-2 h-2 rounded-full bg-white'/>
			</div>
		</section>
	);
}

export default Loading;