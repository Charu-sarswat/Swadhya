import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Courses - Swadhyay Coaching Institute',
    description: 'Explore our comprehensive courses for Class X, XII, JEE, and NEET.',
};

const courses = [
    {
        title: "Class X Foundation",
        description: "A comprehensive course designed to build a strong foundation in Science and Mathematics for future competitive exams.",
        subjects: "Science, Maths, English, SST",
        duration: "1 Year",
        link: "#",
        image: "/image 2.png"
    },
    {
        title: "Class XII Board Prep",
        description: "Targeted preparation for CBSE/ICSE board exams with focus on scoring high marks through rigorous practice.",
        subjects: "Physics, Chemistry, Maths/Biology",
        duration: "1 Year",
        link: "#",
        image: "/image.png"
    },
    {
        title: "JEE Mains & Advanced",
        description: "Intensive 2-year program for engineering aspirants covering the entire JEE syllabus with problem-solving focus.",
        subjects: "Physics, Chemistry, Maths",
        duration: "2 Years",
        link: "#",
        image: "/image 3.png"
    },
    {
        title: "NEET Medical Entrance",
        description: "Comprehensive coaching for medical aspirants with in-depth coverage of NCERT and mock tests.",
        subjects: "Physics, Chemistry, Biology",
        duration: "2 Years",
        link: "#",
        image: "/image4.png"
    },
    {
        title: "Crash Course (JEE/NEET)",
        description: "Short-term intensive revision course powered by test series for final exam preparation.",
        subjects: "PCB / PCM",
        duration: "3 Months",
        link: "#",
        image: "/image 5.png"
    },
    {
        title: "English Spoken & Personality Dev",
        description: "Enhance your communication skills and confidence with our specialized modules.",
        subjects: "English, Soft Skills",
        duration: "6 Months",
        link: "#",
        image: "/image 6.png"
    }
];

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
