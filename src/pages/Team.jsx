import TeamGrid from "../components/team/TeamGrid";
import { teamMembers } from "../data/team";

export default function Team() {
    return (
        <main className="bg-background-light  min-h-screen">
            {/* Header */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary/20 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-6">
            The People
          </span>
                    <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        Meet the Minds <br />
                        <span className="text-primary italic">Behind Nexus</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 font-light">
                        Our directors and specialists are leaders in their fields — united
                        by a shared commitment to insight, care, and excellence.
                    </p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TeamGrid members={teamMembers} />
            </section>

            {/* Join CTA */}
            <section className="py-20 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-4xl text-primary mb-4 block">
            group_add
          </span>
                    <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Want to work with us?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        We're always looking for talented researchers, clinicians, and
                        commerce strategists to grow the Nexus ecosystem.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-300"
                    >
                        Get in Touch
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>
            </section>
        </main>
    );
}