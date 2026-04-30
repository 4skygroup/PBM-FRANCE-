// Lightbox — modal image agrandie

import {MapPin} from "lucide-react";
import React from "react";

export default function LightBox({ projet, onClose }) {
    if (!projet) return null;

    return (
        <div
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Détail : ${projet.label}`}
        >
            {/* Fond sombre */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

            {/* Carte modale */}
            <div
                className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl"
                style={{ background: "#13131f", border: "1px solid rgba(99,102,241,0.2)" }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image ou placeholder */}
                <div className="relative h-72 md:h-96 bg-[#0e0e1a]">
                    {projet.image ? (
                        <img
                            src={projet.image}
                            alt={`${projet.label} — ${projet.lieu}`}
                            className="w-full h-full object-cover"
                            decoding="async"
                        />
                    ) : (
                        <div
                            className="w-full h-full flex items-center justify-center"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(55,48,212,0.2), rgba(99,102,241,0.1))",
                            }}
                        >
                            <span className="font-bebas text-4xl tracking-widest text-white/20">
                                PBM FRANCE
                            </span>
                        </div>
                    )}

                    {/* Bouton fermer */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                        style={{ background: "rgba(8,8,16,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}
                        aria-label="Fermer"
                    >
                        ✕
                    </button>

                    {/* Tags */}
                    {projet.tags?.length > 0 && (
                        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                            {projet.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] text-white font-semibold px-2.5 py-1 rounded-md"
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
                    <h3 className="text-xl font-bold text-white mb-1">{projet.label}</h3>
                    <p className="text-sm text-[#a0a0b0] flex items-center gap-1 mb-3">
                        <MapPin size={16} className="text-pbm-blue3" />
                        {projet.lieu}
                    </p>
                    {projet.description && (
                        <p className="text-sm text-[#a0a0b0] leading-relaxed">
                            {projet.description}
                        </p>
                    )}

                </div>
            </div>
        </div>
    );
}
