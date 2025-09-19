import { motion } from "motion/react";
// import MyPicture from "../assets/me.jpg"
import { LuMessageCircleQuestion } from "react-icons/lu";
// import { tsParticles } from "@tsparticles/engine";

export default function Home() {
    return (

        <div id="home-wrapper" className="w-full  flex flex-col mb-24">
            <div id="heading-section" className="w-full flex flex-col items-center text-center justify-center gap-y-10">

                <div id="header-art-wrapper" className="flex flex-col items-center w-full">
                    <motion.div
                        className="ml-48"
                        initial={{
                            // color: "#FFFFFF",
                            // filter: "hue-rotate(0deg)"
                            scale: 0
                        }}
                        animate={{
                            // color: "#00AC7E",
                            // filter: "hue-rotate(360deg)"
                            scale: 1
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: 0.5,
                            repeat: 0,
                        }}
                    >
                        <LuMessageCircleQuestion className="mt-18 w-32 h-32 opacity-70 z-5" />
                    </motion.div>
                    <motion.div className="w-full max-w-[700px] flex"
                        initial={{ x: 40, opacity: 0, zIndex: 10 }}
                        animate={{ x: 0, opacity: 1, zIndex: 10 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                        <span className="text-green-500 text-5xl md:text-7xl font-semibold text-left z-10">Looking for an <motion.span
                            initial={{ backgroundPosition: "200% 50%" }}
                            animate={{ backgroundPosition: "0% 50%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                            className="bg-gradient-to-r from-green-500 via-white to-green-500 
             bg-[length:200%_100%] bg-clip-text text-transparent italic
             "
                        >Experienced</motion.span> Developer?</span>
                    </motion.div>

                </div>
                <motion.span
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                    className="text-xl md:text-2xl text-center md:text-left max-w-[700px]">
                    Thomas Walsh has the skills needed to take your development process to the next level. With unbeatable experience
                    in <b>back-end</b> and <b>front-end</b> development, Thomas Walsh uses innovative solutions to maximize the efficiency of your codebase.
                </motion.span>
            </div>
            {/* <div id="image-wrapper">
                <img src={MyPicture} />
            </div> */}
        </div>
    )

}