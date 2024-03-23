import Contacts from "@/components/tables/chats/contacts";
import Chat from "@/components/tables/chats/chat";
import Comunity from "@/components/tables/chats/comunity";

function Feed(){
    return(
        <main style={{
            display:'grid',
            gridTemplateColumns:'25% 4% 71%'
        }} className="w-full h-full sbg-[#090a0a] pb-5">
            <Contacts/>
            <Comunity/>
            <div className="relative w-full h-full">
                <Chat/>
            </div>
        </main>
    )
}

export default Feed;