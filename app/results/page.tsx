import SectionTitle from "@/components/SectionTitle";
import ResultCard from "@/components/ResultCard";
import GalleryGrid from "@/components/GalleryGrid";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Results & Gallery - Swadhyay Coaching Institute',
    description: 'Our students achievements and moments of pride.',
};

const topResults = [
    { name: "Aditya Kumar", rank: "AIR 45", exam: "JEE Advanced 2024", image: "/st1.png", year: "2024" },
    { name: "Riya Sharma", rank: "AIR 12", exam: "NEET 2024", image: "/st3.png", year: "2024" },
    { name: "Karan Singh", rank: "99.8%", exam: "CBSE Class XII", image: "/st1.png", year: "2024" },
    { name: "Sneha Gupta", rank: "98.5%", exam: "ICSE Class X", image: "/st3.png", year: "2024" },
    { name: "Rahul Verma", rank: "AIR 1024", exam: "JEE Mains 2024", image: "/st1.png", year: "2024" },
    { name: "Pooja Das", rank: "680/720", exam: "NEET 2023", image: "/st3.png", year: "2023" },
    { name: "Amit Patel", rank: "AIR 89", exam: "JEE Advanced 2023", image: "/st1.png", year: "2023" },
    { name: "Suresh Kumar", rank: "97.2%", exam: "CBSE Class XII", image: "/st1.png", year: "2023" }
];

export default function Results() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <SectionTitle
                    title={<>Our <span className="text-black">Results</span></>}
                    subtitle="Consistency is our hallmark. We produce top rankers every year."
                    center
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {topResults.map((result, idx) => (
                        <ResultCard key={idx} {...result} />
                    ))}
                </div>

                <SectionTitle
                    title={<>Life at <span className="text-black">Swadhyay</span></>}
                    subtitle="Glimpses of our classrooms, events, and celebrations."
                    center
                />

                <GalleryGrid />
            </div>
        </div>
    );
}
