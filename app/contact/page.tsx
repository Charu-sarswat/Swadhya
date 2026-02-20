import EnquiryForm from "@/components/EnquiryForm";
import SectionTitle from "@/components/SectionTitle";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { Metadata } from 'next';

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

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
                            <div className="p-3 bg-primary/10 text-primary rounded-full text-xl mt-1">
                                <FiMapPin />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary font-poppins mb-2"><span className="text-black">Visit</span> Our Center</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    123 Education Street, Knowledge Park,<br />
                                    Phase 3, Greater Noida,<br />
                                    Uttar Pradesh 201308
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
                            <div className="p-3 bg-accent/10 text-accent rounded-full text-xl mt-1">
                                <FiPhone />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary font-poppins mb-2"><span className="text-black">Call</span> Us</h3>
                                <p className="text-gray-600 leading-relaxed mb-1">+91 98765 43210</p>
                                <p className="text-gray-600 leading-relaxed">+91 011-23456789</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-shadow">
                            <div className="p-3 bg-highlight/10 text-highlight rounded-full text-xl mt-1">
                                <FiMail />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl text-primary font-poppins mb-2"><span className="text-black">Email</span> Us</h3>
                                <p className="text-gray-600 leading-relaxed">admissions@swadhyay.edu</p>
                                <p className="text-gray-600 leading-relaxed">info@swadhyay.edu</p>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.112151740925!2d77.4939796!3d28.628876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf508c9030613%3A0x6b77209935128038!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709667789123!5m2!1sen!2sin"
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
