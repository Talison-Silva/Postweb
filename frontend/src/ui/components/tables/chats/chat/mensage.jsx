function mensage(){
    return(
        <form className="absolute bottom-0 left-0 w-full h-16 px-5">
            <div className="w-full h-full px-7 rounded-3xl bg-[#101212] flex items-center">

                <textarea className="w-full h-8 resize-none font-ubuntu text-2xl text-white outline-none bg-transparent" name="mensage">
                </textarea>

                <div className="flex items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default mensage;