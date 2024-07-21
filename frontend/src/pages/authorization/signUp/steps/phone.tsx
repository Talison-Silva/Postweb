import InputPhone from "@/UI/components/form/sign-up/input-normal";

export default () => {	
    return(
        <div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">
            <h1 className="font-RobotoMono text-[24px] text-white">what your phone?</h1>
            <p className="font-RobotoMono text-[14px] text-white opacity-70">This won't be public</p>            
            <InputPhone type="tel" name="phone" defaultCountry="NO"/>
        </div>
    )
}