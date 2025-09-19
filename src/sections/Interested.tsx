import { RiUser3Line } from "react-icons/ri";
import { MdOutlineFormatQuote } from "react-icons/md";

export default function Interested() {
    return (
        <div id="reach" className="w-full flex flex-col">
            <div id="about-section" className="w-full flex flex-col items-center text-center justify-center gap-y-10">
                <div id="header-art-wrapper" className="flex flex-row items-center w-full max-w-[700px]">
                    <span className="text-green-500 text-5xl font-semibold text-left z-10">Interested?</span>
                    < RiUser3Line className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
                </div>
                <span className="text-xl md:text-2xl md:text-left max-w-[700px]">
                    Thomas is currently interested in a <b>wide variety of roles.</b> Whether it be Software Engineering, Development, Front end, Back end, or Database Engineering, <b>Thomas is ready to apply his skills to meet your goals.</b>
                </span>
            </div>
        </div>
    )
}