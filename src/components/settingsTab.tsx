import { Switch } from "@/components/ui/switch"
import { Flex, Input, Text } from '@chakra-ui/react'

export default function SettingsTab() {
    return (
        <Flex w={"full"} h={"full"} flexDir={"column"} gap={"2"} color={"white"} pt={"3"} >
            <Flex w={"full"} alignItems={"center"} gap={"3"} px={"4"} pb={"8"} borderBottomWidth={"1px"} borderBottomColor={"#253240"} >
                <Text fontSize={"16px"} fontWeight={"bold"} >Settings</Text>
            </Flex>
            <Flex px={"4"} pt={"2"} flexDir={"column"} gap={"4"} >
                <Text fontSize={"16px"} fontWeight={"medium"} color={"#8B8F97"} >Playback</Text>
                <Flex w={"full"} p={"25px"} gap={"3"} bgColor={"#141B21"} justifyContent={"space-between"} mt={"2"} rounded={"8px"} >
                    <Flex flexDirection={"column"} gap={"1"}  >
                        <Text fontSize={"14px"} fontWeight={"500"} >Auto-sync with host</Text>
                        <Text fontSize={"12px"} color={"#8B8F97"} >Automatically sync your video with the host's playback</Text>
                    </Flex>
                    <Flex w={"fit-content"} >
                        <Switch size={"lg"} />
                    </Flex>
                </Flex>
                <Flex w={"full"} p={"25px"} gap={"3"} bgColor={"#141B21"} alignItems={"center"} justifyContent={"space-between"} mt={"2"} rounded={"8px"} >
                    <Flex flexDirection={"column"} gap={"1"}  >
                        <Text fontSize={"14px"} fontWeight={"500"} >Sync Threshold</Text>
                        <Text fontSize={"12px"} color={"#8B8F97"} >Maximum time difference before auto-sync (in seconds)</Text>
                    </Flex>
                    <Flex pos={"relative"} w={"120px"} h={"35px"} >
                        <Input value={"1.5"} px={"3"} fontSize={"14px"} h={"35px"} bgColor={"#1D242F"} />
                        <Flex h={"35px"} pos={"absolute"} right={"0px"} pr={"4"} justifyItems={"center"} alignItems={"center"} >
                            <Text fontSize={"12px"} color={"#8B8F97"} >sec</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex px={"4"} pt={"2"} flexDir={"column"} gap={"4"} mt={"6"} >
                <Text fontSize={"16px"} fontWeight={"medium"} color={"#8B8F97"} >Notifications</Text>
                <Flex w={"full"} p={"25px"} gap={"3"} bgColor={"#141B21"} mt={"2"} justifyContent={"space-between"} rounded={"8px"} >
                    <Flex flexDirection={"column"} gap={"1"}  >
                        <Text fontSize={"14px"} fontWeight={"500"} >Enable notifications</Text>
                        <Text fontSize={"12px"} color={"#8B8F97"} >Get notified when users join or leave the party</Text>
                    </Flex>
                    <Flex w={"fit-content"} >
                        <Switch size={"lg"} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
