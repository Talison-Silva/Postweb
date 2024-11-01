import BiographyInput from "@/UI/components/form/sign-up/biography";

const range = (max) => {
    var Ilist=[];

    for(var I=0;I<max;++I){
        Ilist.push(I)
    }

    return Ilist;
}

export default () => {    
    return(
        <div className="w-[600px] h-[416px] flex flex-col .justify-center items-center gap-2 p-6">
            <h1 className="font-RobotoMono text-[24px] text-white">Describe yourself</h1>
            <p className="font-RobotoMono text-[14px] text-white opacity-70">This won't be public</p>

            <BiographyInput/>
        </div>
    )
}