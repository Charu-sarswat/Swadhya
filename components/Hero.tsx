"use client";

import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from "react";

const heroImages = [
    "/hero1.png",
    "/hero4.png"
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">

            {/* Background Carousel */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: `url('${image}')`,
                        zIndex: 0
                    }}
                ></div>
            ))}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left" data-aos="fade-up">

                    <h1 className="text-3xl md:text-6xl font-bold font-poppins mb-6 leading-tight">
                        Unlock Your <span className="text-highlight">Potential</span> With Expert Guidance
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
                        Join Swadhyay Coaching Institute for comprehensive preparation, personalized attention, and proven results in competitive exams.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="/contact"
                            className="px-6 py-3 md:px-8 md:py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent-hover transition-transform transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                        >
                            Book Free Demo Class <FiArrowRight />
                        </Link>
                        <Link
                            href="/courses"
                            className="px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-bold text-lg hover:bg-white/20 transition-transform transform hover:-translate-y-1 shadow-lg"
                        >
                            Explore Courses
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start text-sm font-medium text-gray-300">
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-highlight" /> Experienced Faculty
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-highlight" /> Small Batch Size
                        </div>
                        <div className="flex items-center gap-2">
                            <FiCheckCircle className="text-highlight" /> Regular Assessments
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;
