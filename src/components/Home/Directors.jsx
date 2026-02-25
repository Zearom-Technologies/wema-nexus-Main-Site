
import React from 'react'

const Directors = () => {
    const team = [
        {
            name: "Dr. Sarah Jenkins",
            role: "Medical Director",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
            tag: "INNOVATION",
            bgColor: "bg-[#e2cbb1]"
        },
        {
            name: "Michael Chen",
            role: "Head Of Development",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
            tag: "TECH LEAD",
            bgColor: "bg-[#a2b0ba]"
        },
        {
            name: "Elena Rodriguez",
            role: "Chief Strategy Officer",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
            tag: "STRATEGY",
            bgColor: "bg-[#cfc5c6]"
        },
        {
            name: "David Okeke",
            role: "Director of Operations",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            tag: "OPERATIONS",
            bgColor: "bg-[#e2bd8b]"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-gray-900 mb-3">Meet The Directors</h2>
                    <p className="text-gray-500 text-lg">Visionaries guiding Wema Nexus forward.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((person, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            {/* Avatar Box */}
                            <div className={`relative rounded-3xl overflow-visible mb-8 ${person.bgColor} aspect-[3/4]`}>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover transition-transform duration-500 rounded-3xl mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal"
                                />

                                {/* Overlapping Tag at Bottom Center */}
                                <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 z-10">
                                    <span className="px-4 py-1.5 bg-[#fdf0fe] text-[#721073] text-[10px] font-bold tracking-widest rounded-full uppercase shadow-md border border-white whitespace-nowrap">
                                        {person.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-heading font-bold text-gray-900 group-hover:text-[#721073] transition-colors">{person.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{person.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Directors
