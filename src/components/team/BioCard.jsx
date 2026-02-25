import { Link } from "react-router-dom";

export default function BioCard({ member }) {
    return (
        <Link
            to={`/team/${member.id}`}
            className="group block"
        >
            {/* Portrait */}
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[3/4]">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />

                {/* Role badge */}
                <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-bold uppercase tracking-wide rounded text-primary">
            {member.role}
          </span>
                </div>

                {/* Division icon top right */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="material-symbols-outlined text-white text-base">
            {member.divisionIcon}
          </span>
                </div>
            </div>

            {/* Info */}
            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                {member.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                {member.credentials}
            </p>
            <p className="text-xs text-primary font-medium mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">apartment</span>
                {member.division}
            </p>
        </Link>
    );
}