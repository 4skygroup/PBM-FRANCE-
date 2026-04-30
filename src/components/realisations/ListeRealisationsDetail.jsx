// grille de la page catégorie (affiche les cards)

import {MapPin} from "lucide-react";
import React from "react";

export default function ListeRealisationsDetail({ projet, onClick }) {
    return (
        <div
            className="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
            style={{
                background: "#16161f",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "none",
            }}
            onClick={() => onClick(projet)}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#4855E5";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(72,85,229,0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
            }}
            role="button"
            tabIndex={0}
            aria-label={`Voir le projet : ${projet.label}`}
            onKeyDown={(e) => e.key === "Enter" && onClick(projet)}
        >
            {/* Image container */}
            <div className="relative h-[280px] overflow-hidden" style={{ background: "#1a1a24" }}>
                {projet.image ? (
                    <img
                        src={projet.image}
                        alt={`${projet.label} — ${projet.lieu}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                        loading="lazy"
                    />
                ) : (
                    <div
                        className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.08]"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(55,48,212,0.2), rgba(99,102,241,0.1))",
                        }}
                    >
                        <span className="font-bebas text-3xl tracking-widest text-white/20">
                            PBM
                        </span>
                    </div>
                )}

                {/* Tags */}
                {projet.tags?.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {projet.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[11px] font-semibold lowercase px-3 py-1.5 rounded-md"
                                style={{
                                    background: "rgba(0,0,0,0.7)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Contenu */}
            <div className="p-6">
                <h3 className="text-[1.4rem] font-bold text-white mb-1 flex items-center gap-2">
                    {projet.label}
                    <span className="text-[#4855E5] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        →
                    </span>
                </h3>
                <p className="text-[#a0a0b0] text-sm flex items-center gap-1 mb-3">
                    <MapPin size={16} className="text-pbm-blue3" />
                    {projet.lieu}
                </p>
                {projet.description && (
                    <p className="text-[#a0a0b0] text-[0.95rem] leading-relaxed">
                        {projet.description}
                    </p>
                )}
                <div className="mt-4 text-[#4855E5] text-sm font-semibold inline-flex items-center gap-1 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Voir le projet →
                </div>
            </div>
        </div>
    );
}