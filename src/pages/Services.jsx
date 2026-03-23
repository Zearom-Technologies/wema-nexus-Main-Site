import DivisionCard from "../components/services/DivisionCard";

const divisions = [
    {
        id: "research",
        name: "Nexus Research",
        tagline: "Intelligence That Drives Decisions",
        description:
            "Pioneering studies and data-driven insights to shape tomorrow's industries. From market analysis to behavioral research, we turn raw data into strategic advantage.",
        icon: "science",
        badge: "Research Services",
        highlights: [
            "Market & Consumer Research",
            "Behavioral Analytics",
            "Industry Reports & Whitepapers",
            "Custom Research Engagements",
        ],
        cta: "Explore Research",
        subdomainUrl: "https://research.wemanexus.com", // DEV 2 PLACEHOLDER
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC9g5TuNktsxyoX7Hkp3SmCmr2pB3rTMC1yTlIlLW2_3kxIhNQpwz156jcg9Js4nnYPgxMlAE2zius3mi2K2KaDaEigyj57q9GuBUm-6SA4CNzVx4POZPZ00-FfsrOmMT-_YIWfvt2AGoU69AKeFuSdSM5izOoiakTB5xAGAAqtwc9l_4foNKnKLpG4b1k0KBs5Kj4FEywyWlm4GSH1rB3LI9tpauC68LWrh3GO07QAwY_z5IvKN6h748pOWjeVIx78V4dCh6oya2o",
        accentColor: "#721073",
    },
    {
        id: "counselling",
        name: "Nexus Care",
        tagline: "Growth Through Understanding",
        description:
            "Empathetic counseling and psychological support for individuals and organizations. We create safe, professional spaces for healing, development, and resilience.",
        icon: "psychology",
        badge: "Counselling Services",
        highlights: [
            "Individual & Group Therapy",
            "Corporate Wellness Programs",
            "Psychological Assessments",
            "Crisis Intervention Support",
        ],
        cta: "Find Support",
        subdomainUrl: "https://care.wemanexus.com", // DEV 2 PLACEHOLDER
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCnCdqEI_xnuqu2v5xwIhD-ZTTZB1RwkqCMYaztIRGahygYzH3D7zAQEsgXsT_rP1S7qBNzr-X0xuSgvpui6VyyL7svMAeW2as4FPZwYFMPc5c_SAujC6W_jAAkDAWJWgP3BaL2H7AWuDRzIyKCFBWgC1A3z-3lMNqvEenvgilz8tH4MrMvBbsfE0oS_ylOIo6EHr309va0honidxfjvL0H-h2lanetNodbwDRX7i7CTPmbJ0enFHATCTo1264W2_wT5wXlnxa3T_U",
        accentColor: "#721073",
    },
    {
        id: "ecommerce",
        name: "Nexus Market",
        tagline: "Commerce, Curated for You",
        description:
            "Premium goods and seamless digital shopping experiences. Our e-commerce platform is built for discerning buyers who value quality, curation, and convenience.",
        icon: "shopping_bag",
        badge: "E-Commerce Store",
        highlights: [
            "Curated Premium Products",
            "Secure Digital Checkout",
            "Loyalty & Rewards Program",
            "Global Shipping & Fulfilment",
        ],
        cta: "Shop Collections",
        subdomainUrl: "https://market.wemanexus.com", // DEV 2 PLACEHOLDER
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBICVLedYty1ruXFG2Tjjq0L8Z8nG2VdmVH8XvotsKfxBNn5Qi4LEUMSHj8WTbKKsTensSJMDmspEd41Ho0bYkkdZaklPugqbWOIIQ8B6xbXRCtv6zrw_0gBnAsPOK53u6P_9PVWlurAwleu67mcF8a8_ORrWcQHzyeH9qS2RN_T2vWf2qP-isgh3RlEZ-8FORgHL5LjsoMKi79BC0xYZinwxAxph8OooaeQxlBcTsgTLUjJy-0iPzNkhC_xYMzq46y3P9KqRBL-7k",
        accentColor: "#721073",
    },
];

export default function Services() {
    return (
        <main className="bg-background-light dark:bg-background-dark min-h-screen">
            {/* Page Header */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl -ml-16" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-6">
            Our Divisions
          </span>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                        Three Pillars. <br />
                        <span className="text-primary italic">One Ecosystem.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-light">
                        Each division operates with its own focus and expertise — yet all
                        are connected by the Wema Nexus vision of integrated excellence.
                    </p>
                </div>
            </section>

            {/* Division Cards */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    {divisions.map((division, index) => (
                        <DivisionCard key={division.id} division={division} reverse={index % 2 !== 0} />
                    ))}
                </div>
            </section>

            {/* Bottom CTA Strip */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                        Not sure which division fits your needs?
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Our team will help you find the right fit — whether it's data,
                        care, or commerce.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300"
                    >
                        Talk to Us
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </section>
        </main>
    );
}