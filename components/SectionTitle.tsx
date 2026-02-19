"use client";

interface SectionTitleProps {
    title: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    className?: string;
    center?: boolean;
}

const SectionTitle = ({ title, subtitle, className = "", center = true }: SectionTitleProps) => {
    return (
        <div className={`mb-12 ${center ? "text-center" : "text-left"} ${className}`} data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-primary mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className={`text-gray-600 max-w-3xl text-lg leading-relaxed ${center ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;
