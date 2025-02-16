import { useState } from "react";
import { HeaderMenu } from "../components";
import { MainArea } from "../tabPanels";


export default function SideBar() { 

    const [activeOption, setActiveOption] = useState<string>('talk');

    return (
        <div className=" max-w-[400px] h-screen bg-[#0a1018] w-full flex flex-col p-5 gap-4 " >
            <HeaderMenu activeOption={activeOption} setActiveOption={setActiveOption} />
            <MainArea activeOption={activeOption} />
        </div>
    )
}
