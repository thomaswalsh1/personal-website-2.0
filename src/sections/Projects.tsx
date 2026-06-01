import { FaCarSide, FaRegHandshake } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { motion } from "motion/react";
import { BsUbuntu } from "react-icons/bs";
import { IoIosJournal } from "react-icons/io";
import ProjectComponent from "../components/ProjectComponent";
import linuxLearnerPic from "../assets/imagescropped/linuxlearner.png";
import ibmCapstonePic from "../assets/imagescropped/ibm.png"
import ventPic from "../assets/imagescropped/Vent.png"
import superAIPic from "../assets/imagescropped/superai.jpg"
import termitePic from "../assets/imagescropped/termite.jpeg"

const termiteDesc = "Termite is a customizable React component that enables developers to seamlessly integrate terminal interfaces and log viewers into their applications. It provides flexible styling through custom CSS classes, allowing complete control over the terminal's appearance to match any design system. Beyond visual customization, Termite supports interactive terminal workflows by allowing developers to define custom input and output handlers, making it ideal for displaying log streams, connecting to remote terminals, or building command-driven interfaces with full control over command processing and output rendering. I plan to integrate Termite into my own projects, such as Linux Learner or my personal website, to maintain modularity and provide a layer of abstraction."
const termiteGit = ""

const linuxLearnerDesc = "LinuxLearner is an open-source project I have been working on that allows for the seamless practice and memorization of the commands featured in the CompTIA Linux+ V8 exam. Built in primarily in C, LinuxLearner uses a terminal-style GUI provided by the ncurses library to run the user through different sets of exercises in their own shell.";
const linuxLearnerGit = ""

const ibmCapstoneDesc = "This project was the final capstone project for the IBM Full Stack Developer Certification. It is a car dealership website created using React, Django, MongoDB, Microservices, and other tools. The website also includes AI integration to provide analytics on the kinds of reviews left on certain car models.";
const ibmCapstoneGit = ""

const ventDesc = "Although no longer actively supported, Vent is a journaling application and social media app created with Express.js, Vite, React, Tailwind, and MongoDB. Designed to foster long-form information sharing, users can create and share journal entries with other users using a rich text editor.";
const ventGit = ""

const superAIDesc = "A project created as part of HackUMass XII, SuperAI is an app that collects responses from four different LLMs judging the relevance, accuracy, coherence, and completeness of the responses using SvelteKit, Llama, Mixtral, Gemma, Wolfram, Tailwind, and Cloudflare.";
const superAIGit = ""

export default function Projects() {
  return (
    <div id="projects" className="w-full flex flex-col mt-10">
      <div
        id="projects-section"
        className="w-full flex flex-col items-center text-center justify-center gap-y-10"
      >
        <div
          id="themes-art-wrapper"
          className="w-full flex flex-row items-center max-w-[700px]"
        >
          <motion.span
            // initial={{ x: 40, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-green-500 text-5xl font-semibold text-left z-10"
          >
            Projects & Contributions
          </motion.span>
          <FaRegHandshake className="absolute right-4 w-32 h-32 lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
        </div>
        <div
          id="themes-list"
          className="flex flex-col w-full gap-y-5"
        >
          <ProjectComponent title="Termite" description={termiteDesc} image={termitePic} link={termiteGit}/>
          <ProjectComponent title="Linux Learner" description={linuxLearnerDesc} link={"https://tmwalsh.com"} image={linuxLearnerPic} />
          <ProjectComponent title="IBM Full Stack Certification Capstone" description={ibmCapstoneDesc} link={"https://tmwalsh.com"} image={ibmCapstonePic} />
          <ProjectComponent title="Vent" description={ventDesc} link={"https://tmwalsh.com"} image={ventPic} />
          <ProjectComponent title="SuperAI" description={superAIDesc} link={"https://tmwalsh.com"} image={superAIPic} />
          {/* <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <BsUbuntu className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">
              LinuxLearner
            </span>
            <span className="text-xl">
              LinuxLearner is an open-source project I have been working on that
              allows for the seamless practice and memorization of the commands
              featured in the CompTIA Linux+ V8 exam. Built in primarily in C,
              LinuxLearner uses a terminal-style GUI provided by the ncurses
              library to run the user through different sets of exercises in
              their own shell.
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <FaCarSide className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">
              IBM Full Stack Developer Capstone
            </span>
            <span className="text-xl">
              This project was the final capstone project for the IBM Full Stack
              Developer Certification. It is a car dealership website created
              using React, Django, MongoDB, Microservices, and other tools. The
              website also includes AI integration to provide analytics on the
              kinds of reviews left on certain car models.
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <IoIosJournal className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">Vent</span>
            <span className="text-xl">
              Although no longer actively supported, Vent is a journaling
              application and social media app created with Express.js, Vite,
              React, Tailwind, and MongoDB. Designed to foster long-form
              information sharing, users can create and share journal entries
              with other users using a rich text editor.
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <AiOutlineClockCircle className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">
              SuperAI.tech
            </span>
            <span className="text-xl">
              A project created as part of HackUMass XII, SuperAI is an app that
              collects responses from four different LLMs judging the relevance,
              accuracy, coherence, and completeness of the responses using
              SvelteKit, Llama, Mixtral, Gemma, Wolfram, Tailwind, and
              Cloudflare.
            </span>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
