import { Link } from "react-router-dom";

const fallbackGradients = {
    "portail":
        "linear-gradient(160deg, rgba(55,48,212,0.4), rgba(0,0,0,0.7)), repeating-linear-gradient(45deg, rgba(55,48,212,0.1) 0px, rgba(55,48,212,0.1) 2px, transparent 2px, transparent 40px)",
    "rideau-metallique":
        "linear-gradient(160deg, rgba(30,20,100,0.5), rgba(0,0,0,0.8)), repeating-linear-gradient(135deg, rgba(99,102,241,0.08) 0px, rgba(99,102,241,0.08) 1px, transparent 1px, transparent 30px)",
    "escalier":
        "linear-gradient(160deg, rgba(10,10,40,0.6), rgba(0,0,0,0.9)), repeating-linear-gradient(90deg, rgba(55,48,212,0.06) 0px, rgba(55,48,212,0.06) 1px, transparent 1px, transparent 50px)",
    "garde-corps":
        "linear-gradient(160deg, rgba(40,30,120,0.4), rgba(0,0,0,0.8)), repeating-linear-gradient(45deg, rgba(79,70,229,0.06) 0px, rgba(79,70,229,0.06) 2px, transparent 2px, transparent 35px)",
    "facade":
        "linear-gradient(160deg, rgba(20,15,80,0.5), rgba(0,0,0,0.85)), repeating-linear-gradient(135deg, rgba(99,102,241,0.07) 0px, rgba(99,102,241,0.07) 1px, transparent 1px, transparent 28px)",
};

export default function RealisationCard({ label, lieu, image, large, type }) {
    const bg = fallbackGradients[type] ?? fallbackGradients["portail"];

    return (
        <Link
            to={`/realisations/${type}`}
            className={`group relative rounded-xl overflow-hidden cursor-pointer block ${large ? "md:row-span-2" : ""}`}
            aria-label={`Voir toutes nos réalisations : ${label}`}
        >
            {/* Image ou dégradé de fond */}
            {image ? (
                <img
                    src={image}
                    alt={`${label} — ${lieu}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ display: "block" }}
                    loading="lazy"
                />
            ) : (
                <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{ background: bg }}
                />
            )}

            {/* Overlay bas */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            {/* Label + flèche */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-end justify-between">
                <span className="text-xs font-medium tracking-wide bg-[rgba(8,8,16,0.8)] backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-md text-white">
                    {label} — {lieu}
                </span>
                <span className="text-pbm-blue3 text-lg opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    ↗
                </span>
            </div>
        </Link>
    );
}