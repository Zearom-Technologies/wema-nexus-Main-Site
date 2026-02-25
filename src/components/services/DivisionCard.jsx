export default function DivisionCard({ division, reverse }) {
    return (
        <div
            className={`group relative flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            } rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-shadow duration-500 min-h-[420px]`}
        >
            {/* Image Side */}
            <div className="relative w-full md:w-1/2 min-h-[280px] md:min-h-full overflow-hidden">
                <img
                    src={division.image}
                    alt={division.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
                {/* Badge on image */}
                <div className="absolute top-5 left-5">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/30">
            {division.badge}
          </span>
                </div>
            </div>

            {/* Content Side */}
            <div className="relative w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <span className="material-symbols-outlined text-3xl">{division.icon}</span>
                </div>

                <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {division.name}
                </h2>
                <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
                    {division.tagline}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                    {division.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-10">
                    {division.highlights.map((item) => (
                        <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <a
                        href={division.subdomainUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300 shadow-md"
                    >
                        {division.cta}
                        <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </a>
                    <a
                        href="/contact"
                        className="text-sm text-primary font-semibold hover:underline underline-offset-4 decoration-primary"
                    >
                        Enquire →
                    </a>
                </div>
            </div>
        </div>
    );
}