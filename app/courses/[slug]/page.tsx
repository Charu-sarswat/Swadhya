import { courses } from "@/lib/data";
import { notFound } from "next/navigation";
import { FiClock, FiCheckCircle, FiChevronRight, FiMessageCircle } from "react-icons/fi";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export default async function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <FiChevronRight size={14} />
                        <Link href="/courses" className="hover:text-primary transition-colors">Courses</Link>
                        <FiChevronRight size={14} />
                        <span className="text-primary font-medium truncate">{course.title}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <div data-aos="fade-right">
                                <h1 className="text-4xl md:text-5xl font-bold text-primary font-poppins mb-6 leading-tight">
                                    {course.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                                        <FiClock className="text-accent" />
                                        <span className="font-semibold">{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium uppercase tracking-wider text-secondary">Subjects:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {course.subjects.split(',').map(s => (
                                                <span key={s} className="px-3 py-1 bg-highlight/10 text-highlight rounded-full text-xs font-bold">
                                                    {s.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl text-gray-600 leading-relaxed font-light">
                                    {course.fullDescription}
                                </p>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100" data-aos="fade-up">
                                <h2 className="text-2xl font-bold text-primary font-poppins mb-8 flex items-center gap-3">
                                    <div className="w-2 h-8 bg-accent rounded-full"></div>
                                    Course Features
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {course.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <FiCheckCircle className="text-accent text-xl mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                            <span className="text-gray-700 leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6" data-aos="fade-up">
                                <h2 className="text-2xl font-bold text-primary font-poppins flex items-center gap-3">
                                    <div className="w-2 h-8 bg-highlight rounded-full"></div>
                                    Curriculum Overview
                                </h2>
                                <div className="space-y-4">
                                    {course.syllabus.map((item, i) => (
                                        <div key={i} className="p-5 bg-white rounded-2xl border-l-4 border-l-highlight shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                                            <div className="w-10 h-10 rounded-full bg-highlight/10 text-highlight flex items-center justify-center font-bold">
                                                {i + 1}
                                            </div>
                                            <p className="text-gray-700 font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 space-y-6">
                                <div className="bg-primary text-white p-8 rounded-3xl shadow-2xl overflow-hidden relative" data-aos="fade-left">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                                    <h3 className="text-2xl font-bold mb-4 relative z-10">Start Your Journey Today</h3>
                                    <p className="text-white/80 mb-8 relative z-10">Get expert guidance and top-tier resources to achieve your academic goals.</p>

                                    <div className="space-y-4 relative z-10">
                                        <Link href="/contact" className="block w-full py-4 bg-accent hover:bg-accent-hover text-white text-center font-bold rounded-2xl transition-all hover:shadow-lg active:scale-95">
                                            Enrol Now
                                        </Link>
                                        <Link
                                            href="https://wa.me/917428258845"
                                            target="_blank"
                                            className="w-full py-4 bg-white/10 hover:bg-white/20 text-white text-center font-bold rounded-2xl transition-all border border-white/20 flex items-center justify-center gap-2"
                                        >
                                            <FiMessageCircle size={20} /> Chat on WhatsApp
                                        </Link>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm" data-aos="fade-left" data-aos-delay="100">
                                    <h4 className="font-bold text-primary mb-4">Why choose this course?</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <FiCheckCircle className="text-secondary shrink-0" />
                                            Updated as per latest 2024 patterns
                                        </li>
                                        <li className="flex gap-2">
                                            <FiCheckCircle className="text-secondary shrink-0" />
                                            Flexible batch timings
                                        </li>
                                        <li className="flex gap-2">
                                            <FiCheckCircle className="text-secondary shrink-0" />
                                            One-on-one personal mentoring
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
