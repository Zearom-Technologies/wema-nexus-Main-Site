import React from 'react'

const Excellence = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-gray-900">Integrated Excellence</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">

                    {/* Connector Line (visible on md+) */}
                    <div className="hidden md:block absolute top-[28%] left-[15%] right-[15%] h-[1px] bg-gray-200 -z-10"></div>

                    {/* Item 1 */}
                    <div className="flex flex-col items-center text-center bg-white z-10 px-4">
                        <div className="w-[72px] h-[72px] rounded-full bg-[#fdf0fe] flex items-center justify-center mb-6 text-[#721073] shadow-sm">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Data Integrity</h3>
                        <p className="text-gray-500 text-sm max-w-[220px]">
                            We respect data values to ensure transparency and complete security.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center text-center bg-white z-10 px-4">
                        <div className="w-[72px] h-[72px] rounded-full bg-[#fdf0fe] flex items-center justify-center mb-6 text-[#721073] shadow-sm">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Process Zenith</h3>
                        <p className="text-gray-500 text-sm max-w-[220px]">
                            Where innovation meets the latest approaches to streamline smart working.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center text-center bg-white z-10 px-4 relative">
                        <div className="w-[72px] h-[72px] rounded-full bg-[#fdf0fe] flex items-center justify-center mb-6 text-[#721073] shadow-sm">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-gray-900 mb-3">Systemic Synergy</h3>
                        <p className="text-gray-500 text-sm max-w-[220px]">
                            Quality safety checks and health measures for strategic excellence.
                        </p>

                        {/* Decorative Cursor arrow - highly detailed to match reference */}
                        <div className="absolute top-2 -right-8 w-24 h-24 pointer-events-none drop-shadow-xl z-20">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform -rotate-12 translate-y-4">
                                <path d="M15 42L15 6L40 25.5L25.5 27L28.5 40L20 42L18.5 28L15 42Z" fill="#a7f3d0" stroke="#111827" strokeWidth="2.5" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Excellence
