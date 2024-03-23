function LoggIn({children}){
    return(
        <>
            <main className="w-full h-screen flex justify-center items-center">
                <section style={{minWidth:'800px',minHeight:'400px'}} className="rounded-2xl bg-[#0b0d0d] border-2 border-solid border-[#141717] flex flex-col justify-between items-center overflow-hidden">
                    {children}
                </section>
            </main>
        </>
    )
}

export default LoggIn;
