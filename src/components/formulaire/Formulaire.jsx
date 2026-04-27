import { useState } from "react";
import {PRESTATIONS} from "./constants.js";

export default function StyledForm() {
    const [form, setForm] = useState({
        nom: "",
        tel: "",
        email: "",
        ville: "",
        prestation: "",
        desc: "",
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form);
        alert("Formulaire envoyé !");
    }

    const input =
        "w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500";

    return (
        <div id="formulaire" className="min-h-screen flex flex-col items-center justify-center bg-pbm-noir2 p-6">

            <div>
                {/* Section tag */}
                <div className="flex items-center gap-2.5 mx-[40px] md:mx-0 mb-4">
                    <span className="w-6 h-px bg-pbm-blue3" />
                    <span className="text-[10px] text-pbm-blue3 uppercase tracking-[3px] font-semibold font-dm">
                        CONTACT
                    </span>
                </div>

                {/* Titre */}
                <h2 className="font-bebas text-[clamp(42px,5vw,72px)] mx-[40px] md:mx-0 leading-[.95] tracking-tight mb-4 text-pbm-white">
                    Devis{" "}
                    <span
                        style={{
                            background: "linear-gradient(90deg, #4f46e5, #6366f1)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        gratuit
                    </span>
                    sous 24 heures
                </h2>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] mx-[40px] md:mx-0 text-pbm-grey2 max-w-[480px] leading-[1.7] font-light mb-8 md:mb-12">
                    Décrivez votre projet. Nous vous recontactons rapidement pour organiser un déplacement gratuit.
                </p>
            </div>

            <div className="w-full max-w-xl bg-white/[0.03] p-8 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4 p-4">

                    <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} className={input} />
                    <input name="tel" placeholder="Téléphone" value={form.tel} onChange={handleChange} className={input} />
                    <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className={input} />
                    <input name="ville" placeholder="Ville" value={form.ville} onChange={handleChange} className={input} />

                    <select
                        name="prestation"
                        value={form.prestation}
                        onChange={handleChange}
                        className={input}
                    >
                        <option value="">Choisir une prestation</option>
                        {PRESTATIONS.map(p => (
                            <option>{p}</option>
                        ))}
                    </select>

                    <textarea
                        name="desc"
                        placeholder="Description"
                        value={form.desc}
                        onChange={handleChange}
                        className={`${input} h-24 resize-none`}
                    />

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
                    >
                        Envoyer
                    </button>

                </form>
            </div>
        </div>
    );
}