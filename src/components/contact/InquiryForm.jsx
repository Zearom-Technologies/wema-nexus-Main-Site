import { useState } from "react";

const API_URL = "/api/v1/inquiries";

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        site: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    site: formData.site,
                    subject: formData.subject,
                    message: formData.message,
                    status: "new",
                }),
            });

            if (!response.ok) {
                throw new Error("Something went wrong. Please try again.");
            }

            setSubmitted(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    if (submitted) {
        return (
            <div className="text-center py-16">
                <span className="material-symbols-outlined text-5xl text-primary mb-4 block">
                    check_circle
                </span>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    Message Received
                </h3>
                <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* Error Banner */}
            {error && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                    <span className="material-symbols-outlined text-base">error</span>
                    {error}
                </div>
            )}

            {/* Name */}
            <div>
                <label htmlFor="inquiry-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-primary">*</span>
                </label>
                <input
                    id="inquiry-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
            </div>

            {/* Email + Phone side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="inquiry-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                        id="inquiry-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                </div>
                <div>
                    <label htmlFor="inquiry-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        id="inquiry-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                    />
                </div>
            </div>

            {/* Division / Site */}
            <div>
                <label htmlFor="inquiry-site" className="block text-sm font-medium text-gray-700 mb-2">
                    Which division are you inquiring about? <span className="text-primary">*</span>
                </label>
                <select
                    id="inquiry-site"
                    name="site"
                    required
                    value={formData.site}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary transition"
                >
                    <option value="">Select a division</option>
                    <option value="research">Nexus Research</option>
                    <option value="counselling">Nexus Care (Counselling)</option>
                    <option value="ecommerce">Nexus Market (E-Commerce)</option>
                    <option value="main">Nexus Main</option>
                </select>
            </div>

            {/* Subject */}
            <div>
                <label htmlFor="inquiry-subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-primary">*</span>
                </label>
                <input
                    id="inquiry-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your inquiry about?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
            </div>

            {/* Message */}
            <div>
                <label htmlFor="inquiry-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-primary">*</span>
                </label>
                <textarea
                    id="inquiry-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-secondary text-white py-3.5 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {loading ? (
                    <>
                        Sending...
                        <span className="material-symbols-outlined text-sm animate-spin">
                            progress_activity
                        </span>
                    </>
                ) : (
                    <>
                        Send Message
                        <span className="material-symbols-outlined text-sm">send</span>
                    </>
                )}
            </button>

        </form>
    );
}