import PBM from "../assets/PhotoPBM.png";

export default function AboutSection() {
    return (
        <section className="relative bg-pbm-noir2 px-[60px] py-[100px] lg:py-[120px] overflow-hidden">

            {/* Glow décoratif */}
            <div className="
                absolute -top-[200px] -left-[200px] w-[600px] h-[600px]
                rounded-full pointer-events-none
                bg-[radial-gradient(circle,rgba(55,48,212,0.08)_0%,transparent_60%)]
            "/>

            <div className="relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Colonne GAUCHE : Regroupe Tag, Titre et Description */}
                    <div className="w-full">
                        {/* Tag */}
                        <div className="
                            flex items-center gap-2.5 mb-4
                            text-[10px] font-dm font-semibold text-pbm-blue3
                            uppercase tracking-[3px]
                            before:content-[''] before:w-6 before:h-px before:bg-pbm-blue3 before:flex-shrink-0
                        ">
                            À propos
                        </div>

                        {/* Titre */}
                        <h2 className="font-bebas font-bold text-[clamp(42px,5vw,72px)] leading-[0.9] tracking-[1px] text-pbm-white mb-6">
                            L'équipe derrière <br />
                            <em className="not-italic bg-gradient-to-r from-pbm-blue2 to-pbm-blue3 bg-clip-text text-transparent">
                                PBM France
                            </em>
                        </h2>

                        <p className="font-dm text-[16px] text-pbm-grey2 font-light leading-[1.8] max-w-[540px]">
                            PBM France, c’est avant tout une aventure humaine au service de l’artisanat.
                            Spécialistes de la métallerie fine, nous transformons l’acier et l’aluminium
                            pour donner vie à vos projets les plus ambitieux. Notre savoir-faire
                            s'appuie sur une précision rigoureuse et une passion pour les matériaux
                            nobles, garantissant des ouvrages durables et esthétiques.
                        </p>
                    </div>

                    {/* Colonne DROITE : Image */}
                    <div className="hidden lg:flex justify-end w-full">
                        <div className="relative w-full max-w-[650px]">
                            <div
                                className="absolute inset-0 rounded-2xl pointer-events-none"
                                style={{
                                    background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(55,48,212,0.25) 0%, transparent 70%)",
                                    transform: "scale(1.15)",
                                }}
                            />
                            <div
                                className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-pbm-blue3/20"
                                style={{
                                    aspectRatio: "16/10",
                                }}
                            >
                                <img
                                    src={PBM}
                                    alt="L'équipe PBM France"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}