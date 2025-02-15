import ChatPanel from "./chatPanel";


export default function mainArea({ activeOption }: { activeOption: string }) {
    return (
        <>
            {activeOption === "talk" && <ChatPanel />}
        </>
    )
}
