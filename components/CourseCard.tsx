"use client";

import Link from "next/link";
import { FiBookOpen, FiClock } from "react-icons/fi";

interface CourseCardProps {
    title: string;
    description: string;
    duration?: string;
    subjects?: string;
    image?: string;
    link: string;
}

const CourseCard = ({ title, description, duration, subjects, image, link }: CourseCardProps) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 hover:border-highlight overflow-hidden duration-300 flex flex-col h-full" data-aos="fade-up">
            {/* Image (Optional/Placeholder) */}
            <div className="h-48 bg-primary/10 overflow-hidden relative group">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-secondary text-5xl">
                        <FiBookOpen />
                    </div>
                )}
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold font-poppins text-primary mb-2 line-clamp-1">{title}</h3>

                {duration && (
                    <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                        <FiClock size={14} /> {duration}
                    </div>
                )}

                <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-1">
                    {description}
                </p>

                {subjects && (
                    <div className="mb-4 flex flex-wrap gap-2 text-xs font-medium text-highlight">
                        {subjects.split(',').map(s => (
                            <span key={s} className="px-2 py-1 bg-highlight/10 rounded-full">{s.trim()}</span>
                        ))}
                    </div>
                )}

                <Link href={link} className="w-full mt-auto py-2 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors text-center inline-block">
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
