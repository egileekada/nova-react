import { Flex, Input, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export default function FriendsTab() {
    return ( 
        <Flex w={"full"} gap={"4"} flexDir={"column"} color={"white"} >
            <Flex w={"full"} pos={"relative"} h={"50px"} >
                <Input w={"full"} px={"4"} pl={"40px"} h={"50px"} bgColor={"#263340"} color={"white"} borderWidth={"1px"} fontSize={"14px"} borderColor={"#98a2b3"} rounded={"lg"} outline={"none"} placeholder="Search Members..." />
                <Flex w={"40px"} h={"50px"} pos={"absolute"} top={"0px"} justifyContent={"center"} alignItems={"center"} left={"0"} >
                    {/* <IoIosSearch size={"25px"} color="white" /> */}
                    <RiSearchLine size={"25px"} color="white" />
                </Flex>
            </Flex>
            <Flex color={"#8B8F97"} mt={"4"} gap={"1"} alignItems={"center"} >
                <Text fontSize={"14px"} >ONLINE</Text>
                <Flex w={"3px"} h={"3px"} rounded={"full"} bgColor={"#8B8F97"} />
                <Text fontSize={"14px"} >1</Text>
            </Flex>
            <Flex w={"full"} alignItems={"center"} gap={"3"} color={"white"} >
                <Flex w={"40px"} h={"40px"} rounded={"full"} bgColor={"blue.300"} />
                <Text fontSize={"14px"} >User Name</Text>
                <Flex px={"6px"} py={"2px"} roundedEnd={"4px"} bgColor={"#5a20d5"} >
                    <Text fontSize={"11px"}>Host</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
