import ServiceCard from "./ServiceCard";

const SERVICES = [
    {
        number: 1,
        icon: "🚪",
        name: "Portails & Clôtures",
        description:
            "Portails coulissants, battants, à motorisation intégrée. Clôtures fer forgé et aluminium sur mesure.",
    },
    {
        number: 2,
        icon: "🏪",
        name: "Rideaux Métalliques",
        description:
            "Rideaux de sécurité pour commerces, entrepôts et garages. Motorisés ou manuels, installation rapide.",
    },
    {
        number: 3,
        icon: "🪜",
        name: "Escaliers sur Mesure",
        description:
            "Escaliers droits, colimaçon, quart tournant. Acier brut, inox, fer forgé. Design industriel ou classique.",
    },
    {
        number: 4,
        icon: "🛡️",
        name: "Garde-Corps",
        description:
            "Garde-corps balcon, terrasse, escalier. Acier, inox, verre securit. Norme NF P01-012 respectée.",
    },
    {
        number: 5,
        icon: "🏗️",
        name: "Rénovation Façade",
        description:
            "Ravalement, isolation, bardage métallique. Remise en état complète de vos façades extérieures.",
    },
    {
        number: 6,
        icon: "🪟",
        name: "Vitrerie & Aluminium",
        description:
            "Vitrines commerciales, devantures aluminium, châssis sur mesure. Conception et pose clé en main.",
    },
];

export default function ListeServices() {
    return (
        <section id="services" className="bg-pbm-noir px-[60px] py-[120px] relative">
            {/* En-tête */}
            <div className="flex items-center gap-[10px] text-[10px] text-pbm-blue2 font-bold uppercase tracking-[3px] mb-4">
                <span className="w-6 h-px bg-pbm-blue2 shrink-0" />
                Nos prestations
            </div>
            <h2 className="font-bebas font-bold text-[clamp(42px,5vw,72px)] leading-[0.95] tracking-[1px] mb-4 text-pbm-white">
                Ce que nous <br />
                <em className="not-italic bg-gradient-to-r from-pbm-blue2 to-pbm-blue3 bg-clip-text text-transparent">
                    fabriquons
                </em>
            </h2>
            <p className="text-[15px] text-pbm-grey2 max-w-[480px] leading-[1.7] font-light mb-[60px]">
                Chaque réalisation est unique, fabriquée sur mesure dans notre atelier
                selon vos dimensions exactes et vos exigences esthétiques.
            </p>

            {/* Grille */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
                {SERVICES.map((service) => (
                    <ServiceCard key={service.number} {...service} />
                ))}
            </div>
        </section>
    );
}