import { RiUser3Line } from "react-icons/ri";
import { motion } from "motion/react";

export default function About() {
  return (
    <div id="about" className="w-full flex flex-col">
      <div
        id="about-section"
        className="w-full flex flex-col items-center text-center justify-center gap-y-10"
      >
        <div
          id="about-art-wrapper"
          className="flex flex-row items-center w-full max-w-[700px]"
        >
          <span className="text-green-500 text-5xl font-semibold text-left z-10">
            Meet Thomas:
          </span>
          <RiUser3Line className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
        </div>
        <motion.span
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-xl md:text-2xl md:text-left max-w-[700px]"
        >
          A member of the <b>UMass Amherst</b> Manning College of Information
          and Computer Sciences class of <b>2027</b>, on the Computer Science
          (BS) track, Thomas has taken courses in{" "}
          <b>
            Web Development, Operating Systems, Algorithms, DevOps, Search
            Engines, and more.
          </b>
        </motion.span>

        <motion.span
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-xl md:text-2xl md:text-left max-w-[700px]"
        >
          Outside of the classroom, Thomas has taken various professional
          courses, earning a certificate for <b>IBM Full Stack Development</b>{" "}
          in the Fall of 2024. Additionally, Thomas can be found participating in
          community projects and events, like hackathons such as <b>HackUMass</b> or labs
          such as the <b>Initiative for Digital Public Infrastructure.</b>
        </motion.span>
      </div>
    </div>
  );
}
