"use client";

import { FiAward } from "react-icons/fi";

const ResultCard = ({ name, rank, exam, image, year }: {
    name: string;
    rank: string;
    exam: string;
    image?: string;
    year?: string;
}) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-gray-300 transition-colors" data-aos="zoom-in">
            {/* Image Section */}
            <div className="relative w-full h-40 md:h-48 overflow-hidden bg-gray-100">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-accent text-3xl bg-primary/5">
                        <FiAward />
                    </div>
                )}

                {/* Rank Badge */}
                <div className="absolute top-2 right-2 bg-accent text-white px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold shadow-sm">
                    {rank}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-3">
                <div className="flex justify-between items-start mb-0.5">
                    <h4 className="text-base font-bold font-poppins text-primary leading-tight">
                        <span className="text-black">{name.split(' ')[0]}</span> {name.split(' ').slice(1).join(' ')}
                    </h4>
                    {year && (
                        <span className="text-[9px] font-semibold bg-primary/5 text-primary px-1.5 py-0.5 rounded border border-primary/10">
                            {year}
                        </span>
                    )}
                </div>

                <p className="text-secondary font-medium text-[10px] md:text-xs leading-snug">
                    {exam}
                </p>
            </div>
        </div>
    );
};

export default ResultCard;
