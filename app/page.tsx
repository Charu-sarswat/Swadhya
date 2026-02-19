import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CourseCard from "@/components/CourseCard";
import ResultCard from "@/components/ResultCard";
import FacultyCard from "@/components/FacultyCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import Link from "next/link";
import { FiUsers, FiTarget, FiBarChart } from "react-icons/fi";

// Mock Data
const featuredCourses = [
  {
    title: "Class X Foundation",
    description: "Build a strong base for future competitive exams with our comprehensive foundation course.",
    subjects: "Maths, Science, English",
    duration: "1 Year",
    link: "/courses",
    image: "/image 2.png"
  },
  {
    title: "IIT-JEE Two Year Program",
    description: "Intensive preparation course for JEE Mains & Advanced targeting top engineering colleges.",
    subjects: "Physics, Chemistry, Maths",
    duration: "2 Years",
    link: "/courses",
    image: "/image 3.png"
  },
  {
    title: "NEET Medical Entrance",
    description: "Expert guidance for medical aspirants with focus on NCERT and advanced problem solving.",
    subjects: "Physics, Chemistry, Biology",
    duration: "2 Years",
    link: "/courses",
    image: "/image4.png"
  }
];

const topResults = [
  { name: "Sadhika Sharma", rank: "Rank 1", exam: "Shoolini University, HP", image: "/st1.png" },
  { name: "Aditya Kumar", rank: "Rank 2", exam: "JEE Advanced 2024", image: "/st3.png" },
  { name: "Riya Sharma", rank: "Rank 3", exam: "NEET 2024", image: "/st1.png" },
  { name: "Karan Singh", rank: "Rank 4", exam: "CBSE Class XII", image: "/st3.png" },
  { name: "Sneha Gupta", rank: "Rank 5", exam: "State Board 2024", image: "/st1.png" },
  { name: "Rahul Verma", rank: "Rank 6", exam: "NEET 2024", image: "/st3.png" },
  { name: "Priya Das", rank: "Rank 7", exam: "JEE Mains 2024", image: "/st1.png" },
  { name: "Amit Patel", rank: "Rank 8", exam: "Olympiad 2024", image: "/st3.png" },
];

const featuredFaculty = [
  {
    name: "Dr. R.K. Verma",
    role: "Physics HOD",
    qualification: "PhD, IIT Delhi",
    experience: "15 Years",
    image: "/st1.png",
    description: "With over 15 years of experience in simplifying complex physics concepts for JEE aspirants."
  },
  {
    name: "Mrs. Anjali Gupta",
    role: "Biology Expert",
    qualification: "M.Sc, Gold Medalist",
    experience: "12 Years",
    image: "/st3.png",
    description: "Specialized in Botany with a proven track record of producing top rankers in NEET."
  },
  {
    name: "Mr. S. Mehta",
    role: "Maths Wizard",
    qualification: "B.Tech, NIT",
    experience: "10 Years",
    image: "/st1.png",
    description: "Known for his unique problem-solving techniques and shortcut methods for competitive exams."
  },
  {
    name: "Ms. Neha Singh",
    role: "Chemistry Expert",
    qualification: "M.Sc, DU",
    experience: "8 Years",
    image: "/st3.png",
    description: "Expert in Organic Chemistry, focusing on conceptual clarity and reaction mechanisms."
  },
];


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title={<>Why Choose <span className="text-black">Swadhaya?</span></>}
            subtitle="We focus on conceptual clarity and result-oriented learning methodology."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center border border-primary" data-aos="fade-up" data-aos-delay="0">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl shrink-0">
                  <FiUsers />
                </div>
                <h3 className="text-xl font-bold font-poppins text-primary m-0 text-left">Experienced <span className="text-black">Faculty</span></h3>
              </div>
              <p className="text-gray-600">Learn from the best minds with years of teaching experience in top institutes.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border border-primary" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl shrink-0">
                  <FiTarget />
                </div>
                <h3 className="text-xl font-bold font-poppins text-primary m-0 text-left">Personalized <span className="text-black">Attention</span></h3>
              </div>
              <p className="text-gray-600">Small batch sizes ensure every student gets individual focus and doubt clearing.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center border border-primary" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl shrink-0">
                  <FiBarChart />
                </div>
                <h3 className="text-xl font-bold font-poppins text-primary m-0 text-left">Consistent <span className="text-black">Results</span></h3>
              </div>
              <p className="text-gray-600">Our students consistently secure top ranks in competitive exams year after year.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title={<>Our <span className="text-black">Popular</span> Courses</>}
            subtitle="Structured programs designed to help you succeed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, idx) => (
              <CourseCard key={idx} {...course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses" className="inline-block px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title={<>Hall of <span className="text-black">Fame</span></>}
            subtitle="Celebrating our top achievers."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topResults.map((result, idx) => (
              <ResultCard key={idx} {...result} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-12 md:py-20 container mx-auto px-4 md:px-8">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white text-center md:text-left relative overflow-hidden shadow-none" data-aos="fade-up">

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-poppins text-gray-400">
                Meet Our <br />
                <span className="text-white font-bold">Expert Faculty</span>
              </h2>
            </div>
            <p className="max-w-md text-gray-300 text-sm md:text-base leading-relaxed">
              Our professional educators are here to provide you with the tools, techniques, and insights you need to excel in your chosen field.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {featuredFaculty.map((f, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-48 h-48 rounded-full p-1 border-2 border-white/20 mb-6 relative">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover rounded-full transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold font-poppins mb-1">{f.name}</h3>
                <div className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">{f.role}</div>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[200px]">
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
