import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Heading Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                    Architecting the Future <br />
                    <span className="text-[#721073] italic font-normal">of Interaction</span>
                </h1>
                <p className="text-gray-600 text-lg md:text-xl font-medium">
                    Wema Nexus connects the dots between deep insights, focused <br /> growth, and premium services. A unified hub for the forward-driven.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
                {/* Card 1 — Research */}
                <div className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-square md:aspect-auto">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                        alt="Nexus Research"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                        <div className="w-10 h-10 rounded-full bg-[#721073] flex items-center justify-center mb-4 shadow-lg shadow-[#721073]/50">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31" /><path d="M14 9.3V1.99" /><path d="M8.5 2h7" /><path d="M14 9.3a6.5 6.5 0 1 1-4 0" /><path d="M5.52 16h12.96" /></svg>
                        </div>
                        <h3 className="text-2xl font-heading font-semibold mb-2">Nexus Research</h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed max-w-[90%]">Uncover global trends and data-driven insights to leapfrog your competition.</p>
                        <Link to="/services" className="flex items-center gap-2 text-sm font-semibold hover:text-[#e0dce0] transition-colors">
                            Explore Skills <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Card 2 — Care */}
                <div className="group relative rounded-[2rem] overflow-hidden shadow-xl md:-translate-y-8 aspect-square md:aspect-auto">
                    <img
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                        alt="Nexus Care"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                        <div className="w-10 h-10 rounded-full bg-[#721073] flex items-center justify-center mb-4 shadow-lg shadow-[#721073]/50">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                        </div>
                        <h3 className="text-2xl font-heading font-semibold mb-2">Nexus Care</h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed max-w-[90%]">Redefining consulting with structured support for fast-forward organizations.</p>
                        <Link to="/services" className="flex items-center gap-2 text-sm font-semibold hover:text-[#e0dce0] transition-colors">
                            Find Support <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>

                {/* Card 3 — Market (Books) */}
                <div className="group relative rounded-[2rem] overflow-hidden shadow-xl aspect-square md:aspect-auto">
                    <img
                        src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
                        alt="Nexus Market"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                        <div className="w-10 h-10 rounded-full bg-[#721073] flex items-center justify-center mb-4 shadow-lg shadow-[#721073]/50">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-heading font-semibold mb-2">Nexus Market</h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed max-w-[90%]">Curated books and premium reads for the modern, forward-thinking mind.</p>
                        <Link to="/services" className="flex items-center gap-2 text-sm font-semibold hover:text-white transition-colors">
                            View Platform <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero