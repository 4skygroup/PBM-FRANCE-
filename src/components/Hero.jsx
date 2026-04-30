export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen grid lg:grid-cols-2 bg-pbm-noir overflow-hidden">

            {/* Background gradients */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(55,48,212,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(99,102,241,0.08) 0%, transparent 50%),
            linear-gradient(180deg, #080810 0%, #0e0e1a 100%)
          `,
                }}
            />

            {/* Grid overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(55,48,212,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(55,48,212,0.06) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
                    maskImage:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 70%)",
                }}
            />

            {/* LEFT CONTENT */}
            <div className="relative z-10 flex items-center px-6 sm:px-10 lg:px-16 pt-28">
                <div className="w-full max-w-2xl">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 border border-pbm-blue3/25 px-4 py-1.5 rounded-full text-pbm-blue3 uppercase tracking-[2px] text-[11px] font-medium font-dm mb-7"
                         style={{ background: "rgba(55,48,212,0.12)" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-pbm-blue3 animate-pulse" />
                        Artisans métalliers IDF · Depuis 10 ans
                    </div>

                    {/* Title */}
                    <h1
                        className="font-bebas leading-none tracking-wide mb-7"
                        style={{ fontSize: "clamp(64px, 9vw, 120px)", lineHeight: 0.92 }}
                    >
                        <span className="block text-pbm-white">MÉTALLERIE</span>
                        <span
                            className="block"
                            style={{
                                background: "linear-gradient(90deg, #4f46e5, #6366f1, #818cf8)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            SUR MESURE
                        </span>
                        <span
                            className="block"
                            style={{ color: "rgba(255,255,255,0.15)" }}
                        >
                          ILE-DE-FRANCE
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-pbm-grey2 font-dm font-light text-base leading-relaxed max-w-lg mb-10">
                        Portails, rideaux métalliques, escaliers, garde-corps et rénovation
                        façade. Fabrication artisanale dans notre atelier. Pose
                        professionnelle partout en IDF.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-4 flex-wrap">
                        <a
                            href="#realisations"
                            className="font-dm font-medium text-sm text-white px-8 py-3.5 rounded-lg inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                            style={{
                                background: "linear-gradient(135deg, #3730d4, #4f46e5)",
                                boxShadow: "0 8px 30px rgba(55,48,212,0.35)",
                                letterSpacing: "0.3px",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    "0 12px 40px rgba(55,48,212,0.5)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.boxShadow =
                                    "0 8px 30px rgba(55,48,212,0.35)")
                            }
                        >
                            Nos réalisations →
                        </a>

                    </div>

                    {/* Stats */}
                    <div id="zone" className="flex gap-12 mt-16 pt-10 border-t border-white/[0.06] flex-wrap my-6">
                        {[
                            { number: "10+", label: "Ans d'expérience" },
                            { number: "500+", label: "Chantiers réalisés" },
                            { number: "48h", label: "Délai devis" },
                            { number: "95", label: "Val d'Oise" },
                        ].map(({ number, label }) => (
                            <div key={label}>
                                <div
                                    className="font-bebas text-[42px] leading-none mb-1"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #f5f3ee, #6366f1)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {number}
                                </div>
                                <div className="font-dm text-pbm-grey uppercase tracking-widest text-[11px]">
                                    {label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="hidden lg:flex items-center justify-center relative">
                <div
                    className="w-[85%] bg-pbm-surface rounded-2xl overflow-hidden border border-pbm-blue3/20"
                    style={{
                        boxShadow:
                            "0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(55,48,212,0.15)",
                    }}
                >
                    {/* Browser bar */}
                    <div className="h-[50px] bg-white/[0.04] border-b border-white/[0.06] flex items-center px-4 gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#28ca40]" />
                        <div className="flex-1 bg-white/[0.06] rounded h-[26px] flex items-center px-3 text-[11px] text-pbm-grey font-dm gap-1.5">
                            🔒 pbm-france.com
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">

                        {/* BANNIÈRE "Portails et Clôtures sur Mesure" */}
                        <div
                            className="w-full h-40 rounded-xl mb-4 overflow-hidden relative flex items-center justify-between px-6"
                            style={{
                                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 60%, #1e3a8a 100%)",
                            }}
                        >
                            {/* Chevron décoratif central */}
                            <div
                                className="absolute inset-y-0 left-[58%] w-12"
                                style={{
                                    background: "linear-gradient(90deg, transparent, rgba(30,58,138,0.6))",
                                    clipPath: "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
                                }}
                            />

                            {/* Texte gauche */}
                            <div className="z-10">
                                <p className="text-blue-200 text-[11px] font-medium mb-1 tracking-wide">
                                    Prêt à transformer l'apparence de votre entrée ?
                                </p>
                                <p className="text-white font-bebas text-2xl tracking-wide leading-tight">
                                    Portails et Clôtures sur Mesure
                                </p>
                            </div>

                            {/* Bouton droit */}
                            <a href="#devis" className="z-10 flex items-center gap-2 px-4 py-2.5 rounded-md text-white text-[12px] font-semibold whitespace-nowrap flex-shrink-0 cursor-pointer select-none bg-[rgba(30,58,138,0.85)] border border-[rgba(147,197,253,0.3)] transition-all duration-200 hover:bg-blue-600 hover:border-blue-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)] active:scale-95 active:translate-y-0">
                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                <span>Obtenez un devis gratuit</span>
                            </a>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-3 gap-2.5">
                            {[1, 2, 3].map((_, i) => (
                                <div
                                    key={i}
                                    className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-3 h-[70px] flex flex-col justify-between"
                                >
                                    <div className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/[0.12]" />
                                    <div className="h-1.5 w-3/5 bg-white/[0.08] rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}