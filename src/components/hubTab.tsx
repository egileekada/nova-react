import { IoMicSharp, IoPerson } from "react-icons/io5";
import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { textLimit } from "@/utils/textlimit";


export default function HubTab() {
    return (
        <Flex w={"full"} h={"full"} flexDir={"column"} gap={"2"} color={"white"} pt={"3"} >
            <Flex w={"full"} alignItems={"center"} gap={"3"} px={"4"} pb={"5"} borderBottomWidth={"1px"} borderBottomColor={"#253240"} >
                <Flex px={"2"} h={"19px"} rounded={"xl"} bgColor={"#ff4444"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontSize={"12px"} fontWeight={"600"} >LIVE</Text>
                </Flex>
                <Text fontSize={"16px"} >{textLimit("Blood of ZeusE1A Call to Arms Discussion", 25)}</Text>
                <Flex ml={"auto"} alignItems={"center"} gap={"2"} >
                    <IoPerson size={"16px"} color="#8B8F97" />
                    <Text fontSize={"12px"} color={"#8B8F97"}  >12</Text>
                </Flex>
            </Flex>
            <Flex w={"full"} h={"full"} flexDir={"column"} gap={"2"} pos={"relative"} >
                <Flex w={"full"} flexDir={"column"} overflowY={"auto"} pos={"absolute"} top={"0px"} bottom={"0px"} >
                    <Flex h={"fit-content"} flexDir={"column"} w={"full"} pt={"4"} gap={"6"} >
                        <Flex w={"full"} px={"4"} flexDir={"column"} gap={"4"} >
                            <Text fontSize={"12px"} fontWeight={"500"} color={"#8a8f98"} >SPEAKERS</Text>
                            <Grid w={"full"} templateColumns="repeat(2, 1fr)" >
                                <Flex flexDir={"column"} gap={"6px"} w={"full"} alignItems={"center"} >
                                    <Flex w={"65px"} h={"65px"} rounded={"full"} bgColor={"green"} borderWidth={"2px"} borderColor={"#5A21D5"} />
                                    <Flex flexDir={"column"} >
                                        <Text textAlign={"center"} fontSize={"14px"} >Sarah Parker</Text>
                                        <Text textAlign={"center"} fontSize={"12px"} color={"#5A21D5"} >Speaking</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDir={"column"} gap={"6px"} w={"full"} alignItems={"center"}  >
                                    <Flex w={"65px"} h={"65px"} rounded={"full"} bgColor={"green"} borderWidth={"1px"} borderColor={"#5A21D5"} />
                                    <Flex flexDir={"column"} gap={"1"} >
                                        <Text textAlign={"center"} fontSize={"14px"} >Peter Parker</Text>
                                    </Flex>
                                </Flex>
                            </Grid>
                        </Flex>
                        <Flex w={"full"} px={"4"} flexDir={"column"} gap={"4"} mt={"0px"} >
                            <Text fontSize={"12px"} fontWeight={"500"} color={"#8a8f98"} >LISTENING</Text>
                            <Grid w={"full"} templateColumns="repeat(2, 1fr)" >
                                <Flex flexDir={"column"} gap={"6px"} w={"full"} alignItems={"center"} >
                                    <Flex w={"65px"} h={"65px"} rounded={"full"} bgColor={"green"} borderWidth={"1px"} borderColor={"#5A21D5"} />
                                    <Flex flexDir={"column"} gap={"1"} >
                                        <Text textAlign={"center"} fontSize={"14px"} >Sarah Parker</Text>
                                    </Flex>
                                </Flex>
                                <Flex flexDir={"column"} gap={"6px"} w={"full"} alignItems={"center"}  >
                                    <Flex w={"65px"} h={"65px"} rounded={"full"} bgColor={"green"} borderWidth={"1px"} borderColor={"#5A21D5"} />
                                    <Flex flexDir={"column"} gap={"1"} >
                                        <Text textAlign={"center"} fontSize={"14px"} >Peter Parker</Text>
                                    </Flex>
                                </Flex>
                            </Grid>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w={"full"} h={"fit-content"} gap={"3"} pt={"6"} borderTopWidth={"1px"} px={"4"} borderTopColor={"#253240"} >
                <Button h={"44px"} w={"50%"} fontWeight={"600"} rounded={"8px"} bgColor={"#253240"} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#ffffff" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"></path>
                        <path fill="#ffffff" d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"></path>
                    </svg>
                    <Text fontSize={"14px"} fontWeight={"medium"} >Mute</Text>
                </Button>
                <Button h={"44px"} w={"50%"} fontWeight={"600"} rounded={"8px"} bgColor={"#F84344"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                    <Text fontSize={"14px"} fontWeight={"medium"} >Leave</Text>
                </Button>
            </Flex>
        </Flex>
    )
}
