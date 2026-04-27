import { WHATSAPP_NUMBER } from "./constants.js";

export function buildWhatsAppURL(fields) {
    const msg = `Bonjour PBM France, je souhaite un devis pour : ${fields.prestation}. Nom : ${fields.nom}. Téléphone : ${fields.tel}. Email : ${fields.email}. Ville : ${fields.ville}. Description : ${fields.desc || "Non précisée"}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}