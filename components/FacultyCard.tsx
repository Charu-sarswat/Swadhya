import { FaLinkedin } from "react-icons/fa";

const FacultyCard = ({ name, role, qualification, experience, image, subjects = [], linkedin }: {
    name: string;
    role?: string;
    qualification?: string;
    experience?: string;
    image?: string;
    subjects?: string[];
    linkedin?: string;
}) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:border-gray-300 transition-colors">
            {/* Image Section */}
            <div className="relative w-full h-40 md:h-64 overflow-hidden bg-gray-100">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-5xl font-bold bg-gray-200">
                        {name.charAt(0)}
                    </div>
                )}

                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold shadow-sm border border-accent/20">
                    {experience || "Faculty"}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-3 md:p-5">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                    <h3 className="text-base md:text-xl font-bold text-primary font-poppins leading-tight">
                        {name}
                    </h3>
                    {linkedin ? (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-primary text-xl md:text-2xl shrink-0 cursor-pointer hover:text-accent transition-colors">
                            <FaLinkedin />
                        </a>
                    ) : (
                        <FaLinkedin className="text-gray-300 text-xl md:text-2xl shrink-0" title="LinkedIn profile not available" />
                    )}
                </div>

                <div className="text-secondary font-semibold text-[10px] md:text-sm leading-snug mb-1 md:mb-2 uppercase tracking-wide">
                    {role}
                </div>
                <p className="text-gray-500 text-[10px] md:text-xs line-clamp-2">
                    {qualification}
                </p>

                {subjects.length > 0 && (
                    <div className="mt-2 md:mt-4 flex flex-wrap gap-1 md:gap-2">
                        {subjects.slice(0, 2).map((sub, i) => (
                            <span key={i} className="text-[9px] md:text-[10px] px-1.5 md:px-2 py-0.5 md:py-1 bg-primary/5 text-primary font-medium rounded-md border border-primary/10">
                                {sub}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FacultyCard;
