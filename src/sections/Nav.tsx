import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowNav(false); // scrolling down -> hide
            } else {
                setShowNav(true); // scrolling up -> show
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (

        <nav
            className={`fixed top-0 left-0 border-green-500 border-b-2 w-full z-50 bg-black text-white white shadow-md transition-transform duration-300 ${showNav ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="w-full mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="text-xl font-bold">Thomas Walsh</div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-green-500">About</a>
                    <a href="#skills" className="hover:text-green-500">Skills</a>
                    <a href="#experience" className="hover:text-green-500">Experience</a>
                    <a href="#mission" className="hover:text-green-500">Mission & Values</a>
                    <a href="#contact" className="hover:text-green-500">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-black shadow-lg flex flex-col space-y-4 p-4">
                    <a href="#about" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>About</a>
                    <a href="#skills" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Skills</a>
                    <a href="#experience" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Experience</a>
                    <a href="#mission" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Mission & Values</a>
                    <a href="#reach" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Reach Out</a>
                    <a href="#contact" className="hover:text-green-500" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
            )}
        </nav>
    )
}