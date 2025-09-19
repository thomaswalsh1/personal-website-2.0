import { motion } from "motion/react";
import { LuBriefcaseBusiness } from "react-icons/lu";

export default function Experience() {

    return (
        <div id="experience" className="w-full flex flex-col">
            <div id="experience-section" className="w-full flex flex-col items-center text-center justify-center gap-y-10">
                <div id="experience-art-wrapper" className="flex flex-row items-center w-full max-w-[700px]">
                    <motion.span
                        // initial={{ x: 40, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-green-500 text-5xl font-semibold text-left z-10">Experience</motion.span>
                    <LuBriefcaseBusiness className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
                </div>
                <div id="resume-wrapper" className="w-full text-lg h-auto flex flex-col gap-y-5 max-w-[700px]">
                    <div id="resume--list" className="w-full border border-white">
                        <div className="w-full flex p-[5px] text-left flex-col">
                            <span className="font-semibold">
                                Software Development Intern
                            </span>
                            <span>
                                Vierra Staffing
                            </span>
                            <span className="italic">
                                June 2025 - Present
                            </span>
                            <div className="w-full">
                                <ul className="list-disc list-inside">
                                    <li>
                                        Translated Figma design prototypes into responsive, production-ready code using modern front-end technologies.
                                    </li>
                                    <li>
                                        Collaborated with cross-functional teammates to align design specifications with development requirements.
                                    </li>
                                    <li>
                                        Participated in code reviews and team discussions to improve workflow and maintain code quality.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border border-white">
                        <div className="w-full flex p-[5px] text-left flex-col">
                            <span className="font-semibold">
                                Software Developer @ Freq
                            </span>
                            <span>
                                UMass Amherst CICS lab for Digital Public Infrastructure
                            </span>
                            <span className="italic">
                                Spring 2025
                            </span>
                            <div className="w-full">
                                <ul className="list-disc list-inside">
                                    <li>
                                        Contributed to the development of Freq.Social, a music-sharing social media platform, as part of UMass Amherst’s Initiative for Digital Public Infrastructure.
                                    </li>
                                    <li>
                                        Implemented front-end features and user interfaces in a SvelteKit stack, translating design requirements into responsive, accessible components.
                                    </li>
                                    <li>
                                        Tested, debugged, and maintained core functionality to ensure platform stability and a seamless user experience.
                                    </li>
                                    <li>
                                        Collaborated with local music communities to gather user requirements, aligning product development with community needs.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full border border-white">
                        <div className="w-full flex p-[5px] text-left flex-col">
                            <span className="font-semibold">
                                IT Help Desk Intern
                            </span>
                            <span>
                                Tunnell Consulting
                            </span>
                            <span className="italic">
                                Summer 2024
                            </span>
                            <div className="w-full">
                                <ul className="list-disc list-inside">
                                    <li>
                                        Provided technical support at the IT Help Desk for a life sciences consulting firm, resolving issues and ensuring smooth day-to-day operations.
                                    </li>
                                    <li>
                                        Maintained IT documentation and project records, improving knowledge sharing and accessibility for internal teams and clients.
                                    </li>
                                    <li>
                                        Assisted with customer onboarding and IT training, enabling employees and clients to efficiently access enterprise software and systems.
                                    </li>
                                    <li>
                                        Developed scripts to organize and analyze IT and project data, enhancing visibility into system performance and client activity.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}