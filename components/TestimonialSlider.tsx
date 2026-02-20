"use client";

import { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiUser } from "react-icons/fi";

const Testimonials = [
    {
        id: 1,
        name: "Aarav Sharma",
        role: "IIT JEE Rank 124",
        text: "Swadhyay Institute provided me with the structured guidance I needed. The faculty is incredible and cleared all my doubts instantly.",
        image: "/st1.png"
    },
    {
        id: 2,
        name: "Sneha Gupta",
        role: "NEET Top Scorer",
        text: "The regular mock tests and personalized feedback helped me improve my weak areas. I highly recommend Swadhyay to all aspirants.",
        image: "/st3.png"
    },
    {
        id: 3,
        name: "Rohan Verma",
        role: "Class XII Topper (98%)",
        text: "The atmosphere here is very competitive yet supportive. The study material is comprehensive and covers everything required for boards.",
        image: "/st1.png"
    },
    {
        id: 4,
        name: "Priya Singh",
        role: "Class X Scorer",
        text: "Foundational courses at Swadhyay built my concepts strong early on. It made my transition to higher classes very smooth.",
        image: "/st3.png"
    }
];

const TestimonialSlider = () => {
    // Duplicate the testimonials to create a seamless infinite loop
    const infiniteTestimonials = [...Testimonials, ...Testimonials];

    return (
        <div className="relative py-8 overflow-hidden" data-aos="fade-up">
            <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused]">
                {infiniteTestimonials.map((t, index) => (
                    <div
                        key={`${t.id}-${index}`}
                        className="flex-shrink-0 w-[300px] md:w-[400px] bg-white p-8 rounded-2xl border border-gray-100 transform transition-transform hover:-translate-y-1 mx-4"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/150?text=Student";
                                }} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-primary font-poppins">
                                    <span className="text-black">{t.name.split(' ')[0]}</span> {t.name.split(' ').slice(1).join(' ')}
                                </h4>
                                <p className="text-sm text-highlight font-medium">{t.role}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic leading-relaxed relative">
                            <span className="text-4xl text-gray-200 absolute -top-4 -left-2 font-serif">"</span>
                            {t.text}
                            <span className="text-4xl text-gray-200 absolute -bottom-4 -right-2 font-serif">"</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
