import EnquiryForm from "@/components/EnquiryForm";
import SectionTitle from "@/components/SectionTitle";
import { FiMapPin, FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact Us - Swadhyay Coaching Institute',
    description: 'Reach out to us for admissions, queries, or just to say hello.',
};

export default function Contact() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
            <SectionTitle
                title={<><span className="text-black">Contact</span> Us</>}
                subtitle="We would love to hear from you. Get in touch with us for any queries."
                center
            />

            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info & Map */}
                    <div className="space-y-8" data-aos="fade-right">

                        <a
                            href="https://maps.app.goo.gl/x6esQfWNYgMvL4kS7?g_st=aw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow group"
                        >
                            <div className="p-3 bg-primary/10 text-primary rounded-full text-xl mt-1 group-hover:bg-primary group-hover:text-white transition-colors">
                                <FiMapPin />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary font-poppins mb-2"><span className="text-black">Visit</span> Our Center</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Block A, Nandgram, Ghaziabad,<br />
                                    Uttar Pradesh, India - 201003
                                </p>
                            </div>
                        </a>

                        <a
                            href="tel:+917428258845"
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow group"
                        >
                            <div className="p-3 bg-accent/10 text-accent rounded-full text-xl mt-1 group-hover:bg-accent group-hover:text-white transition-colors">
                                <FiPhone />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary font-poppins mb-2"><span className="text-black">Call</span> Us</h3>
                                <p className="text-gray-600 leading-relaxed">+91 7428258845</p>
                            </div>
                        </a>

                        <a
                            href="mailto:info@swadhyay.edu"
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow group"
                        >
                            <div className="p-3 bg-highlight/10 text-highlight rounded-full text-xl mt-1 group-hover:bg-highlight group-hover:text-white transition-colors">
                                <FiMail />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary font-poppins mb-2"><span className="text-black">Email</span> Us</h3>
                                <p className="text-gray-600 leading-relaxed">info@swadhyay.edu</p>
                            </div>
                        </a>

                        <Link
                            href="https://wa.me/917428258845"
                            target="_blank"
                            className="flex items-center gap-3 p-6 bg-[#25D366] text-white rounded-2xl shadow-lg hover:bg-[#128C7E] transition-all hover:shadow-xl w-full group"
                        >
                            <div className="p-3 bg-white/20 rounded-full text-2xl">
                                <FiMessageCircle />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg font-poppins">Chat on WhatsApp</h4>
                                <p className="text-white/90 text-sm">Instant support for your queries</p>
                            </div>
                        </Link>

                        {/* Map Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.04359858694!2d77.42065997610052!3d28.691341881774286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf183296f8c2b%3A0xe67ce3fcc9813f8c!2sA-Block%2C%20Nandgram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201003!5e0!3m2!1sen!2sin!4v1740065096324!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div data-aos="fade-left">
                        <EnquiryForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
