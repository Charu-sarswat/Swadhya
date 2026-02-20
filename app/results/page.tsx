import SectionTitle from "@/components/SectionTitle";
import ResultCard from "@/components/ResultCard";
import GalleryGrid from "@/components/GalleryGrid";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Results & Gallery - Swadhyay Coaching Institute',
    description: 'Our students achievements and moments of pride.',
};

import { topResults } from "@/lib/data";

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
