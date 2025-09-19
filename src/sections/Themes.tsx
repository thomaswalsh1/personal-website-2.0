import { FaRegHandshake } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLightbulbOutline } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { motion } from "motion/react";

export default function Themes() {
    return (
        <div id="themes-wrapper" className="w-full flex flex-col mt-10">
            <div id="themes-section" className="w-full flex flex-col items-center text-center justify-center gap-y-10">
                <div id="themes-art-wrapper" className="w-full flex flex-row items-center max-w-[700px]">
                    <motion.span
                        // initial={{ x: 40, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-green-500 text-5xl font-semibold text-left z-10">Mission & Values</motion.span>
                    < FaRegHandshake className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
                </div>
                <div id="themes-list" className="flex flex-col w-full items-center md:grid md:grid-cols-2 md:mt-20 md:gap-x-4 gap-y-4">
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center">
                        <GoDatabase className="w-32 h-32 opacity-32" />
                        <span className="text-green-500 text-3xl font-semibold">
                            Efficiency
                        </span>
                        <span className="text-xl">
                            Efficiency is everything when it comes to supporting your business. Through modular program design and guidelines for deployment, Thomas Walsh takes on errors before they happen, saving your business time and allowing for simple, cooperative development.
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center">
                        <GiThreeFriends className="w-32 h-32 opacity-32" />
                        <span className="text-green-500 text-3xl font-semibold">
                            Teamwork
                        </span>
                        <span className="text-xl">
                            Teamwork and cooperative team culture allows teams to reach goals and complete tasks in a consistent manner to meet and exceed client expectations. Thomas Walsh uses his DevOps experience to integrate a system of scrubbing down with teammates after reaching well-defined milestones.
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center">
                        <MdLightbulbOutline className="w-32 h-32 opacity-32" />
                        <span className="text-green-500 text-3xl font-semibold">
                            Comprehensibility
                        </span>
                        <span className="text-xl">
                            Ditch the complex jargon. With Thomas Walsh, comprehensibility always comes first. Communicating in a way people of all different professions can understand boosts teamwork and eliminates misunderstandings between clients, professionals, shareholders, and other invaluable team members.
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center">
                        <AiOutlineClockCircle className="w-32 h-32 opacity-32" />
                        <span className="text-green-500 text-3xl font-semibold">
                            Timeliness
                        </span>
                        <span className="text-xl">
                            Meet deadline goals with ease and efficiency. Thomas Walsh’s time-based approach sets mini-goals and micro-milestones with teammates to meet deadlines with an optimal workflow. With this approach, deadlines and timeframes can be acknowledged without sacrificing effectiveness.
                        </span>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}