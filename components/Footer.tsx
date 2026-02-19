"use client";

import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram, FiMessageCircle } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="footer bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat text-white pt-12 md:pt-16 pb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90 z-0"></div>
            <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-3xl font-bold font-poppins mb-4 block text-[var(--color-primary)]">
                        Swadhaya
                    </Link>
                    <p className="text-gray-300 mb-6">
                        Empowering students with knowledge and skills for a brighter future.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-accent transition-colors">
                            <FiFacebook size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-accent transition-colors">
                            <FiTwitter size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-accent transition-colors">
                            <FiInstagram size={20} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)] font-sans"><span className="text-black">Quick</span> Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                        <li><Link href="/courses" className="hover:text-accent transition-colors">Our Courses</Link></li>
                        <li><Link href="/faculty" className="hover:text-accent transition-colors">Our Faculty</Link></li>
                        <li><Link href="/results" className="hover:text-accent transition-colors">Recent Results</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)] font-sans"><span className="text-black">Popular</span> Courses</h3>
                    <ul className="space-y-2">
                        <li><Link href="/courses" className="hover:text-accent transition-colors">Class X Foundation</Link></li>
                        <li><Link href="/courses" className="hover:text-accent transition-colors">Class XII Boards</Link></li>
                        <li><Link href="/courses" className="hover:text-accent transition-colors">JEE / NEET Prep</Link></li>
                        <li><Link href="/courses" className="hover:text-accent transition-colors">English Spoken</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)] font-sans"><span className="text-black">Get In</span> Touch</h3>
                    <address className="not-italic text-gray-300 space-y-2">
                        <p>123 Education Street, Knowledge Park</p>
                        <p>New Delhi, India - 110001</p>
                        <p className="mt-4 font-semibold text-white">Call: +91 98765 43210</p>
                        <p>Email: info@swadhaya.edu</p>
                    </address>

                    <Link href="https://wa.me/919876543210" target="_blank" className="mt-6 flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors w-fit shadow-md">
                        <FiMessageCircle size={20} /> Chat on WhatsApp
                    </Link>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400 relative z-10">
                &copy; {new Date().getFullYear()} Swadhaya Coaching Institute. All rights reserved.
            </div>
        </footer >
    );
};

export default Footer;
