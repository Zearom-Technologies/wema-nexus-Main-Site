import { useParams, Link } from "react-router-dom";
import { teamMembers } from "../data/team";

export default function TeamMember() {
    const { slug } = useParams();
    const member = teamMembers.find((m) => m.id === slug);

    // 404-like fallback
    if (!member) {
        return (
            <main className="min-h-screen bg-background-light  flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                        Team member not found.
                    </p>
                    <Link to="/team" className="text-primary hover:underline font-semibold">
                        ← Back to Team
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-background-light min-h-screen">
            {/* Back nav */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <Link
                    to="/team"
                    className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Back to Team
                </Link>
            </div>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left: Portrait */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-md mx-auto lg:mx-0 shadow-xl">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Role badge */}
                            <div className="absolute bottom-6 left-6">
                <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full">
                  {member.role}
                </span>
                            </div>
                        </div>

                        {/* Division tag below image */}
                        <div className="mt-5 flex items-center gap-2 max-w-md mx-auto lg:mx-0">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm">
                  {member.divisionIcon}
                </span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                Part of{" "}
                                <span className="font-semibold text-gray-900 dark:text-white">
                  {member.division}
                </span>
              </span>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col justify-center">
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                            {member.name}
                        </h1>
                        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-2">
                            {member.credentials}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                            {member.bio}
                        </p>

                        {/* Expertise */}
                        <div className="mb-10">
                            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400 dark:text-gray-500 mb-4">
                                Areas of Expertise
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {member.expertise.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-1.5 bg-accent-light dark:bg-accent-dark text-gray-800 dark:text-gray-200 text-sm rounded-full font-medium"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {/* Visit their platform — DEV 2 PLACEHOLDER URL */}
                            <a
                                href={member.subdomainUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300 shadow-md"
                            >
                <span className="material-symbols-outlined text-sm">
                  {member.divisionIcon}
                </span>
                                Visit {member.division}
                                <span className="material-symbols-outlined text-xs">
                  arrow_outward
                </span>
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300"
                            >
                                <span className="material-symbols-outlined text-sm">mail</span>
                                Email {member.name.split(" ")[0]}
                            </a>

                            {/* LinkedIn — PLACEHOLDER */}
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary px-4 py-3 rounded-full text-sm transition-colors duration-300"
                                title="LinkedIn Profile"
                            >
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Team Members */}
            <section className="py-16 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        Other Directors
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {teamMembers
                            .filter((m) => m.id !== member.id)
                            .map((m) => (
                                <Link
                                    to={`/team/${m.id}`}
                                    key={m.id}
                                    className="group flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors duration-200"
                                >
                                    <img
                                        src={m.image}
                                        alt={m.name}
                                        className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0"
                                    />
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-primary transition-colors">
                                            {m.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                            {m.role}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    );
}