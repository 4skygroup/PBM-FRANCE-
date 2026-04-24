import Navbar from "./components/Navbar"
import Hero from "./components/Hero.jsx";
import ListeZones from "./components/zones/ListeZones.jsx";
import ListeServices from "./components/services/ListeServices.jsx";
import {WhyUs} from "./components/whyus/WhyUs.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ListeZones />
            <ListeServices />
            <WhyUs />
        </>
    )
}

export default App