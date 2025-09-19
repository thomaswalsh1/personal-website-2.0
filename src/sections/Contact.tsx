import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div id="contact" className="w-full flex flex-col bg-green-500 rounded-xl">
            <div id="contact-section" className="w-full flex flex-col p-3">
                <div id="contact-art-wrapper" className="flex flex-row w-full justify-center">
                </div>
                <div id="social-holder" className="w-full flex-row flex items-center justify-center gap-x-3">
                    <a href="https://github.com/thomaswalsh1">
                        <FaGithub className="w-12 h-12" />
                    </a>
                    <a href="https://www.linkedin.com/in/twalsh23/">
                        <FaLinkedin href="gmail.com" className="w-12 h-12" />

                    </a>
                    <a href="mailto:thomasmwalsh217@gmail.com">
                        <MdEmail href="gmail.com" className="w-12 h-12" />
                    </a>
                </div>
            </div>
        </div>
    )
}