"use client";

import { FiMessageCircle } from "react-icons/fi";
import Link from "next/link";

const WhatsAppButton = () => {
    return (
        <Link
            href="https://wa.me/919876543210"
            target="_blank"
            className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-transform hover:scale-110 animate-bounce group"
            aria-label="Chat on WhatsApp"
        >
            <FiMessageCircle size={32} />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </Link>
    );
};

export default WhatsAppButton;
