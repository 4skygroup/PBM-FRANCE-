import RealisationCard from "./RealisationCard";
import realisations from "../../data/Realisations.js";

export default function ListeRealisations() {
    return (
        <section id="realisations" className="px-5 sm:px-8 md:px-[60px] py-16 md:py-[120px] bg-pbm-noir">

            {/* Section tag */}
            <div className="flex items-center gap-2.5 mx-[40px] mb-4">
                <span className="w-6 h-px bg-pbm-blue3" />
                <span className="text-[10px] text-pbm-blue3 uppercase tracking-[3px] font-semibold font-dm">
                    Portfolio
                </span>
            </div>

            {/* Titre */}
            <h2 className="font-bebas text-[clamp(42px,5vw,72px)] mx-[40px] leading-[.95] tracking-tight mb-4 text-pbm-white">
                Nos{" "}
                <span
                    style={{
                        background: "linear-gradient(90deg, #4f46e5, #6366f1)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    réalisations
                </span>
            </h2>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] mx-[40px] text-pbm-grey2 max-w-[480px] leading-[1.7] font-light mb-8 md:mb-12">
                Quelques exemples de chantiers réalisés en Île-de-France. Chaque projet est unique.
            </p>

            {/* Grille mobile : 1 col centrée avec largeur max
                Desktop : 3 col, 2 rows, première card span 2 lignes */}
            <div className="
                grid gap-2.5 justify-center
                grid-cols-[minmax(0,280px)]
                auto-rows-[120px]
                md:justify-stretch
                md:grid-cols-[2fr_1fr_1fr]
                md:grid-rows-[240px_240px]
                md:auto-rows-[unset]
            ">
                {realisations.map((item) => (
                    <RealisationCard
                        key={item.id}
                        label={item.label}
                        lieu={item.lieu}
                        image={item.image}
                        large={item.large}
                    />
                ))}
            </div>

        </section>
    );
}