export default function RealisationCard({ label, lieu, image, large }) {
    return (
        <div className={`relative rounded-xl overflow-hidden cursor-pointer group ${large ? "row-span-2" : ""}`}>

            {/* Image ou placeholder */}
            {image ? (
                <img
                    src={image}
                    alt={`${label} — ${lieu}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
            ) : (
                <div className="w-full h-full bg-pbm-surface transition-transform duration-300 group-hover:scale-[1.04]" />
            )}

            {/* Overlay gradient bas → transparent */}
            <div className="absolute inset-0 bg-gradient-to-t from-pbm-noir/75 to-transparent pointer-events-none" />

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-xs font-medium tracking-wide px-3.5 py-2 rounded-md border border-white/[0.08] text-pbm-white backdrop-blur-md bg-pbm-noir/80">
                  {label} — {lieu}
                </span>
            </div>

        </div>
    );
}