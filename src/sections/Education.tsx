import { motion } from "motion/react";
import { LuBriefcaseBusiness, LuGraduationCap } from "react-icons/lu";
import LineConnector from "../components/ LineConnector";

export default function Education() {
  return (
    <div id="education" className="w-full flex flex-col">
      <div
        id="experience-section"
        className="w-full flex flex-col items-center text-center justify-center gap-y-10"
      >
        <div
          id="experience-art-wrapper"
          className="flex flex-row items-center w-full max-w-[700px]"
        >
          <motion.span
            // initial={{ x: 40, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-green-500 text-5xl font-semibold text-left z-10"
          >
            Education
          </motion.span>
          <LuGraduationCap className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
        </div>
        <div
          id="resume-wrapper"
          className="w-full text-lg h-auto flex flex-col max-w-[700px]"
        >
          <div id="resume--list" className="w-full border border-white">
            <div className="w-full flex p-[5px] text-left flex-col">
              <span className="font-semibold">University of Massachusetts, Amherst</span>
              <span>Amherst, MA</span>
              <span className="italic">August 2023 - May 2027</span>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Computer Science (BS) with a minor in Building & Construction Technology</li>
                  <li>Instructor for the UMass Brazilian Jiu-Jitsu Club</li>
                  <li>Participant in HackUMass 2024 and 2025</li>
                </ul>
              </div>
            </div>
          </div>
          <LineConnector />
          <div className="w-full border border-white">
            <div className="w-full flex p-[5px] text-left flex-col">
              <span className="font-semibold">St. John's Preparatory School</span>
              <span>
                Danvers, MA
              </span>
              <span className="italic">September 2019 - May 2023</span>
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Member of Jazz Combo, Computer Club, Spire Society</li>
                  <li>Member of Wrestling (JV & V) 2x Team MIAA Champions, 1x New England Champions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
