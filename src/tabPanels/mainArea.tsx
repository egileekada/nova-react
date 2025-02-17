import { HubTab, SettingsTab, ShareTab, VideoTab } from "@/components";
import ChatPanel from "./chatPanel";
import { Flex } from "@chakra-ui/react";


export default function mainArea({ activeOption }: { activeOption: string }) {
    return (
        <Flex  h={"full"} w={"full"} pt={"4"} >
            {activeOption === "talk" && <ChatPanel />}
            {activeOption === "hub" && <HubTab />}
            {activeOption === "share" && <ShareTab />}
            {activeOption === "video" && <VideoTab />}
            {activeOption === "settings" && <SettingsTab />}
        </Flex>
    )
}
