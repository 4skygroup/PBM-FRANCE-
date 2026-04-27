import Navbar from "./components/Navbar"
import Hero from "./components/Hero.jsx";
import ListeZones from "./components/zones/ListeZones.jsx";
import ListeServices from "./components/services/ListeServices.jsx";
import {WhyUs} from "./components/whyus/WhyUs.jsx";
import ListeRealisations from "./components/realisations/ListeRealisations.jsx";
import Formulaire from "./components/formulaire/Formulaire.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ListeZones />
            <ListeServices />
            <WhyUs />
            <ListeRealisations />
            <Formulaire />

            {/*toujours en dernier*/}
            <WhatsAppFloat />

        </>
    )
}

export default App