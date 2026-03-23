import InquiryForm from "../components/contact/InquiryForm";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from "../utils/constants";

const contactDetails = [
    {
        icon: "mail",
        label: "Email Us",
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
    },
    {
        icon: "phone",
        label: "Call Us",
        value: CONTACT_PHONE,
        href: `tel:${CONTACT_PHONE}`,
    },
    {
        icon: "location_on",
        label: "Find Us",
        value: CONTACT_ADDRESS,
        href: null,
    },
];

const divisions = [
    { icon: "science", label: "Nexus Research", url: "https://research.wemanexus.com" },
    { icon: "psychology", label: "Nexus Care", url: "https://care.wemanexus.com" },
    { icon: "shopping_bag", label: "Nexus Market", url: "https://market.wemanexus.com" },
];

export default function Contact() {
    return (
        <main className="bg-background-light min-h-screen">

            {/* Page Header */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -ml-16" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-6">
                        Get In Touch
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        Let's Start a <br />
                        <span className="text-primary italic">Conversation</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 font-light">
                        Whether you're looking for research insights, counselling support,
                        or commerce solutions — we're here to help you find the right fit.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left — Contact Details */}
                    <div className="lg:col-span-1 space-y-6">

                        {/* Detail Cards */}
                        {contactDetails.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-start gap-4 p-5 rounded-2xl bg-surface-light border border-gray-200"
                            >
                                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-1">
                                        {item.label}
                                    </p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="text-gray-900 font-medium hover:text-primary transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-900 font-medium">
                                            {item.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Division Links */}
                        <div className="p-5 rounded-2xl bg-surface-light border border-gray-200">
                            <p className="text-xs uppercase tracking-widest font-semibold text-gray-400 mb-4">
                                Go Directly To
                            </p>
                            <div className="space-y-3">
                                {divisions.map((d) => (
                                    <a
                                        key={d.label}
                                        href={d.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-sm text-gray-700 hover:text-primary transition-colors group"
                                    >
                                        <span className="material-symbols-outlined text-base text-primary">
                                            {d.icon}
                                        </span>
                                        {d.label}
                                        <span className="material-symbols-outlined text-xs ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                            arrow_outward
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="lg:col-span-2 bg-surface-light border border-gray-200 rounded-2xl p-8 lg:p-10">
                        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
                            Send Us a Message
                        </h2>
                        <p className="text-gray-500 text-sm mb-8">
                            We typically respond within 24 hours on business days.
                        </p>
                        <InquiryForm />
                    </div>

                </div>
            </section>

        </main>
    );
}