import ZoneCard from "./ZoneCard.jsx";
import {Zones} from "../../data/Zones.ts";

export default function ListeZones() {
    return (
        <div className="bg-pbm-noir border-t border-white/[0.04] px-[60px] py-[60px] flex items-center gap-8 flex-wrap">
            <span className="text-[11px] text-pbm-grey uppercase tracking-[2px] whitespace-nowrap">
                Zones d'intervention
            </span>
            <div className="flex gap-2 flex-wrap">
                {Zones.map((zone) => (
                    <ZoneCard key={zone.label} {...zone} />
                ))}
            </div>
        </div>
    );
}