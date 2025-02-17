import { Button, Flex, Input, Text } from '@chakra-ui/react'

export default function ShareTab() {
    return (
        <Flex w={"full"} h={"full"} flexDir={"column"} gap={"4"} color={"white"} pt={"3"} >
            <Flex w={"full"} flexDir={"column"} gap={"1"} >
                <Text fontSize={"11px"} fontWeight={"medium"} >Invite friends to watch "Black and Blue"</Text>
                <Text fontSize={"9px"} >Share this link with your friends:</Text>
            </Flex>
            <Flex pos={"relative"} h={"50px"} w={"full"} >
                <Input value={"https://connect.getnova.me?n=81086524"} w={"full"} h={"50px"} borderWidth={"1px"} fontSize={"14px"} borderColor={"#98a2b3"} rounded={"lg"} outline={"none"} px={"4"} pr={"73px"} bgColor={"#263340"} color={"white"}/> 
                <Flex pos={"absolute"} bottom={"0px"} h={"50px"} w={"72px"} pr={"4"} justifyContent={"center"} alignItems={"center"} right={"0px"} >
                    <Button bgColor={"#5A21D5"} w={"full"} h={"27px"} fontSize={"9px"} >Copy</Button>
                </Flex>
            </Flex>
            <Text color={"#8A8F98"} fontSize={"12px"} >Note: Your friends need to have Nova installed to join.</Text>
        </Flex>
    )
}
