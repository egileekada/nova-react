import RenderIcon from "../assets/headerIcon";


export default function HeaderMenu({activeOption, setActiveOption} : { activeOption: string, setActiveOption: (by: string)=> void }) {

    return (
        <div className=' w-full flex flex-col h-fit gap-4 pt-4 ' >
            <h2 className=' font-bold text-white ' >Nova Watch Party</h2>
            <div className="flex w-full gap-4 mx-auto justify-between items-center">
                {['share', 'talk', 'hub', 'video', 'settings'].map((option) => (
                    <button
                        key={option}
                        onClick={() => setActiveOption(option)}
                        className=" flex flex-col items-center relative gap-2 ">
                        <div className={`flex items-center justify-center rounded-full border w-[50px] h-[50px] transition-colors
                            ${activeOption === option
                                ? 'bg-purple-600 text-white border-purple-600  '
                                : 'hover:border-purple-600 text-gray-300 border-[#98a2b3] border-opacity-30 '}`}
                        >
                            {RenderIcon(option)}
                        </div>
                        <span className="capitalize text-sm text-white ">{option}</span>
                        {option === 'hub' && (
                            <span className=" bg-purple-600 text-white text-xs w-5 h-5 flex justify-center items-center absolute -top-1 -right-1 rounded-full">
                                1
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}
