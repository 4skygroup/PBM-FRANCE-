import { Phone, Mail, MapPin } from 'lucide-react';
import React from 'react';
import Logo from "../Logo.jsx";

const Footer = () => {
    const phone = '06 XX XX XX XX';
    const email = 'contact@pbmfrance.fr';
    const address = 'Le Thillay, Val d\'Oise 95';
    const whatsappNumber = '33600000000';

    return (
        <footer className="bg-gray-300 shadow-sm border-t border-gray-200">
            {/* Main footer grid */}
            <div className="px-14 md:px-16 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-6 lg:gap-10 mb-12">

                    {/* Col 1 — Brand */}
                    <div className="md:col-span-1">
                        {/* Logo */}
                        <div className="mb-4">
                            <Logo />
                        </div>

                        <p className="text-sm text-pbm-noir font-normal leading-relaxed max-w-[280px] mb-6">
                            Spécialistes en métallerie et menuiserie sur mesure en Île-de-France
                            depuis plus de 10 ans. Portails, rideaux métalliques, escaliers et
                            rénovation façade.
                        </p>

                        {/* Contact items */}
                        <div className="flex flex-col gap-2">
                            <a
                                href={`tel:${phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-2.5 text-sm text-pbm-noir font-normal hover:text-pbm-blue3 transition-colors"
                            >
                                <Phone size={16} className="text-pbm-blue3" />
                                {phone}
                            </a>
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center gap-2.5 text-sm text-pbm-noir font-normal hover:text-pbm-blue3 transition-colors"
                            >
                                <Mail size={16} className="text-pbm-blue3" />
                                {email}
                            </a>
                            <div className="flex items-center gap-2.5 text-sm text-pbm-noir font-normal">
                                <MapPin size={16} className="text-pbm-blue3" />
                                {address}
                            </div>
                        </div>
                    </div>

                    {/* Col 2 — Services */}
                    <div>
                        <div className="text-[11px] text-pbm-noir uppercase tracking-[2px] font-bold mb-5">
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
                                        className="text-sm text-pbm-noir font-normal hover:text-pbm-blue3 transition-colors"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Entreprise */}
                    <div>
                        <div className="text-[11px] text-pbm-noir uppercase tracking-[2px] font-bold mb-5">
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
                                        className="text-sm text-pbm-noir font-normal hover:text-pbm-blue3 transition-colors"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Infos */}
                    <div>
                        <div className="text-[11px] text-pbm-noir uppercase tracking-[2px] font-bold mb-5">
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
                                        className="text-sm text-pbm-noir font-normal hover:text-pbm-blue3 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>

                {/* Footer bottom */}
                <div className="border-t border-black pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span className="text-xs text-pbm-noir font-normal">
                        © 2026 PBM France — Pro Bâtiment Menuiserie. Tous droits réservés.
                    </span>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {['SIRET', 'Assurance Décennale', 'RGE'].map((badge) => (
                            <span
                                key={badge}
                                className="border border-black/[0.8] px-3 py-1 rounded text-[10px] text-pbm-noir font-normal tracking-[0.5px]"
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