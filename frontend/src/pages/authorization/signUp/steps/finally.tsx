import InputUsername from "@/UI/components/form/sign-up/input-normal";
import InputPassword from "@/UI/components/form/sign-up/input-normal";
import ProfilePicture from "@/UI/components/form/sign-up/profile-picture";

export default () => {    
    return(
        <div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">
            {/*<h1 className="font-RobotoMono text-[24px] text-white">last steping</h1>*/}
            <div className="mt-10 flex flex-col justify-center items-center gap-5">
            	{/*<div className="w-32 h-32 rounded-full bg-white"/>*/}
                <ProfilePicture/>
            	<InputUsername name="username" type="text" specific={{width:'300px',height:'42px',textAlign:'center'}}/>
            	<InputPassword name="password" type="password" specific={{width:'300px',height:'42px',textAlign:'center'}}/>
            </div>
        </div>
    )
}