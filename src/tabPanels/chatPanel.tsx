import { useState } from "react"
import { ConversationsTab, FriendsTab } from "../components"

export default function ChatPanel() {

    const [tab, setTab] = useState(false)

    return ( 
        <div className=" w-full h-full flex flex-col gap-4 " >
            <div className=" w-full bg-[#10161C] flex p-[8px] rounded-lg " >
                 <button onClick={()=> setTab(false)} className={` h-[40px] w-full rounded-lg text-white text-sm ${!tab ? "bg-[#27303a]" : "" } `} >Conversations</button>
                 <button onClick={()=> setTab(true)} className={` h-[40px] w-full rounded-lg text-white text-sm ${tab ? "bg-[#27303a]" : "" } `} >Friends</button>
            </div>
            {!tab && (
                <ConversationsTab />
            )}
            {tab && (
                <FriendsTab />
            )}
        </div>
    )
}
