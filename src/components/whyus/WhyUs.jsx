import WhyUsCard from './WhyUsCard';
import {engagements, features} from "../../data/WhyUs.js";

export const WhyUs = () => {
    return (
        <section className="relative bg-pbm-noir2 px-[60px] py-[120px] overflow-hidden">
            {/* Radial glow décoratif */}
            <div className="
            absolute -top-[200px] -right-[200px] w-[600px] h-[600px]
            rounded-full pointer-events-none
            bg-[radial-gradient(circle,rgba(55,48,212,0.08)_0%,transparent_60%)]
            "/>

            {/* Two-column grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Colonne gauche : Avantages */}
                <div>
                    {/* Tag */}
                    <div className="
                    flex items-center gap-2.5 mb-4
                    text-[10px] font-dm font-semibold text-pbm-blue3
                    uppercase tracking-[3px]
                    before:content-[''] before:w-6 before:h-px before:bg-pbm-blue3 before:flex-shrink-0
                    ">
                        Pourquoi nous choisir
                    </div>

                    <h2 className="font-bebas font-bold text-[clamp(42px,5vw,72px)] leading-[0.9] tracking-[1px] text-pbm-white mb-4">
                        La différence<br />
                        <em className="not-italic bg-gradient-to-r from-pbm-blue2 to-pbm-blue3 bg-clip-text text-transparent">
                            PBM France
                        </em>
                    </h2>

                    {/* Description */}
                    <p className="font-dm text-[15px] text-pbm-grey2 font-light leading-[1.7]">
                        10 ans d'expertise métallerie en Île-de-France. Une équipe d'artisans
                        qualifiés et un engagement fort sur la qualité de chaque réalisation.
                    </p>

                    {/* Grid feature cards */}
                    <div className="grid grid-cols-2 gap-5 mt-12">
                        {features.map((feature) => (
                            <WhyUsCard
                                key={feature.id}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>

                {/* Colonne droite : Engagement */}
                <div className="relative">

                    {/* Grand chiffre décoratif */}
                    <div className="
                        absolute -top-5 -left-5
                        font-bebas text-[180px] leading-none tracking-[-4px]
                        bg-gradient-to-b from-pbm-blue3/15 to-transparent
                        bg-clip-text text-transparent
                        pointer-events-none select-none
                    ">
                        10
                    </div>

                    {/* Card engagement */}
                    <div className="
                    relative z-10
                    bg-pbm-surface border border-pbm-blue3/15 rounded-2xl p-9
                    shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                    ">
                        <div className="font-bebas text-[32px] tracking-wide text-pbm-white mb-2">
                            Notre engagement
                        </div>
                        <div className="font-dm text-[13px] text-pbm-grey font-light mb-7">
                            Ce que nous promettons sur chaque chantier
                        </div>

                        {/* Liste engagements */}
                        <ul className="flex flex-col gap-3">
                            {engagements.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 font-dm text-[13px] text-pbm-grey2 font-light"
                                >
                                    {/* Checkmark badge */}
                                    <span className="
                                    flex-shrink-0 w-5 h-5 rounded-full
                                    flex items-center justify-center
                                    text-[10px] leading-none
                                    bg-[rgba(62,207,142,0.12)] border border-[rgba(62,207,142,0.25)]
                                    text-[#3ecf8e]
                                    ">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};