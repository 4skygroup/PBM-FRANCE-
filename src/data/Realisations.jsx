import gardeCorps from "../assets/img-realisations/Garde-corps-fer-forget.jpg";
import gardeCorps2 from "../assets/img-realisations/Garde-corps-intérieur.jpg";
import escalier2 from "../assets/img-realisations/Escalier-sur-mesure.jpg";
import portailBattant from "../assets/img-realisations/Portail-battant-design.jpg";
import portailFerForge from "../assets/img-realisations/Portail-fer-forge-classique.jpg";
import rideauMetallique from "../assets/img-realisations/Rideau-metallique-commerce.jpg";
import facadeAluminium from "../assets/img-realisations/Facade-aluminium-tertiaire.jpg"
import portailCoulissant from "../assets/img-realisations/Portail-coulissant-motorise.jpg"

const realisations = [
    // ── VITRINE (grille principale — 1 par type, toujours 5 cartes) ──────────
    {
        id: 1,
        label: "Portail coulissant",
        lieu: "Enghien-les-Bains",
        image: portailCoulissant,
        large: true,
        vitrine: true,
        type: "portail",
        tags: ["Aluminium", "Motorisation"],
        description:
            "Fabrication et installation d’un portail coulissant motorisé en aluminium.\n" +
            "Design moderne avec partie pleine et ajourée, pratique et sécurisé.",
    },
    {
        id: 2,
        label: "Rideau métallique",
        lieu: "Montreuil",
        image: rideauMetallique,
        large: false,
        vitrine: true,
        type: "rideau-metallique",
        tags: ["Rideau métallique", "métallique"],
        description: "Installation d'un rideau métallique en acier pour sécuriser un local.\n" +
            "Simple, solide et efficace.",
    },
    {
        id: 3,
        label: "Escalier intérieur",
        lieu: "Paris",
        image: escalier2,
        large: false,
        vitrine: true,
        type: "escalier",
        tags: ["Acier", "Bois", "Design"],
        description: "Fabrication et installation d'un escalier intérieur sur mesure, alliant design moderne et solidité.\n" +
            "Structure en acier avec marches en bois pour un rendu élégant, épuré et durable.\n" +
            "Chaque réalisation est pensée pour s'intégrer parfaitement à votre intérieur avec des finitions soignées.\n",
    },
    {
        id: 4,
        label: "Garde-corps",
        lieu: "Cergy 95",
        image: gardeCorps,
        large: false,
        vitrine: true,
        type: "garde-corps",
        tags: ["fer forgé", "balcon"],
        description: "Garde-corps balcon en fer forgé, pose et finition incluses.",
    },
    {
        id: 5,
        label: "Façade aluminium",
        lieu: "Roissy-en-France",
        image: facadeAluminium,
        large: false,
        vitrine: true,
        type: "facade",
        tags: ["Aluminium", "Façade", "Tertiaire", "Bâtiment"],
        description: "Fabrication et pose d'une façade complète en aluminium pour immeuble de bureaux." +
            "Intégration des vitrages et portes automatiques, avec un rendu moderne, propre et durable.",
    },

    // ── DÉTAIL SEULEMENT (page /realisations/:type) ───────────────────────────
    // {
    //     id: 6,
    //     label: "Escalier intérieur design sur mesure",
    //     lieu: "Paris",
    //     image: escalier2,
    //     large: false,
    //     vitrine: false,
    //     type: "escalier",
    //     tags: ["escalier", "sur mesure"],
    //     description:
    //         "Fabrication et installation d'un escalier intérieur sur mesure, alliant design moderne et solidité. " +
    //         "Structure en acier avec marches en bois pour un rendu élégant, épuré et durable. " +
    //         "Chaque réalisation est pensée pour s'intégrer parfaitement à votre intérieur avec des finitions soignées.",
    // },

    {
        id: 7,
        label: "Garde-corps",
        lieu: "Paris",
        image: gardeCorps2,
        large: false,
        vitrine: false,
        type: "garde-corps",
        tags: ["Acier", "Design"],
        description:
            "Fabrication et installation d'un garde-corps intérieur sur mesure en acier noir avec motif géométrique.",
    },
    {
        id: 8,
        label: "Portail battant",
        lieu: "Gonesse",
        image: portailBattant,
        large: false,
        vitrine: false,
        type: "portail",
        tags: ["Aluminium"],
        description:
            "Fabrication et installation d’un portail battant deux vantaux en aluminium thermolaqué anthracite avec découpe laser motif géométrique moderne.",
    },
    {
        id: 9,
        label: "Portail fer forgé classique",
        lieu: "Saint-Germain-en-Laye",
        image: portailFerForge,
        large: false,
        vitrine: false,
        type: "portail",
        tags: ["Fer forgé"],
        description:
            "Fabrication et installation d'un portail battant en fer forgé, avec ornements arabesques et finition thermolaquée noire.\n" +
            "Un design élégant et intemporel, idéal pour sécuriser et valoriser une propriété résidentielle.",
    },

];

export default realisations;
