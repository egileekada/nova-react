import { useState } from "react";
import { HeaderMenu } from "../components";
import { MainArea } from "../tabPanels";
import { Flex } from "@chakra-ui/react";


export default function SideBar() {

    const [activeOption, setActiveOption] = useState<string>('talk');

    return ( 
        <Flex maxW={"full"} h={"100vh"} bgColor={"#0a1018"} w={"full"} flexDir={"column"} p={"5"} gap={"5"} >
            <HeaderMenu activeOption={activeOption} setActiveOption={setActiveOption} />
            <MainArea activeOption={activeOption} />
        </Flex>
    )
}
