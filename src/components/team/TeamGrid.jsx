import BioCard from "./BioCard";

export default function TeamGrid({ members }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member) => (
                <BioCard key={member.id} member={member} />
            ))}
        </div>
    );
}