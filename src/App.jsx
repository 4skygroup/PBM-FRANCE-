import Navbar from "./components/Navbar"
import Hero from "./components/Hero.jsx";
import ListeZones from "./components/zones/ListeZones.jsx";
import ListeServices from "./components/services/ListeServices.jsx";
import {WhyUs} from "./components/whyus/WhyUs.jsx";
import Realisations from "./data/Realisations.js";
import ListeRealisations from "./components/realisations/ListeRealisations.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ListeZones />
            <ListeServices />
            <WhyUs />
            <ListeRealisations />
        </>
    )
}

export default App