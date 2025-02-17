import { CgSmileMouthOpen } from "react-icons/cg";
import { IoSend } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Flex, Input, Text } from "@chakra-ui/react";

export default function ConversationTab() {

    const data = ["sender", "self", "sender", "self", "sender", "self", "sender", "self", "sender", "self"]
    const [value, setValue] = useState("")
    const [open, setOpen] = useState(false)

    return ( 
        <Flex w={"full"} h={"full"} flexDir={"column"} gap={"2"} color={"white"} >
            <Flex w={"full"} h={"full"} flexDir={"column"} gap={"2"} pos={"relative"} >
                <Flex w={"full"} flexDir={"column"} overflowY={"auto"} pos={"absolute"} top={"0px"} bottom={"0px"} px={"2"} >
                    <Flex h={"fit-content"} flexDir={"column"} w={"full"} py={"3"} gap={"3"} >
                        {data?.map((item, index) => {
                            if (item === "sender") {
                                return ( 
                                    <Flex key={index} minW={"20%"} maxW={"70%"} w={"fit-content"} flexDirection={"column"} gap={"1"} >
                                        <Text fontSize={"12px"} fontWeight={"bold"} textAlign={"right"} mr={"1"} >user1</Text>
                                        <Flex w={"full"} gap={"2"} >
                                            <Flex w={"fit-content"} >
                                                <Flex w={"40px"} h={"40px"} bgColor={"red.600"} rounded={"full"} />
                                            </Flex>
                                            <Flex w={"full"} py={"10px"} px={"4"} h={"fit-content"} rounded={"12px"} bgColor={"#263340"} roundedBottomLeft={"4px"} >
                                                <Text fontSize={"14px"} >text</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                )
                            } else {
                                return ( 
                                    <Flex key={index} minW={"20%"} maxW={"70%"} w={"fit-content"} flexDirection={"column"} gap={"1"} ml={"auto"} >
                                        <Text fontSize={"12px"} fontWeight={"bold"} textAlign={"left"} mr={"1"} >user1</Text>
                                        <Flex w={"full"} flexDir={"row-reverse"} gap={"2"} >
                                            <Flex w={"fit-content"} >
                                                <Flex w={"40px"} h={"40px"} bgColor={"red.600"} rounded={"full"} />
                                            </Flex>
                                            <Flex w={"full"} py={"10px"} px={"4"} h={"fit-content"} rounded={"12px"} bgColor={"#5A21D5"} roundedBottomRight={"4px"} >
                                                <Text fontSize={"14px"} >text text</Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                )
                            }
                        })}
                    </Flex>
                </Flex>
            </Flex> 
            <Flex w={"full"} h={"fit-content"} alignItems={"center"} gap={"3"} >
                <Flex pos={"relative"} h={"50px"} w={"full"} >
                    <Input value={value} onChange={(e) => setValue(e.target.value)} w={"full"} h={"50px"} borderWidth={"1px"} fontSize={"14px"} borderColor={"#98a2b3"} rounded={"lg"} outline={"none"} px={"4"} pr={"53px"} bgColor={"#263340"} color={"white"} placeholder="Send A Message" />
                    <Flex as={"button"} onClick={() => setOpen((prev) => !prev)} w={"50px"} h={"50px"} justifyContent={"center"} alignItems={"center"} position={"absolute"} right={"0px"} top={"0px"} >
                        {open ? (
                            <IoIosClose size={"30px"} />
                        ) : (
                            <CgSmileMouthOpen size={"30px"} />
                        )}
                    </Flex>
                    {open && (
                        <Flex pos={"absolute"} bottom={"52px"} right={"0px"} >
                            <EmojiPicker width={"300px"} onEmojiClick={(e) => setValue(prev => prev + e.emoji)} />
                        </Flex>
                    )}
                </Flex>
                {/* <div role="button" >
                    <IoSend size={"20px"} />
                </div> */}
            </Flex>
        </Flex>
    )
}
