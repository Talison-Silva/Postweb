import GenderInput from "@/UI/components/form/sign-up/gender";

export default () => {    
    return(
        <div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">            
            <h1 className="font-RobotoMono text-[24px] text-white">What is your gender?</h1>
            <p className="font-RobotoMono text-[14px] text-white opacity-70">This won't be public</p>

            <div className="mt-5 relative flex w-full h-min gap-2 .bg-blue-500">
                <GenderInput id="gender-male" name="gender" value="male"/>                
            </div>
        </div>
    )
}