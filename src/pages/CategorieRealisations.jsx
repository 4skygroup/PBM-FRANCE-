import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import realisations from "../data/Realisations.jsx";
import categories from "../data/Categories.js";
import ListeRealisationsDetail from "../components/realisations/ListeRealisationsDetail.jsx";
import LightBox from "../components/realisations/LightBox.jsx";
import { House } from 'lucide-react';


// Page où il y a la liste des réalisations

export default function CategorieRealisations() {
    const { type } = useParams();
    const [projetOuvert, setProjetOuvert] = useState(null);

    // Récupère la config de la catégorie
    const categorie = categories.find((c) => c.slug === type);

    // 404 si slug inconnu
    if (!categorie) return <Navigate to="/" replace />;

    // Filtre les réalisations du bon type
    const projets = realisations.filter((r) => r.type === type);

    return (
        <>
            {/* Lightbox */}
            <LightBox projet={projetOuvert} onClose={() => setProjetOuvert(null)} />

            <div
                className="min-h-screen"
                style={{ background: "#0a0a0f", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
            >
                {/* ── Breadcrumb ── */}
                <div
                    className="pt-28 pb-2 px-6 md:px-12 max-w-[1400px] mx-auto flex items-center gap-2 text-sm"
                    style={{ color: "#a0a0b0" }}
                >
                    <House />
                    <Link
                        to="/#realisations"
                        className="transition-colors hover:text-[#4855E5]"
                        style={{ color: "#a0a0b0" }}
                    >
                        Nos réalisations
                    </Link>
                    <span>/</span>
                    <span className="text-white">
                        {categorie.titreNormal} {categorie.titreBleu}
                    </span>
                </div>

                {/* ── Hero ── */}
                <section className="px-6 md:px-12 max-w-[1400px] mx-auto pt-4 pb-10 flex flex-col lg:flex-row justify-between items-start gap-10">
                    {/* Texte */}
                    <div className="flex-1">
                        <h1
                            className="text-[2.5rem] md:text-[3.5rem] font-extrabold leading-tight mb-4"
                            style={{ fontFamily: "inherit" }}
                        >
                            {categorie.titreNormal}{" "}
                            <span style={{ color: "#4855E5" }}>{categorie.titreBleu}</span>
                        </h1>
                        <p
                            className="text-[1.05rem] leading-relaxed max-w-[600px]"
                            style={{ color: "#a0a0b0" }}
                        >
                            {categorie.description}
                        </p>
                    </div>

                    {/* Sidebar */}
                    <div
                        className="w-full lg:min-w-[300px] lg:max-w-[340px] rounded-2xl p-5"
                        style={{
                            background: "#16161f",
                            border: "1px solid rgba(72,85,229,0.2)",
                        }}
                    >
                        {/*<div*/}
                        {/*    className="flex items-center gap-2 text-[0.85rem] uppercase tracking-widest font-semibold mb-6"*/}
                        {/*    style={{ color: "#4855E5" }}*/}
                        {/*>*/}
                        {/*    À propos de cette catégorie*/}
                        {/*</div>*/}
                        {/*<div className="flex flex-col gap-4 text-sm" style={{ color: "#a0a0b0" }}>*/}
                        {/*    <p>*/}
                        {/*        <strong className="block text-white mb-1">*/}
                        {/*            En cliquant sur un projet,*/}
                        {/*        </strong>*/}
                        {/*        vous visualisez les détails et pouvez demander un devis similaire.*/}
                        {/*    </p>*/}
                        {/*    <p>*/}
                        {/*        <strong className="block text-white mb-1">*/}
                        {/*            Chaque projet est unique,*/}
                        {/*        </strong>*/}
                        {/*        fabriqué sur mesure dans notre atelier du Val d'Oise.*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                        <div>
                            <div
                                className="text-[3rem] font-extrabold leading-none mb-1"
                                style={{ color: "#4855E5" }}
                            >
                                {projets.length > 0 ? projets.length : categorie.sidebarStat}
                            </div>
                            <div className="text-sm" style={{ color: "#a0a0b0" }}>
                                {projets.length > 0 ? "réalisation(s) dans cette catégorie" : categorie.sidebarStatLabel}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Grille projets ── */}
                <section className="max-w-[1400px] mx-auto px-6 md:px-12 pb-24">
                    {projets.length === 0 ? (
                        <p className="text-center py-24" style={{ color: "#6b6b7e" }}>
                            Projets à venir — contactez-nous pour en discuter.
                        </p>
                    ) : (
                        <div className="grid gap-8 mt-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                            {projets.map((projet) => (
                                <ListeRealisationsDetail
                                    key={projet.id}
                                    projet={projet}
                                    onClick={setProjetOuvert}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* ── Footer minimal ── */}
                <footer
                    className="text-center py-8 text-sm"
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        color: "#6b6b7e",
                    }}
                >
                    © 2026 PBM France — Tous droits réservés
                </footer>
            </div>
        </>
    );
}