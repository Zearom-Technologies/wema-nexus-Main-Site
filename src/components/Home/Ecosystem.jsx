import React from 'react'
import { Link } from 'react-router-dom'

const Ecosystem = () => {
    return (
        <section className="py-20 bg-[#f8f5f2]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-4xl font-heading font-bold text-gray-900 mb-3">Our Ecosystem</h2>
                        <p className="text-gray-500 text-lg">Pioneering VC & macro-driven across our investment arms.</p>
                    </div>
                    <Link to="/services" className="hidden sm:flex items-center gap-2 text-[#721073] font-semibold hover:text-[#4a0b4b] transition-colors">
                        View All Divisions
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[500px]">

                    {/* Main Large Card (Left) */}
                    <div className="group relative rounded-[2rem] overflow-hidden shadow-lg h-full min-h-[450px]">
                        <img
                            src="https://images.unsplash.com/photo-1573497491765-dccce02cb70c?auto=format&fit=crop&q=80&w=1000"
                            alt="Corporate Wellness Programs"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                        <div className="absolute inset-0 p-8 flex flex-col">
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-[#fdf0fe] text-[#721073] rounded-full text-xs font-bold tracking-widest shadow-sm">WELLNESS</span>
                            </div>
                            <div className="mt-auto text-white">
                                <h3 className="text-3xl font-heading font-bold mb-3">Corporate Wellness Programs.</h3>
                                <p className="text-gray-300 text-sm mb-6 max-w-md leading-relaxed">Comprehensive mental solutions for total performance across onboarding, mindfulness, and our resources at reflow.</p>
                                <Link to="/services" className="inline-block bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right side Grid */}
                    <div className="flex flex-col gap-6 h-full">

                        {/* Top wide card */}
                        <div className="bg-white rounded-[2rem] p-8 flex-1 shadow-md border border-gray-100 relative overflow-hidden group flex flex-col">
                            <div className="absolute right-6 top-6 w-32 h-24 text-[#e239e5]/20 flex items-start justify-end pointer-events-none group-hover:scale-105 transition-transform duration-500">
                                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                    <path d="M10 80 Q 25 20 40 70 T 70 30 T 90 50" fill="none" stroke="#e239e5" strokeWidth="4" />
                                    <circle cx="80" cy="40" r="10" stroke="#e239e5" strokeWidth="4" />
                                    <line x1="87" y1="47" x2="95" y2="55" stroke="#e239e5" strokeWidth="4" />
                                </svg>
                            </div>
                            <div>
                                <span className="inline-block px-4 py-1.5 bg-[#fdf0fe] text-[#721073] rounded-full text-xs font-bold tracking-widest mb-4 shadow-sm">ANALYTICS</span>
                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Q3 / Global Market Trends</h3>
                                <p className="text-gray-500 text-sm mb-6 max-w-sm leading-relaxed">From digital concepts globally, here's strategic direction to shape what's next.</p>
                            </div>
                            <Link to="/services" className="flex items-center gap-2 text-sm font-bold text-[#721073] hover:text-[#4a0b4b] transition-colors mt-auto w-fit border-b-2 border-[#721073] pb-0.5">
                                Download Report
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>

                        {/* Bottom 2 sub-cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-[1.2]">

                            {/* Dark Card — links to services */}
                            <Link to="/services" className="bg-[#111] rounded-[2rem] p-6 text-white shadow-xl flex flex-col relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform duration-500">
                                    <img src="https://images.unsplash.com/photo-1555529771-835f59bfc50c?auto=format&fit=crop&q=80&w=400" alt="Cart bg" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute z-10 opacity-70"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                </div>
                                <div className="mt-auto relative z-10 pb-2">
                                    <h3 className="text-xl font-heading font-bold mb-1 leading-tight">Digital Value Checks</h3>
                                    <p className="text-gray-400 text-xs">eCommerce Flow</p>
                                </div>
                            </Link>

                            {/* Purple Card — links to contact */}
                            <Link to="/contact" className="bg-[#721073] rounded-[2rem] p-6 text-white shadow-xl flex flex-col justify-between group overflow-hidden relative">
                                <div className="relative z-10">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-white"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    <h3 className="text-xl font-heading font-bold mb-1 leading-tight">Nexus Interact</h3>
                                    <p className="text-purple-200 text-xs">Speak with our team today</p>
                                </div>
                                <div className="self-end mt-4 relative z-10">
                                    <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 cursor-pointer transition-colors bg-white/10">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ecosystem