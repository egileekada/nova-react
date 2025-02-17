import { useState } from "react"
import { ConversationsTab, FriendsTab } from "../components"
import { Button, Flex } from "@chakra-ui/react"

export default function ChatPanel() {

    const [tab, setTab] = useState(false)

    return ( 
        <Flex w={"full"} h={"full"} flexDir={"column"} gap={"4"} px={"3"} pt={"3"} >
            <Flex w={"full"} bgColor={"#10161C"} p={"8px"} rounded={"lg"}>
                <Button onClick={() => setTab(false)} h={"40px"} w={"50%"} rounded={"lg"} color={"white"} fontSize={"14px"} bgColor={!tab ? "#27303a" : "#10161C"} outline={"none"} >Conversations</Button>
                <Button onClick={() => setTab(true)} h={"40px"} w={"50%"} rounded={"lg"} color={"white"} fontSize={"14px"} bgColor={tab ? "#27303a" : "#10161C"} outline={"none"} >Friends</Button>
            </Flex>
            {!tab && (
                <ConversationsTab />
            )}
            {tab && (
                <FriendsTab />
            )}
        </Flex>
    )
}
