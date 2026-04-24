const WhyUsCard = ({ icon, title, description }) => {
    return (
        <div className="
          bg-white/[0.03] border border-white/[0.06] rounded-xl p-6
          transition-colors duration-200
          hover:border-pbm-blue3/25
        ">
            <div className="text-2xl mb-3">{icon}</div>
            <div className="font-dm text-sm font-semibold text-pbm-white mb-1.5">
                {title}
            </div>
            <div className="font-dm text-xs text-pbm-grey font-light leading-relaxed">
                {description}
            </div>
        </div>
    );
};

export default WhyUsCard;