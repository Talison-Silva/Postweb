function LoggIn({children}){
    return(
        <>
            <main className="w-full h-screen flex justify-center items-center">
                <section style={{minWidth:'800px',minHeight:'400px',display:'flex',justifyContent:"center",alignItems:"center"}} className="rounded-2xl bg-[#0b0d0d] border-2 border-solid border-[#141717] overflow-hidden">
                    {children}
                </section>
            </main>
        </>
    )
}

export default LoggIn;
