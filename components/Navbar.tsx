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
            className="fixed w-full z-50 bg-white shadow-md py-2"
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="text-2xl font-bold font-poppins text-primary">
                        Swadhaya
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
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
                        className="px-5 py-2 bg-accent text-white rounded-full font-semibold hover:bg-accent-hover transition-all shadow-md flex items-center gap-2"
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

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col gap-4 px-6 animate-fade-in">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`text-lg font-medium ${pathname === link.path ? "text-accent" : "text-gray-800"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="w-full text-center py-3 bg-accent text-white rounded-lg font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        Book Free Demo
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
