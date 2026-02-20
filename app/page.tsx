import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import ResultCard from "@/components/ResultCard";
import FacultyCard from "@/components/FacultyCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import { FiUsers, FiTarget, FiBarChart } from "react-icons/fi";

import { courses, topResults, facultyMembers } from "@/lib/data";

const featuredCourses = courses.slice(0, 3);
const featuredFaculty = facultyMembers.slice(0, 4);
const homepageResults = topResults.slice(0, 8);


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Why Choose Us */}
      {/* Why Choose Us */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title={<>Why Choose <span className="text-black">Swadhyay?</span></>}
            subtitle="We focus on conceptual clarity and result-oriented learning methodology."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-5 md:mt-8">

            {/* 1. Large Card: Experience (60% width) */}
            <div className="md:col-span-3 bg-[#F8FAFC] p-4 md:p-6 rounded-2xl relative overflow-hidden group hover:border-primary/20 border border-transparent transition-all" data-aos="fade-right">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-primary text-xl md:text-2xl shadow-sm shrink-0">
                    <FiUsers />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold font-poppins text-gray-900">Experienced Faculty</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                  Learn from key mentors who have nurtured top rankers. Our faculty brings over 15+ years of average experience from top institutes.
                </p>
              </div>
              {/* Decoration */}
              <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 hidden md:block">
                <FiUsers className="text-[160px]" />
              </div>
            </div>

            {/* 2. Tall Card: Personalized (40% width) */}
            <div className="md:col-span-2 bg-primary text-white p-4 md:p-6 rounded-2xl relative overflow-hidden group shadow-lg shadow-primary/20" data-aos="fade-left">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-3 md:mb-5">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center text-white text-xl md:text-2xl backdrop-blur-sm border border-white/10 shrink-0">
                    <FiTarget />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-poppins">Personalized <br className="hidden md:block" />Attention</h3>
                </div>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                  Small batches ensure no student is left behind. 1-on-1 doubt clearing sessions daily.
                </p>
              </div>
              {/* Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-accent/20 rounded-full blur-3xl -mr-8 -mt-8 md:-mr-12 md:-mt-12"></div>
            </div>

            {/* 3. Wide Card: Results (100% width) */}
            <div className="md:col-span-5 bg-[#EEF2FF] p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-5 border border-blue-100/50 hover:border-blue-200 transition-colors" data-aos="fade-up">
              <div className="flex-1 w-full">
                <div className="flex items-center gap-4 mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-accent text-white rounded-lg shadow-md shadow-accent/20 shrink-0">
                    <FiBarChart size={20} className="md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold font-poppins text-gray-900">Proven Track Record</h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
                  Consistently producing District and State toppers. Our structured approach guarantees improvement in every student's performance.
                </p>
              </div>
              <div className="flex gap-4 w-full md:w-auto border-t md:border-t-0 md:border-l border-blue-200 pt-3 md:pt-0 md:pl-5 justify-around md:justify-start">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5k+</div>
                  <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider">Toppers</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title={<>Our <span className="text-black">Popular</span> Courses</>}
            subtitle="Structured programs designed to help you succeed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredCourses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))}
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link href="/courses" className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-8 md:py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title={<>Hall of <span className="text-black">Fame</span></>}
            subtitle="Celebrating our top achievers."
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {homepageResults.map((result, idx) => (
              <ResultCard key={idx} {...result} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-12 md:py-20 container mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 text-white text-center lg:text-left relative overflow-hidden shadow-none" data-aos="fade-up">

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 mb-8 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins text-gray-400 leading-tight">
                Meet Our <br />
                <span className="text-white font-bold">Expert Faculty</span>
              </h2>
            </div>
            <p className="max-w-md text-gray-300 text-sm sm:text-base leading-relaxed mx-auto lg:mx-0">
              Our professional educators are here to provide you with the tools, techniques, and insights you need to excel in your chosen field.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {featuredFaculty.map((f, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full p-1 border-2 border-white/20 mb-3 sm:mb-4 relative">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover rounded-full transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base sm:text-xl font-bold font-poppins mb-1">{f.name}</h3>
                <div className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">{f.role}</div>
                <p className="text-gray-400 text-[10px] sm:text-xs leading-relaxed max-w-[140px] sm:max-w-[180px] hidden min-[480px]:block">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title={<><span className="text-black">Student</span> Voices</>}
            subtitle="Hear what our students have to say about their journey."
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6"><span className="text-black">Ready to Start</span> Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Book a free demo class today and experience our teaching methodology firsthand.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent-hover shadow-lg transition-transform hover:-translate-y-1">
              Book Free Demo
            </Link>
            <Link href="https://wa.me/919876543210" className="px-8 py-4 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-100 shadow-lg transition-transform hover:-translate-y-1">
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
