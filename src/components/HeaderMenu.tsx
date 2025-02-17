import { Flex, Text } from "@chakra-ui/react";
import RenderIcon from "../assets/headerIcon";


export default function HeaderMenu({ activeOption, setActiveOption }: { activeOption: string, setActiveOption: (by: string) => void }) {

    return ( 
        <Flex flexDirection={"column"} color={"white"} h={"fit-content"} pt={"4"} gap={"4"} >
            <Text fontSize={"16px"} fontWeight={"bold"} >Nova Watch Party</Text>
            <Flex gap={"4"} mx={"auto"} justifyContent={"space-between"} alignItems={"center"} w={"full"}  >
                {['share', 'talk', 'hub', 'video', 'settings'].map((option) => ( 
                    <Flex key={option}
                        onClick={() => setActiveOption(option)}
                        flexDirection={"column"} alignItems={"center"} pos={"relative"} gap={"2"} >
                        <Flex justifyContent={"center"} alignContent={"center"} w={"50px"} h={"50px"} rounded={"full"} borderWidth={"1px"} bgColor={activeOption === option ? "#5A21D5" : ""} color={activeOption === option ? "white" : "#d1d5db"} borderColor={activeOption === option ? "#5A21D5" : "#98a2b3"} _hover={{ borderColor: "#5A21D5" }} >
                            {RenderIcon(option, activeOption)}
                        </Flex>
                        <Text textTransform={"capitalize"} fontSize={"14px"} color={"white"} >{option}</Text>
                        {option === 'hub' && (
                            <Flex h={"6"} w={"6"} justifyContent={"center"} alignItems={"center"} bgColor={"#5A21D5"} position={"absolute"} top={"-1"} right={"-1"} rounded={"full"} >
                                <Text fontSize={"12px"}  >
                                    1
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
