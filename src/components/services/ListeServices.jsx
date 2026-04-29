import ServiceCard from "./ServiceCard";
import {services} from "../../data/Services.ts";

export default function ListeServices() {
    return (
        <section id="services" className="bg-pbm-noir px-[60px] py-[120px] relative">
            {/* En-tête */}
            <div className="flex items-center gap-[10px] text-[10px] text-pbm-blue2 font-bold uppercase tracking-[3px] mb-4">
                <span className="w-6 h-px bg-pbm-blue2 shrink-0" />
                Nos prestation
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
                {services.map((service) => (
                    <ServiceCard key={service.number} {...service} />
                ))}
            </div>
        </section>
    );
}