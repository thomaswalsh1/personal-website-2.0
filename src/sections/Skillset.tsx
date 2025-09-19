import { GoDatabase } from "react-icons/go";
import { IoBuildOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
// import { TbSitemap } from "react-icons/tb";
import { CiCloudOn } from "react-icons/ci";
import { motion } from "motion/react";

export default function Skillset() {
    return (
        <div id="skills" className="w-full flex flex-col">
            <div id="skills-section" className="w-full flex flex-col items-center text-center justify-center gap-y-10">
                <div id="skills-art-wrapper" className="flex flex-row items-center w-full max-w-[700px]">
                    <motion.span
                        // initial={{ x: 40, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-green-500 text-5xl font-semibold text-left z-10 ">Skills</motion.span>
                    < IoBuildOutline className="absolute right-4 w-32 h-32 lg:hidden lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
                </div>
                <div id="skill-list" className="flex flex-col w-full items-center gap-y-4 max-w-[700px]">
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center">
                        <GoDatabase className="w-32 h-32 opacity-32" />
                        <span className="text-green-500 text-3xl font-semibold">
                            Backend Brilliance
                        </span>
                        <span className="text-xl">
                            With strong experience in database systems like <b>MongoDB, Supabase, Prisma, and Postgres, </b>Thomas Walsh knows what makes a speedy backend so special. With routing systems like <b>Next.js, Express.js, and Sveltekit, </b> Thomas Walsh has experience building easy-to-use backend APIs to be easily implemented in the frontend.
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center">
                        <IoStorefrontOutline className="w-32 h-32 opacity-32" />
                        <span className="text-green-500 text-3xl font-semibold">
                            Fluid Frontend
                        </span>
                        <span className="text-xl">
                            No stranger to frontend development, Thomas Walsh knows how to implement any figma design with speed and efficiency without clogging the browser. Using tools such as <b>Vite, React, Sveltekit, Tailwind, </b> and a plethora of component libraries, Thomas Walsh can bring your HTML and CSS to a whole new level.
                        </span>
                    </motion.div>
                    <motion.div 
                    initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center">
                        <CiCloudOn className="w-32 h-32 opacity-32" />
                        <span className="text-green-500 text-3xl font-semibold">
                            Competitive Cloud
                        </span>
                        <span className="text-xl">
                            Thomas Walsh breaks through the complexity barrier of cloud systems for hosting and optimization. With experience in <b>Google Cloud, AWS, Cloudflare, and Vercel,</b> these services and their menus can be navigated and troubleshooted with ease and efficiency.
                        </span>
                    </motion.div>

                </div>
            </div>

        </div>)
}