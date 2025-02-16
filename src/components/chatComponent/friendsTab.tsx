import { IoIosSearch } from "react-icons/io";

export default function FriendsTab() {
    return (
        <div className=' w-full flex gap-4 flex-col ' >
            <div className=" w-full relative h-[50px] " >
                <input className=" w-full px-4 pl-[40px] h-[50px] bg-[#263340] text-white  border !text-sm border-[#98a2b3] rounded-lg outline-none" placeholder="Search Members..." />
                <div className=" w-[40px] h-[50px] absolute top-0 flex justify-center items-center left-0 " >
                    <IoIosSearch size={"25px"} color="white" />
                </div>
            </div>
            <div className=" text-[#8B8F97] mt-4 flex gap-1 items-center " >
                <p className=" text-sm " >ONLINE</p>
                <div className=" w-[3px] bg-[#8B8F97] h-[3px] rounded-full " />
                <p className=" text-sm " >1</p>
            </div>
            <div className=" text-white w-full flex items-center gap-3 " >
                <div className=" w-[40px] h-[40px] rounded-full bg-amber-600 " />
                <p className=" text-sm " >user name</p>
                <div className=" px-[6px] py-[2px] text-[11px] rounded bg-[#5a20d5] " >
                    Host
                </div>
            </div>
        </div>
    )
}
