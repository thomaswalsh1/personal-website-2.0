import { motion } from "motion/react";
import { TiMicrophoneOutline } from "react-icons/ti";

export default function Testimonials() {

    return (
        <div id="testimonials-wrapper" className="w-full flex flex-col">
            <div id="testimonials-section" className="w-full flex flex-col items-center text-center justify-center gap-y-10">
                <div id="testimonials-art-wrapper" className="flex flex-row items-center w-full max-w-[700px]">
                    <motion.span
                        // initial={{ x: 40, opacity: 0 }}
                        // whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", }}
                        viewport={{ once: true, amount: 0.2 }}

                        className="text-green-500 text-5xl font-semibold text-left z-10">Testimonials</motion.span>
                    <TiMicrophoneOutline className="absolute right-4 w-32 h-32 opacity-20 z-5 lg:w-82 lg:h-82 lg:right-[10%]" />

                </div>
                <div id="testimonials-list" className="flex flex-col w-full items-center gap-y-4 max-w-[700px]">
                    <div className="flex flex-col items-center">
                        <span className="text-green-500 text-3xl font-semibold">
                            Alex Shick
                        </span>
                        <span className="text-xl italic">
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will"
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-green-500 text-3xl font-semibold">
                            Paul Wahba
                        </span>
                        <span className="text-xl italic">
                            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will"
                        </span>
                    </div>

                </div>
            </div>

        </div>
    )
}