export default function SuccessState() {
    return (
        <div className="flex flex-col items-center gap-4 py-10 text-center">
            <div
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                    background: "rgba(62,207,142,0.1)",
                    border: "1px solid rgba(62,207,142,0.3)",
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M5 13l4 4L19 7"
                        stroke="#3ecf8e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <h3 className="font-bebas text-[28px] tracking-wide text-pbm-white">
                Demande envoyée !
            </h3>
            <p className="font-dm text-sm font-light leading-relaxed text-pbm-grey2">
                Votre demande de devis a bien été transmise.
                <br />
                L'équipe PBM France vous recontacte sous 24h.
            </p>
        </div>
    );
}