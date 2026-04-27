import { useState, useEffect } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Accueil", href: "#hero" },
        { label: "Services", href: "#services" },
        { label: "Réalisations", href: "#realisations" },
        { label: "À propos", href: "#why" },
    ];

    const handleSmoothScroll = (e, href) => {
        if (href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
                px-6 py-4 md:px-[60px] md:py-5 border-b border-black/5 backdrop-blur-xl transition-all duration-300
                ${scrolled ? "bg-white/95 shadow-sm" : "bg-white/85"}`}
            >
                <a
                    onClick={(e) => handleSmoothScroll(e, "#")}
                    className="cursor-pointer flex items-center"
                    href="#hero"
                >
                    <img
                        src="src/assets/CYBERSKY.png"
                        alt="PBM France"
                        className="h-8 md:h-10 w-auto object-contain"
                    />
                </a>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className="no-underline text-gray-700 text-[13px] font-normal tracking-[0.5px]
                                hover:text-black transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#devis"
                            onClick={(e) => handleSmoothScroll(e, "#devis")}
                            className="no-underline bg-[#4f46e5] hover:bg-[#6366f1] text-white
                            px-[22px] py-[10px] rounded-md text-[13px] font-medium transition-colors duration-200"
                        >
                            Devis gratuit
                        </a>
                    </li>
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+33600000000"
                        className="hidden md:flex items-center gap-1.5 no-underline
                        text-[13px] text-gray-600 hover:text-black transition-colors duration-200"
                    >
                        <span>📞</span>
                        <span>06 XX XX XX XX</span>
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Ouvrir le menu"
                        className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
                    >
                        <span
                            className="block w-[22px] h-[2px] bg-black rounded-sm transition-all duration-300 origin-center"
                            style={{
                                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                            }}
                        />
                        <span
                            className="block w-[22px] h-[2px] bg-black rounded-sm transition-all duration-300"
                            style={{ opacity: menuOpen ? 0 : 1 }}
                        />
                        <span
                            className="block w-[22px] h-[2px] bg-black rounded-sm transition-all duration-300 origin-center"
                            style={{
                                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                            }}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 bg-white transition-opacity duration-300
                ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="no-underline text-black hover:text-indigo-600 font-['Bebas_Neue'] text-[42px] tracking-[3px] transition-colors duration-200"
                    >
                        {link.label}
                    </a>
                ))}

                <a
                    href="#devis"
                    onClick={(e) => handleSmoothScroll(e, "#devis")}
                    className="no-underline mt-2 px-10 py-3.5 rounded-lg text-white font-medium text-[15px]"
                    style={{ background: "linear-gradient(135deg, #3730d4, #4f46e5)" }}
                >
                    Devis gratuit →
                </a>

                <a
                    href="tel:+33600000000"
                    className="no-underline text-gray-500 text-sm flex items-center gap-2"
                >
                    📞 06 XX XX XX XX
                </a>
            </div>
        </>
    );
}