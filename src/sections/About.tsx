import { RiUser3Line } from "react-icons/ri";
import { MdOutlineFormatQuote } from "react-icons/md";
import { motion } from "motion/react";

export default function About() {
    return (
        <div id="about" className="w-full flex flex-col">
            <div id="about-section" className="w-full flex flex-col items-center text-center justify-center gap-y-10">
                <div id="header-art-wrapper" className="flex flex-row items-center w-full max-w-[700px]">
                    <span className="text-green-500 text-5xl font-semibold text-left z-10">Meet Thomas:</span>
                    < RiUser3Line className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
                </div>
                <motion.span
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-xl md:text-2xl md:text-left max-w-[700px]">
                    With over <b>10 years of experience</b> programming, developing, and building, Thomas Walsh
                    has the <b>modern-day skillset</b> to take <b>maximize</b> the capabilities of your code while <b>minimizing</b> resources to reach any deadline.
                </motion.span>

                <motion.span initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-xl md:text-2xl md:text-left max-w-[700px]">
                    A member of the <b>UMass Amherst</b> Manning College of Information and Computer Sciences class of <b>2027</b>, on the Computer Science (BS) track, Thomas has taken many professionally-applicable courses like <b>Web Development, Operating Systems, Advanced Algorithms, and DevOps.</b>
                </motion.span>

                <motion.span
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", }}
                    viewport={{ once: true, amount: 0.2 }} className="text-xl md:text-2xl md:text-left max-w-[700px]">
                    Outside of the classroom, Thomas has taken professional courses, earning a certificate for <b>IBM Full Stack Development</b> in the Fall of 2024. Additionally, he can be found participating in community projects, like hackathons such as <b>HackUMass</b> or labs such as the <b>Initiative for Digital Public Infrastructure.</b>
                </motion.span>

                <motion.span
                    initial={{ x: 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", }}
                    viewport={{ once: true, amount: 0.2 }} className="text-xl md:text-2xl md:text-left max-w-[700px]">
                    Thomas' drive for developing and building stems from fostering a sense of <b>community</b> among developers, architects, executives, and clients.
                </motion.span>
                <motion.div id="quote-section" className="w-full flex flex-col max-w-[800px]">
                    <span id="quotation-from-me" className="text-xl text-green-500 font-bold italic md:text-2xl max-w-[800px]">
                        "I strongly believe that community in the development circle is key to business success. Love, respect, and understanding among team members allows everyone to build comfortably, successfully, and efficiently to meet the needs of a client. Moreover, I feel like a tightly-knit team learns from one another and builds on their own skills while meeting development goals."
                    </span>
                    <span className="text-xl font-bold md:text-2xl">— Thomas Walsh</span>
                    <MdOutlineFormatQuote className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
                </motion.div>


            </div>
            {/* <div id="image-wrapper">
                            <img src={MyPicture} />
                        </div> */}
        </div>
    )
}