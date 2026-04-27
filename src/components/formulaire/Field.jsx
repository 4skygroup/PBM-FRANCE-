export default function Field({ label, required, error, children }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="font-dm text-[10px] font-semibold uppercase tracking-[1.5px] text-pbm-grey">
                {label}
                {/*{required && <span className="ml-0.5 text-pbm-blue3">*</span>}*/}
            </label>
            {children}
            {error && (
                <span className="font-dm text-[11px] text-red-400">{error}</span>
            )}
        </div>
    );
}