import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { LuMessageCircleQuestion } from "react-icons/lu";

export default function Home() {
  const roles: string[] = ["Developer?", "SysAdmin?", "Technician?", "Linux Engineer?"];
  const [role, setRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home-wrapper" className="w-full  flex flex-col mb-24">
      <div
        id="home-section"
        className="w-full flex flex-col items-center text-center justify-center gap-y-10"
      >
        <div
          id="home-art-wrapper"
          className="flex flex-col items-center w-full"
        >
          <motion.div
            className="ml-48"
            initial={{
              // color: "#FFFFFF",
              // filter: "hue-rotate(0deg)"
              scale: 0,
            }}
            animate={{
              // color: "#00AC7E",
              // filter: "hue-rotate(360deg)"
              scale: 1,
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
          <motion.div
            className="w-full max-w-[700px] flex"
            initial={{ x: 40, opacity: 0, zIndex: 10 }}
            animate={{ x: 0, opacity: 1, zIndex: 10 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-green-500 text-5xl md:text-7xl font-semibold text-left z-10">
              Looking for a{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={role}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="inline-block"
                >
                  {roles[role]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>
        </div>
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-xl md:text-2xl text-center md:text-left max-w-[700px]"
        >
          With knowledge fields like <b>Web Development, Server Management, and Linux Engineering,</b>{" "}
          Thomas Walsh has extensive experience supporting and
          developing for businesses and communities.
        </motion.h2>
      </div>
    </div>
  );
}
