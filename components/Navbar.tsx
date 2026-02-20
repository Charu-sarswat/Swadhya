"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
        { name: "About", path: "/about" },
        { name: "Faculty", path: "/faculty" },
        { name: "Results", path: "/results" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className="fixed w-full z-50 bg-white shadow-md py-2 min-[480px]:py-[13px]"
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="text-2xl font-bold font-poppins text-primary">
                        Swadhyay
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-5 lg:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`text-sm font-semibold transition-colors hover:text-accent ${pathname === link.path ? "text-accent" : "text-gray-700"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-3 py-2 lg:px-5 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-all shadow-md flex items-center gap-2 text-sm lg:text-base"
                    >
                        <FiPhone /> Call Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay (Backdrop) */}
            {/* <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            /> */}

            {/* Mobile Sidebar (Drawer) */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-6 border-b">
                    <div className="text-xl font-bold font-poppins text-primary">Menu</div>
                    <button
                        className="text-2xl text-primary"
                        onClick={() => setIsOpen(false)}
                    >
                        <FiX />
                    </button>
                </div>

                <div className="flex flex-col gap-2 p-6 overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`text-lg font-semibold py-2 transition-colors ${pathname === link.path ? "text-accent" : "text-gray-800"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="mt-6 w-full text-center py-3 bg-accent text-white rounded-lg font-bold shadow-lg shadow-accent/20"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Free Demo
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
