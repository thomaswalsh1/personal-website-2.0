import { GoDatabase } from "react-icons/go";
import { IoBuildOutline, IoSettingsOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { motion } from "motion/react";

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
            // initial={{ x: 40, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-green-500 text-5xl font-semibold text-left z-10 "
          >
            Skills
          </motion.span>
          <IoBuildOutline className="absolute right-4 w-32 h-32 lg:hidden lg:w-82 lg:h-82 lg:right-[10%] opacity-20 z-5" />
        </div>
        <div
          id="skill-list"
          className="flex flex-col w-full items-center gap-y-4 max-w-[700px]"
        >
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <GoDatabase className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">
              Backend Brilliance
            </span>
            <span className="text-xl">
              Thomas has experience using database systems such as{" "}
              <b>MongoDB, Supabase, Prisma, and Postgres.</b> Additionally, he
              has built various projects with the use of tools like{" "}
              <b>Next.js, Express.js, and Sveltekit. </b>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <IoStorefrontOutline className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">
              Fluid Frontend
            </span>
            <span className="text-xl">
              From Figma designs to code, Thomas has a lot of experience
              developing accessible front-ends using tools and libraries like{" "}
              <b>Vite, React, Sveltekit, and Tailwind.</b>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <CiCloudOn className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">
              Competitive Cloud
            </span>
            <span className="text-xl">
               Some of the tools Thomas has used to host and develop projects include{" "}
              <b>Google Cloud, AWS, Docker, Cloudflare, and Vercel.</b>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center"
          >
            <IoSettingsOutline className="w-32 h-32 opacity-32" />
            <span className="text-green-500 text-3xl font-semibold">
              IT & Support
            </span>
            <span className="text-xl">
              Thomas' experience in the fields of IT and support
              includes the use of tools such as{" "}
              <b>
                Windows Server, Active Directory, Microsoft Teams, Azure,
                Computer Imaging Systems, Architecture, Linux Servers,
                Powershell, Bash, and more.
              </b>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
