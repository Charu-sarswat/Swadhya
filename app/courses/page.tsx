import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Courses - Swadhyay Coaching Institute',
    description: 'Explore our comprehensive courses for Class X, XII, JEE, and NEET.',
};

import { courses } from "@/lib/data";

export default function Courses() {
    return (
        <div className="pt-24 pb-10 md:pb-16 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <SectionTitle
                    title={<>Our <span className="text-black">Courses</span></>}
                    subtitle="Designed meticulously to cater to the diverse learning needs of students."
                    center
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, idx) => (
                        <CourseCard key={idx} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
