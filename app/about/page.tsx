import SectionTitle from "@/components/SectionTitle";
import { FiClock, FiUsers, FiAward, FiTarget, FiEye } from "react-icons/fi";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - Swadhyay Coaching Institute',
    description: 'Our mission is to empower students through quality education.',
};

export default function About() {
    return (
        <div className="pt-[53px] pb-16 min-h-screen">

            {/* Introduction */}
            <section className="relative w-full mb-20 py-12 md:py-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/about6.png"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                        <div>
                            <SectionTitle
                                title="About Swadhyay"
                                subtitle={<span className="font-bold text-gray-800">Founded in 2010, SWADHYAY has been a beacon of hope and guidance for thousands of students.</span>}
                                center={true}
                            />
                            <p className="text-gray-800 font-bold mb-6 text-lg leading-relaxed">
                                At Swadhyay, we believe that every student has the potential to achieve greatness. Our methodology is not just about teaching, but about fast-tracking the learning process through innovative techniques and personalized attention.
                            </p>
                            <p className="text-gray-800 font-bold mb-6 text-lg leading-relaxed">
                                Over the last decade, we have consistently produced top rankers in JEE, NEET, and Board exams. Our alumni are now studying in prestigious institutions like IITs, NITs, AIIMS, and top international universities.
                            </p>

                            <div className="flex justify-center gap-8 mt-8">
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-2 mx-auto">
                                        <FiClock size={24} />
                                    </div>
                                    <div className="font-bold text-2xl text-accent">15+</div>
                                    <div className="text-sm text-gray-500">Years Exp.</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-2 mx-auto">
                                        <FiUsers size={24} />
                                    </div>
                                    <div className="font-bold text-2xl text-accent">5000+</div>
                                    <div className="text-sm text-gray-500">Students Taught</div>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-2 mx-auto">
                                        <FiAward size={24} />
                                    </div>
                                    <div className="font-bold text-2xl text-accent">100+</div>
                                    <div className="text-sm text-gray-500">Toppers</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-2xl border border-blue-500 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
                            <h3 className="text-2xl font-bold font-poppins text-primary mb-4 flex items-center gap-3">
                                <FiTarget className="text-3xl" /> Our <span className="text-black">Mission</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To provide high-quality, affordable education that empowers students to achieve their academic and career goals. We strive to create an environment where learning is enjoyable and effectively measured.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-blue-500 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="text-2xl font-bold font-poppins text-primary mb-4 flex items-center gap-3">
                                <FiEye className="text-3xl" /> Our <span className="text-black">Vision</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                To be the most trusted and respected educational institute, known for our commitment to student success, integrity, and innovation in teaching methodologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
