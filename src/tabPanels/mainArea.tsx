import { HubTab, ShareTab } from "@/components";
import ChatPanel from "./chatPanel";


export default function mainArea({ activeOption }: { activeOption: string }) {
    return (
        <>
            {activeOption === "talk" && <ChatPanel />}
            {activeOption === "hub" && <HubTab />}
            {activeOption === "share" && <ShareTab />}
        </>
    )
}
