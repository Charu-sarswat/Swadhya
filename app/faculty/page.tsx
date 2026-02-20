import SectionTitle from "@/components/SectionTitle";
import FacultyCard from "@/components/FacultyCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Faculty - Swadhyay Coaching Institute',
    description: 'Meet our experienced team of educators dedicated to student success.',
};

import { facultyMembers } from "@/lib/data";

export default function Faculty() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <SectionTitle
                    title={<>Our <span className="text-black">Faculty</span></>}
                    subtitle="The backbone of our institute, guiding students towards excellence."
                    center
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {facultyMembers.map((member, idx) => (
                        <FacultyCard key={idx} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
