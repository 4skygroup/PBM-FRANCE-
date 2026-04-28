// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    const phone = '06 XX XX XX XX';
    const email = 'contact@pbm-france.fr';
    const address = 'Le Thillay, Val d\'Oise 95';
    const whatsappNumber = '33600000000';

    return (
        <footer className="bg-pbm-noir border-t border-white/5">
            {/* Main footer grid */}
            <div className="px-14 md:px-16 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-6 lg:gap-10 mb-12">

                    {/* Col 1 — Brand */}
                    <div className="md:col-span-1">
                        {/* Logo */}
                        <div
                            className="font-bebas text-3xl tracking-widest mb-4"
                            style={{
                                background: 'linear-gradient(90deg, #f5f3ee, #6366f1)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            PBM <span style={{ WebkitTextFillColor: '#6366f1' }}>FRANCE</span>
                        </div>

                        <p className="text-sm text-pbm-grey font-light leading-relaxed max-w-[280px] mb-6">
                            Spécialistes en métallerie et menuiserie sur mesure en Île-de-France
                            depuis plus de 10 ans. Portails, rideaux métalliques, escaliers et
                            rénovation façade.
                        </p>

                        {/* Contact items */}
                        <div className="flex flex-col gap-2">
                            <a
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-2.5 text-sm text-pbm-grey2 font-light hover:text-pbm-blue3 transition-colors"
                            >
                                <span className="text-base">📞</span>
                                {phone}
                            </a>
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-2.5 text-sm text-pbm-grey2 font-light hover:text-pbm-blue3 transition-colors"
                            >
                                <span className="text-base">✉️</span>
                                {email}
                            </a>
                            <div className="flex items-center gap-2.5 text-sm text-pbm-grey2 font-light">
                                <span className="text-base">📍</span>
                                {address}
                            </div>
                        </div>
                    </div>

                    {/* Col 2 — Services */}
                    <div>
                        <div className="text-[11px] text-white uppercase tracking-[2px] font-semibold mb-5">
                            Services
                        </div>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                'Portails & Clôtures',
                                'Rideaux Métalliques',
                                'Escaliers sur Mesure',
                                'Garde-Corps',
                                'Rénovation Façade',
                                'Vitrerie & Aluminium',
                            ].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        className="text-sm text-pbm-grey font-light hover:text-pbm-blue3 transition-colors"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Entreprise */}
                    <div>
                        <div className="text-[11px] text-white uppercase tracking-[2px] font-semibold mb-5">
                            Entreprise
                        </div>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                { label: 'À propos', href: '#' },
                                { label: 'Nos réalisations', href: '#realisations' },
                                { label: "Zones d'intervention", href: '#' },
                                { label: 'Devis gratuit', href: '#devis' },
                                { label: 'Contact', href: '#devis' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-sm text-pbm-grey font-light hover:text-pbm-blue3 transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Informations */}
                    <div>
                        <div className="text-[11px] text-white uppercase tracking-[2px] font-semibold mb-5">
                            Informations
                        </div>
                        <ul className="flex flex-col gap-2.5">
                            {[
                                'Mentions légales',
                                'Politique de confidentialité',
                                'Assurance décennale',
                                'CGV',
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-sm text-pbm-grey font-light hover:text-pbm-blue3 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

                {/* Footer bottom */}
                <div className="border-t border-white/5 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-xs text-pbm-grey font-light">
                        © 2026 PBM France — Pro Bâtiment Menuiserie. Tous droits réservés.
                    </span>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {['SIRET', 'Assurance Décennale', 'RGE'].map((badge) => (
                            <span
                                key={badge}
                                className="bg-white/[0.04] border border-white/[0.08] px-3 py-1 rounded text-[10px] text-pbm-grey tracking-[0.5px]"
                            >
                {badge}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;