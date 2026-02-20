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
                        Swadhyay
                    </Link>
                    <p className="text-white mb-6">
                        Empowering students with knowledge and skills for a brighter future.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                            <FiFacebook size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                            <FiTwitter size={20} />
                        </Link>
                        <Link href="#" className="p-2 bg-secondary/20 rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
                            <FiInstagram size={20} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)] font-sans"><span className="text-black">Quick</span> Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
                        <li><Link href="/courses" className="hover:text-yellow-400 transition-colors">Our Courses</Link></li>
                        <li><Link href="/faculty" className="hover:text-yellow-400 transition-colors">Our Faculty</Link></li>
                        <li><Link href="/results" className="hover:text-yellow-400 transition-colors">Recent Results</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)] font-sans"><span className="text-black">Popular</span> Courses</h3>
                    <ul className="space-y-2">
                        <li><Link href="/courses" className="hover:text-yellow-400 transition-colors">Class X Foundation</Link></li>
                        <li><Link href="/courses" className="hover:text-yellow-400 transition-colors">Class XII Boards</Link></li>
                        <li><Link href="/courses" className="hover:text-yellow-400 transition-colors">JEE / NEET Prep</Link></li>
                        <li><Link href="/courses" className="hover:text-yellow-400 transition-colors">English Spoken</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-[var(--color-primary)] font-sans"><span className="text-black">Get In</span> Touch</h3>
                    <address className="not-italic text-white space-y-2 flex flex-col items-start">
                        <a
                            href="https://maps.app.goo.gl/x6esQfWNYgMvL4kS7?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-400 transition-colors text-left"
                        >
                            Block A, Nandgram, Ghaziabad,<br /> Uttar Pradesh, India - 201003
                        </a>
                        <a href="tel:+917428258845" className="text-white hover:text-yellow-400 transition-colors">
                            Call: +91 7428258845
                        </a>
                        <a href="mailto:info@swadhyay.edu" className="hover:text-yellow-400 transition-colors">
                            Email: info@swadhyay.edu
                        </a>
                    </address>

                    <Link href="https://wa.me/917428258845" target="_blank" className="mt-6 flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors w-fit shadow-md">
                        <FiMessageCircle size={20} /> Chat on WhatsApp
                    </Link>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400 relative z-10">
                &copy; {new Date().getFullYear()} Swadhyay Coaching Institute. All rights reserved.
            </div>
        </footer >
    );
};

export default Footer;
