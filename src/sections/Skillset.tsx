import { IoBuildOutline, IoSettingsOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { motion } from "motion/react";
import SkillComponent from "../components/SkillComponent";
import { GoCodeSquare, GoServer } from "react-icons/go";
import { FaLinux } from "react-icons/fa";
import LineConnector from "../components/LineConnector";

const webAppsDesc = (
  <>
    In 2026, it is necessary to have a functioning, esthetic, and reliable way
    to access your resources from the comfort of a browser. Thomas has the
    skills to make this happen. Thomas uses database technologies including{" "}
    <b>Supabase, Prisma, MongoDB, MySQL, and PostgreSQL</b> to securely and
    efficiently store data. Connecting these tools to form an API is made simple
    using libraries and frameworks like{" "}
    <b>Node, Express, Next, and Svelte.</b> Finally, Thomas brings your data to
    the user space using{" "}
    <b>React, Sveltekit, and reusable component libraries</b> to develop with
    simplicity and functionality.
  </>
);

const serverDesc = (
  <>
    Understanding the complexities and tools used for managing, provisioning,
    accessing, and protecting server technologies is an area that is often
    overlooked by developers and technicians alike. Thomas has the background
    for setting up{" "}
    <b>physical and virtual networks in self-hosted environments</b> using both{" "}
    <b>Bare-Metal (Qemu and KVM) and OS-Level (VirtualBox, UTM)</b> virtual
    machines to create secure, isolated environments for various business needs.
    Additionally, Thomas amplifies security using{" "}
    <b>
      firewalls (UFW and Firewalld), reverse proxies through NGINX, containers
      through Docker, and VPN technologies (Tailscale, ZScaler, Mullvad).
    </b>
  </>
);

const linuxDesc = (
  <>
    Known as one of the most difficult certifications from CompTIA,
    <b> Linux+ Administration</b> shows proficiency in various areas of Linux
    engineering and technology. (Find out more about the CompTIA Linux+
    certification{" "}
    <a className="underline" href="https://www.comptia.org/en-us/certifications/linux/">
      here.
    </a>
    ) Passing his exam in April 2026, Thomas has the credentials for{" "}
    <b>Linux and cloud systems administration. </b>
    From testing, hosting, and developing on a variety of both
    <b> Debian-based and Redhat-based distributions,</b> Thomas has the
    necessary knowledge when it comes to working with powerful and complex
    systems.
  </>
);

const aiDesc = (
  <>
    Integrating AI systems into business and development workflows is key to
    achieving meaningful goals efficiently. Using service providers such as{" "}
    <b>Claude Code and OpenAI,</b> Thomas understands how to manage AI agents
    securely by <b>sanitizing confidential data</b> and identifying security
    risks when deploying programming agents and chatbots. Thomas also has the
    skills to recognize which tasks are best suited for{" "}
    <b>agent automation,</b> minimizing unnecessary iteration and maximizing
    productivity.
  </>
);

const itSupportDesc = (
  <>
    With lots of professional experience in{" "}
    <b>desktop support and enterprise systems,</b> Thomas has the communication
    skills and technical ability for supporting{" "}
    <b>critical business operations when they are needed the most.</b> Working
    with both remote and in-person users, Thomas has the knowledge needed to
    navigate, support, and manage the <b>Windows and Microsoft Office 365</b>{" "}
    ecosystem through computer/device imaging and management in{" "}
    <b>OSDeployer,</b> account and cloud administration in{" "}
    <b>Active Directory and Azure,</b> business application troubleshooting in{" "}
    <b>UIPath and SAP,</b> and ticket routing.
  </>
);

export default function Skillset() {
  return (
    <div id="skills" className="w-full flex flex-col">
      <div
        id="skills-section"
        className="w-full flex flex-col items-center text-center justify-center gap-y-10"
      >
        <div
          id="skills-art-wrapper"
          className="flex flex-row items-center w-full max-w-[700px]"
        >
          <motion.span
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-green-500 text-5xl font-semibold text-left z-10"
          >
            Skills
          </motion.span>
          <IoBuildOutline className="absolute right-4 w-32 h-32 lg:hidden lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
        </div>
        <div
          id="skill-list"
          className="flex flex-col w-full md:px-10"
        >
          <SkillComponent title="Supercharging Web Apps" description={webAppsDesc} icon={GoCodeSquare} />
          <LineConnector />
          <SkillComponent title="Server Management and Administration" description={serverDesc} icon={GoServer} />
          <LineConnector />
          <SkillComponent title="Linux Literacy" description={linuxDesc} icon={FaLinux} />
          <LineConnector />
          <SkillComponent title="IT & Support" description={itSupportDesc} icon={IoSettingsOutline} />
          <LineConnector />
          <SkillComponent title="AI Integration & Agent Management" description={aiDesc} icon={RiRobot2Line} />
        </div>
      </div>
    </div>
  );
}
