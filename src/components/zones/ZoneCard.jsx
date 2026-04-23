export default function ZoneCard({ label, code }) {
    return (
        <span className="bg-pbm-blue3/[0.08] border border-pbm-blue3/[0.15] px-[14px] py-[5px] rounded-full text-[12px] text-pbm-blue3">
      {label}
            {code && <span className="ml-1 opacity-60">{code}</span>}
    </span>
    );
}