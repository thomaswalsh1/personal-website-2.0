import { FaRegHandshake } from "react-icons/fa";
import { motion } from "motion/react";
import ProjectComponent from "../components/ProjectComponent";
import linuxLearnerPic from "../assets/imagescropped/linuxlearner.png";
import ibmCapstonePic from "../assets/imagescropped/ibm.png"
import ventPic from "../assets/imagescropped/Vent.png"
import superAIPic from "../assets/imagescropped/superai.jpg"
import termitePic from "../assets/imagescropped/termite.jpeg"
import LineConnector from "../components/LineConnector";

const termiteDesc = (
  <>
    Termite is a customizable React component that enables developers to seamlessly integrate terminal interfaces and log viewers into their applications. It provides flexible styling through custom CSS classes, allowing complete control over the terminal's appearance to match any design system. Beyond visual customization, Termite supports interactive terminal workflows by allowing developers to define custom input and output handlers, making it ideal for displaying log streams, connecting to remote terminals, or building command-driven interfaces with full control over command processing and output rendering. I plan to integrate Termite into my own projects, such as Linux Learner or my personal website, to maintain modularity and provide a layer of abstraction.
  </>
);
const termiteGit = "https://github.com/thomaswalsh1/Termite"

const linuxLearnerDesc = (
  <>
    LinuxLearner is an open-source project I have been working on that allows for the seamless practice and memorization of the commands featured in the CompTIA Linux+ V8 exam. Built in primarily in C, LinuxLearner uses a terminal-style GUI provided by the ncurses library to run the user through different sets of exercises in their own shell.
  </>
);
const linuxLearnerGit = "https://github.com/thomaswalsh1/LinuxLearnerClassic"

const ibmCapstoneDesc = (
  <>
    This project was the final capstone project for the IBM Full Stack Developer Certification. It is a car dealership website created using React, Django, MongoDB, Microservices, and other tools. The website also includes AI integration to provide analytics on the kinds of reviews left on certain car models.
  </>
);
const ibmCapstoneGit = "https://github.com/thomaswalsh1/xrwvm-fullstack_developer_capstone"

const ventDesc = (
  <>
    Although no longer actively supported, Vent is a journaling application and social media app created with Express.js, Vite, React, Tailwind, and MongoDB. Designed to foster long-form information sharing, users can create and share journal entries with other users using a rich text editor. The backend for this project can also be found on my github.
  </>
);
const ventGit = "https://github.com/thomaswalsh1/Vent-App-Frontend"

const superAIDesc = (
  <>
    A project created as part of HackUMass XII, SuperAI is an app that collects responses from four different LLMs judging the relevance, accuracy, coherence, and completeness of the responses using SvelteKit, Llama, Mixtral, Gemma, Wolfram, Tailwind, and Cloudflare.
  </>
);
const superAIGit = "https://github.com/thomaswalsh1/super-ai"

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
          className="flex flex-col w-full md:px-10"
        >
          <ProjectComponent title="Termite" description={termiteDesc} image={termitePic} link={termiteGit}/>
          <LineConnector />
          <ProjectComponent title="Linux Learner" description={linuxLearnerDesc} link={linuxLearnerGit} image={linuxLearnerPic} />
          <LineConnector />
          <ProjectComponent title="IBM Full Stack Certification Capstone" description={ibmCapstoneDesc} link={ibmCapstoneGit} image={ibmCapstonePic} />
          <LineConnector />
          <ProjectComponent title="Vent" description={ventDesc} link={ventGit} image={ventPic} />
          <LineConnector />
          <ProjectComponent title="SuperAI" description={superAIDesc} link={superAIGit} image={superAIPic} />
        </div>
      </div>
    </div>
  );
}
