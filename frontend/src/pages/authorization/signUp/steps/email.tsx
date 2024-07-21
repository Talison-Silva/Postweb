import InputNormal from "@/UI/components/form/sign-up/input-normal";

export default () => {        
    return(
        <div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">
            <h1 className="font-RobotoMono text-[24px] text-white">Enter a usable email</h1>
            <p className="font-RobotoMono text-[14px] text-white opacity-70">This won't be public</p>
            
            <InputNormal type="email" name="email"/>
        </div>
    )
}