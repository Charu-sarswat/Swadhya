"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Configuration for EmailJS (Replace with actual Service ID, Template ID, User ID)
        const serviceID = "YOUR_SERVICE_ID";
        const templateID = "YOUR_TEMPLATE_ID";
        const userID = "YOUR_USER_ID";

        try {
            // Simulated Success for Demo Purposes if IDs are not set
            if (serviceID === "YOUR_SERVICE_ID") {
                await new Promise(resolve => setTimeout(resolve, 2000));
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", course: "", message: "" });
                return;
            }

            await emailjs.send(serviceID, templateID, formData, userID);
            setStatus("success");
            setFormData({ name: "", phone: "", email: "", course: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-lg mx-auto transform transition-all hover:scale-[1.01]" data-aos="fade-up">
            <h3 className="text-2xl font-bold font-poppins text-primary mb-6 text-center"><span className="text-black">Get</span> In Touch</h3>

            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course</label>
                    <select
                        id="course"
                        name="course"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none bg-white"
                    >
                        <option value="" disabled>Select a Course</option>
                        <option value="Class X">Class X Foundation</option>
                        <option value="Class XII">Class XII Boards</option>
                        <option value="JEE">JEE Mains/Advanced</option>
                        <option value="NEET">NEET Medical</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none resize-none"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>
            </div>

            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full mt-6 py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2
                    ${status === "success" ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-secondary"}
                    ${status === "loading" ? "opacity-75 cursor-wait" : ""}
                `}
            >
                {status === "loading" ? (
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                ) : status === "success" ? (
                    <> <FiCheck size={20} /> Message Sent! </>
                ) : status === "error" ? (
                    <> <FiAlertCircle size={20} /> Retry Sending </>
                ) : (
                    <> <FiSend size={20} /> Send Enquiry </>
                )}
            </button>

            {status === "error" && (
                <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
            )}
        </form>
    );
};

export default EnquiryForm;
