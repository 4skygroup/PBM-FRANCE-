export default function ServiceCard({ number, icon, name, description }) {
    return (
        <div className="bg-pbm-surface border border-white/[0.04] p-9 relative overflow-hidden transition-all duration-300 cursor-pointer hover:bg-pbm-blue/[0.08] hover:border-pbm-blue3/20 group">
            {/* Numéro décoratif */}
            <span className="font-bebas text-[72px] text-pbm-blue3/[0.08] leading-none absolute top-4 right-6 tracking-[-2px] select-none">
                {String(number).padStart(2, "0")}
            </span>

            {/* Icône */}
            <div className="w-12 h-12 bg-pbm-blue-glow border border-pbm-blue3/20 rounded-xl flex items-center justify-center text-[22px] mb-5">
                {icon}
            </div>

            {/* Nom */}
            <h3 className="font-bebas text-[26px] tracking-[1px] text-pbm-white mb-2">
                {name}
            </h3>

            {/* Description */}
            <p className="text-[13px] text-pbm-grey leading-[1.7] font-light mb-5">
                {description}
            </p>

            {/* Flèche */}
            <span className="text-[18px] text-pbm-blue3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 inline-block">
                ↗
            </span>
        </div>
    );
}