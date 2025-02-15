

export default function ConversationTab() {

    const data = ["sender", "self", "sender", "self", "sender", "self", "sender", "self", "sender", "self"]

    return (
        <div className=" w-full h-full flex flex-col gap-2 text-white " >
            <div className=" w-full flex flex-col h-full relative "  >
                <div className=" flex flex-col overflow-y-auto absolute top-0 w-full bottom-0 px-2 " >
                    <div className=" h-fit flex flex-col w-full gap-3 " >
                        {data?.map((item, index) => {
                            if (item === "sender") {
                                return (
                                    <div key={index} className=" flex max-w-[70%] w-fit flex-col  " >
                                        <p className=" !text-sm font-bold text-right mr-2 " >user1</p>
                                        <div className=" flex w-full gap-2 " >
                                            <div className=" w-fit " >
                                                <div className=" w-[40px] h-[40px] rounded-full bg-blue-700 " />
                                            </div>
                                            <div className=" w-full py-[10px] px-3 h-fit rounded-[18px] bg-[#263340] rounded-bl-[4px] " >
                                                <p className=" !text-sm " >text</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className=" flex max-w-[70%] w-fit flex-col ml-auto  " >
                                        <p className=" !text-sm font-bold text-left ml-2 " >user1</p>
                                        <div className=" flex w-full flex-row-reverse gap-2 " >
                                            <div className=" w-fit " >
                                                <div className=" w-[40px] h-[40px] rounded-full bg-blue-700 " />
                                            </div>
                                            <div className=" w-full py-[10px] px-3 h-fit rounded-[18px] bg-[#5A21D5] rounded-bl-[4px] " >
                                                <p className=" !text-sm " >text</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className=" w-full h-fit " >
                <input className=" w-full h-[56px] border !text-sm border-[#98a2b3] rounded-xl outline-none px-3 bg-[#263340] text-white " placeholder="Send A Message" />
            </div>
        </div>
    )
}
