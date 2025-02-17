import { Flex, Text } from '@chakra-ui/react'
import { IoPerson } from 'react-icons/io5'
import { textLimit } from '../utils/textlimit'
import { useState } from 'react'


export default function VideoTab() {

    const [video, setVideo] = useState(false)
    const [audio, setAudio] = useState(false)

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
            <Flex w={"full"} pt={"4"} pb={"6"} borderBottomWidth={"1px"} borderBottomColor={"#253240"} px={"8"} >
                <Flex w={"full"} pos={"relative"} rounded={"8px"} h={"60vh"} bgColor={"#11161B"} justifyContent={"center"} alignItems={"center"} >
                    <Flex w={"80px"} h={"80px"} bgColor={"blue.500"} rounded={"full"} />
                    {!audio && (
                        <Flex pos={"absolute"} top={"4"} right={"4"} alignItems={"center"} borderWidth={"1px"} h={"22px"} px={"8px"} borderColor={"#363839"} rounded={"4px"} gap={"1"} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16">
                                <path fill="currentColor" d="M13.4 3.4l-.8-.8L8 7.3V3c0-.4-.5-.7-.9-.3L4.8 5H2c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h2.8l2.3 2.3c.4.4.9.1.9-.3V9.7l4.6 4.6.8-.8-7-7 7-7z"></path>
                            </svg>
                            <Text fontSize={"12px"} >Muted</Text>
                        </Flex>
                    )}
                    <Flex p={"12px"} bgColor={"#0C1219"} rounded={"6px"} pos={"absolute"} insetX={"4"} bottom={"4"} >
                        <Text fontWeight={"medium"} fontSize={"13px"} >Sleeping Goat</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justifyContent={"center"} gap={"4"} pt={"8"} alignItems={"center"}  >
                <Flex gap={"4"} >
                    <Flex as={"button"} onClick={() => setVideo((prev) => !prev)} w={"36px"} h={"39px"} justifyContent={"center"} alignItems={"center"} bgColor={!video ? "#3C1C23" : "#133428"} rounded={"4px"} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill={!video ? "#F84B4B" : "#35C55D"} d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"></path>
                        </svg>
                    </Flex>
                    <Flex as={"button"} onClick={() => setAudio((prev) => !prev)} w={"36px"} h={"39px"} justifyContent={"center"} alignItems={"center"} bgColor={!audio ? "#3C1C23" : "#133428"} rounded={"4px"} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill={!audio ? "#F84B4B" : "#35C55D"} d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"></path>
                        </svg>
                    </Flex>
                </Flex>
                <Flex pl={"4"} h={"fit"} borderLeftWidth={"1px"} borderLeftColor={"#3C4047"}  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#8B8F97" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.63-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
                    </svg>
                </Flex>
            </Flex>
        </Flex>
    )
}
