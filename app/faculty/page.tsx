import SectionTitle from "@/components/SectionTitle";
import FacultyCard from "@/components/FacultyCard";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Faculty - Swadhaya Coaching Institute',
    description: 'Meet our experienced team of educators dedicated to student success.',
};

const facultyMembers = [
    {
        name: "Dr. R.K. Verma",
        role: "Director & HOD Physics",
        qualification: "PhD, IIT Delhi",
        experience: "25 Years",
        image: "/st1.png",
        subjects: ["Physics", "JEE Advanced"]
    },
    {
        name: "Mrs. Anjali Gupta",
        role: "HOD Biology",
        qualification: "M.Sc, Gold Medalist",
        experience: "15 Years",
        image: "/st3.png",
        subjects: ["Biology", "Botany", "Zoology"]
    },
    {
        name: "Mr. S. Mehta",
        role: "Senior Faculty Maths",
        qualification: "B.Tech, NIT",
        experience: "10 Years",
        image: "/st1.png",
        subjects: ["Mathematics", "Calculus"]
    },
    {
        name: "Ms. Neha Singh",
        role: "Faculty Chemistry",
        qualification: "M.Sc Organic Chemistry",
        experience: "8 Years",
        image: "/st3.png",
        subjects: ["Chemistry", "Organic"]
    },
    {
        name: "Mr. Arjun Reddy",
        role: "Faculty Physical Chemistry",
        qualification: "B.Tech",
        experience: "6 Years",
        image: "/st1.png",
        subjects: ["Physical Chemistry"]
    },
    {
        name: "Mrs. Kavita Das",
        role: "English Language Trainer",
        qualification: "MA English",
        experience: "12 Years",
        image: "/st3.png",
        subjects: ["English", "Grammar"]
    },
    {
        name: "Mr. Vikram Singh",
        role: "Faculty Physics",
        qualification: "M.Tech, IIT Bombay",
        experience: "7 Years",
        image: "/st1.png",
        subjects: ["Physics", "Mechanics"]
    },
    {
        name: "Ms. Priya Sharma",
        role: "Faculty Biology",
        qualification: "M.Sc Biotechnology",
        experience: "5 Years",
        image: "/st3.png",
        subjects: ["Biology", "Genetics"]
    }
];

export default function Faculty() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <SectionTitle
                    title={<>Our <span className="text-black">Faculty</span></>}
                    subtitle="The backbone of our institute, guiding students towards excellence."
                    center
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facultyMembers.map((member, idx) => (
                        <FacultyCard key={idx} {...member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
